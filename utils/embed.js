const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("428CCF")
  .setDescription("<:emoji_42:763352436139098123> " +""+ text);

    await channel.send(embed)
}