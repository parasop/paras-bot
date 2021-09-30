const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "join",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {
 
 const player = message.client.manager.players.get(message.guild.id)
 const { channel } = message.member.voice
if (!message.guild.me.voice.channel) {
    const player = message.client.manager.create({
      guild: message.guild.id,
      voiceChannel: channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
    });

   if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`<:emoji_42:763352436139098123> Please connect with voice channel`)
    return message.channel.send(embed)
  }

 if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }
  
    if (!channel.joinable) {
      let embed = new MessageEmbed()
        .setColor("428CCF")
        
        .setDescription("<:emoji_42:763352436139098123> I can't able to join your voice channel")
      return message.channel.send(embed)
    }

    player.connect()
    return message.channel.send({
      embed: {
        color: "GREEN",
        description: `${client.paras.emotes.right} hey, i joined your party`
      }
    });
  }
}
}
