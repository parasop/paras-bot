const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "channelinfo",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES","MANAGE_CHANNELS"],
 
  description: "Get information about a channel",
  category: "utility",
  run: (client, message, args) => {
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    const nsfw = channel.nsfw ? channel.nsfw : "false";
    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`Channel Information for ${channel.name}`)
      .setThumbnail(message.guild.iconURL())
      .addField("**NSFW**", nsfw, true)
      .addField("**Channel ID**", channel.id, true)
      .addField("**Channel Type**", channel.type)
      .addField(
        "**Channel Description**",
        `${channel.topic || "No Description"}`
      )
      .addField("**Channel Created At**", channel.createdAt);

    message.channel.send(embed);
  },
};
