const discord = require("discord.js")

module.exports = {
  name: "servericon",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  aliases: ["sav", "guildavatar"],
  category: "info",
  description: "Get avatar of the server",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
    
      message.channel.send(embed)
    
  }
}