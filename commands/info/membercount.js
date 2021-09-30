const discord = require("discord.js");

module.exports = {
  name: "membercount",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  category: "info",
  description: "Get your id",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(
    `
Total Members - ${message.guild.memberCount}
`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}