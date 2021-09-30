const { MessageEmbed } = require('discord.js')

module.exports = {
  name:"loop",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run: (client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> there is nothing playing to loop")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> Please connect with voice channel")
    return message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }
  if (args[0] && args[0].toLowerCase() == 'song') {
    if (player.trackRepeat == false) {
      player.setTrackRepeat(true)
      return message.channel.send({embed: {
        color: "GREEN",
        description: `${client.paras.emotes.right} LOOP ENABLED `
      }})
    } else {
      player.setTrackRepeat(false)
      return message.channel.send({embed: {
        color: "FF0000",
        description: `${client.paras.emotes.right} LOOP DISABLED `
      }})
    }
  }

  if (args[0] && args[0].toLowerCase() == 'queue') {
    if (player.queueRepeat == false) {
      player.setQueueRepeat(true)
      return message.channel.send({embed: {
        color: "GREEN",
        description: `${client.paras.emotes.right} LOOP ENABLED `
      }})
    } else {
      player.setQueueRepeat(false)
      return message.react({embed: {
        color: "FF0000",
        description: `${client.paras.emotes.wrong} LOOP DISABLED `
      }})
    }
  }

  if (!args[0] || args[0].toLowerCase() != 'song' || args[0].toLowerCase() != 'queue') {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setTitle("TRY THIS")
      .setDescription(`P!loop queue \n P!loop song`)
    return message.channel.send(embed)
  }
}}
