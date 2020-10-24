require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const glob = require('glob');
const { prefix } = require('./config.json');
const { presenceSetter } = require('./utils/presence');
const winston = require('./utils/logger.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const coolDowns = new Discord.Collection();

glob.sync('./commands/*.js').forEach((file) => {
  const command = require(file);
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  winston.log('info', 'started up and ready');

  setInterval(() => {
    const presenceData = presenceSetter();
    client.user.setActivity(presenceData[1], { type: presenceData[0] })
      .then((r) => winston.log('info', r))
      .catch((r) => winston.log('error', r));
  }, 10 * 60 * 1000);
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.guildOnly && message.channel.type === 'dm') {
    message.reply('I can\'t execute that command inside DMs!')
      .then((r) => winston.info(r))
      .catch((r) => winston.error(r));
  }

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    message.channel.send(reply);
  }

  if (!coolDowns.has(command.name)) {
    coolDowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = coolDowns.get(command.name);
  const coolDownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + coolDownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
        .then((r) => winston.info(r))
        .catch((r) => winston.error(r));
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), coolDownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    message.reply(`there was an error trying to execute that command! ${error.message}`)
      .then((r) => winston.error(`${r} + ${error.message}`));
  }
});

client.login(process.env.token);
