const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "resume",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run:(client, message) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> Please connect to a voice channel")
    return message.channel.send(embed)
  }

  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }
  if (player.paused) {
    player.pause(false)
    return message.channel.send({embed:{
     color: "GREEN",
      description: `${client.paras.emotes.right} RESUME`
    }})()
  } else if (!player.paused) {
    player.pause(true)
    return message.channel.send({
      embed: {
        color: "YELLOW",
        description: "<:emoji_93:763352159927533568> PAUSED"
      }
    })
  }
}

}
