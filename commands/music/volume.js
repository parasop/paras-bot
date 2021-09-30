const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "volume",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: (client, message, args) => {
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
  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      
      .setDescription(`<:emoji_42:763352436139098123> Provide me volume in 1 to 100 `)
      .setFooter("EX :- P!volume 60")
    return message.channel.send(embed)
  }

  if (isNaN(args[0])) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> that is not a vaild number")
    return message.channel.send(embed)
  }

  if (args[0] < 1 || args[0] > 100) {
    let embed = new MessageEmbed()
      .setColor("428CFF")
      .setDescription("<:emoji_42:763352436139098123> Volume always be 1 to 100")
    return message.channel.send(embed)
  }

  const volume = Number(args[0])

  player.setVolume(volume)
  return message.channel.send(`🔊 Volume seted to ${args[0]}`)
}}
