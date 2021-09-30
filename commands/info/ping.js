 const discord = require('discord.js');

module.exports = {
  name: 'ping',
  botPermission: ["EMBED_LINKS"],
 userPermission: [""],
  description: 'The ping Command',
  category: 'Info',
  aliases: ['pong'],
  run: async (client, message, args) => {
    
    message.lineReplyNoMention(`Pinging...`).then(m => {
      
      let ping = m.createdTimestamp - message.createdTimestamp;
      
      let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .addField(`GATEWAY PING`, `${client.ws.ping}ms`, true) //true or false
      .addField(`REST PING:`, `${ping}ms`, true); //this again is false OwO | ms = mili seconds
      
      m.delete();
       message.lineReplyNoMention(embed)
    })
  }
}
