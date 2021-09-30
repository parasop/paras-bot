const discord = require("discord.js");

module.exports = {
  name: "avatar",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  aliases: ["av"],
  category: "info",
  description: "Get dp of any user",
  run: async (client, message, args) => {
    let target;

    if (message.mentions.users.first()) {
      target = message.mentions.users.first() || args[0];
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }

    let avatar = target.displayAvatarURL({ dynamic: true, size: 1024 });

    let embed = new discord.MessageEmbed();

    embed.setDescription(`[Download](${avatar})`);
    embed.setImage(avatar);
    embed.setColor("RANDOM");
    message.channel.send(embed);
  }
};
