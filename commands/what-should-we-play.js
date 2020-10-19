module.exports = {
  name: 'what-should-we-play',
  aliases: ['wswp'],
  description: 'Randomly chooses a game to play.',
  cooldown: 30,
  execute(message) {
    message.channel.send('Choosing a game...');
    const baseGames = [
      'State Of Decay 2',
      'Halos',
      'Heave Ho',
      'Derek Acorah Simulator 2020',
      'Phasmaphobia',
      'FFXIV',
      'Sea Of Thieves',
      'gMod',
      'Tower Unite',
      'DayZ',
    ];
    const chosen = baseGames[Math.floor(Math.random() * baseGames.length)];

    return message.channel.send(`Hows about **${chosen}**? It's probably not completely shite :shrug:`);
  },
};
