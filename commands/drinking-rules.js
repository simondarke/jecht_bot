module.exports = {
  name: 'drinking-rules',
  description: 'Just tells you the rules for Friday Night Drinking Madness',
  aliases: ['dr'],
  args: true,
  cooldown: 10,
  execute(message, args) {
    const data = [];
    if (args[0] === 'halo') {
      data.push(':beer: One Drink :beer: \n'
        + 'When you die\n'
        + 'If you are team killed\n'
        + 'When you obvious AFK\n'
        + '\n'
        + ':beer: :beer: Two Drinks:beer: :beer: \n'
        + 'If you murder your teammate\n'
        + 'If you die in an embarrassing way\n'
        + '\n'
        + ':beer: :beer: :beer: Three Drinks:beer: :beer: :beer: \n'
        + 'If you cause the mission to restart\n'
        + 'When the mission ends\n'
        + '\n'
        + ':persevere: Designate a Drink\n'
        + 'When you take a wraith\n'
        + 'When you kill a hunter\n'
        + '\n'
        + ':skull_crossbones: Killing Spree Rules :skull_crossbones: \n'
        + 'One drink for a Killing Spree\n'
        + 'One shot for Running Riot\n'
        + 'One shot for Untouchable\n'
        + 'One shot for Invincible\n'
        + 'Five shots for Inconvincible \n'
        + '\n'
        + 'One shot for 3rd rank of any spree\n'
        + '\n'
        + 'One drink for Killtacular \n'
        + 'One shot for whatever Simon says.\n'
        + 'Double shot for Killilnaire');
    } else if (args[0] === 'sot') {
      data.push(':skull_crossbones: Sea of Drunks rules :skull_crossbones: \n'
        + '1. One drink for every minute against the wind.\n'
        + '2. One drink for obvious AFKing\n'
        + '3. One drink every time Simon falls off the ship\n'
        + '4. One drink every time we crash into an island\n'
        + '5. One drink every time you die\n'
        + '6. Last person on the anchor has to drink\n'
        + '7. Every time Renyarr misses boarding a ship\n'
        + '8. Finish your drink if the ship sinks\n'
        + '9. One drink if you use the wrong terminology\n'
        + '10. One drink when Stephen misbehaves\n'
        + '\n'
        + 'Part of the ship, part of the crew rules - everyone drinks for each rule.\n'
        + '\n'
        + 'Part of the vibe extended rules - round robin song picking rules - kill the vibe, take a drink');
    } else if (args[0] === 'heave-ho') {
      data.push('just whatever');
    }
    return message.channel.send(data, { split: true });
  },
};
