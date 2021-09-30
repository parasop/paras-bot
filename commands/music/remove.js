const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "remove",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run:(client, message, args) => {
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
      .setDescription(`<:emoji_42:763352436139098123> must join be in same voice  channel`)
    return message.channel.send(embed)
  }

  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(messages.messages.incorrectUse)
      .setDescription(`<:emoji_42:763352436139098123>  provde me number from queue,  which song you want remove`)
    return message.channel.send(embed)
  }

  if (isNaN(args[0])) {
    let embed = new MessageEmbed()
      .setColor(color)
      .setDescription("<:emoji_42:763352436139098123>args must be number")
    return message.channel.send(embed)
  }

  if (args[0] > player.queue.length || args[0] <= 0) {
    let embed = new MessageEmbed()
      .setColor(color)
      .setDescription(`<:emoji_42:763352436139098123> last song number  is ${player.queue.length}`)
    return message.channel.send(embed)
  }

  player.queue.splice(args[0] - 1, 1) 
  return message.react({
    embed: {
      color: "GREEN",
      description: `${client.paras.emotes.right} successfully removed  that song`
    }
  })
}
}
