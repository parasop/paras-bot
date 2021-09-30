const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "play",
  aliases: ["p"],
  botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run:async (client, message, args)=> {
  const { channel } = message.member.voice;
  const color = message.guild.me.roles.highest.color

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`<:emoji_42:763352436139098123> Please connect with voice channel`)
    return message.channel.send(embed)
  }

  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`<:emoji_42:763352436139098123> Please write song or give me link`)
    return message.channel.send(embed)
  }

  let play = message.client.manager.players.get(message.guild.id)

  if (!play) {
    const player = message.client.manager.create({
      guild: message.guild.id,
      voiceChannel: channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
    })

    if (!channel.joinable) {
      let embed = new MessageEmbed()
        .setColor("428CCF")
        
        .setDescription("<:emoji_42:763352436139098123> I can't able to join your voice channel")
      return message.channel.send(embed)
    }

    player.connect()
  }

  const player = message.client.manager.players.get(message.guild.id)

  if (player.options.voiceChannel !== channel.id) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> must be in same voice channel"
        
        
        )
    return message.channel.send(embed)
  }

  const search = args.join(' ')
  let res

  try {
    res = await player.search(search, message.author)
    if (res.loadType === 'LOAD_FAILED') {
      if (!player.queue.current) player.destroy()
      throw new Error(res.exception.message)
    }
  } catch (err) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      
      .setDescription(`<:emoji_42:763352436139098123> i can't find result about \`${search}\``
       )
    return message.channel.send(embed)
  }

  switch (res.loadType) {
    case 'NO_MATCHES':
      if (!player.queue.current) player.destroy()
      let embed = new MessageEmbed()
        .setColor("428CCF")
        
        .setDescription(`<:emoji_42:763352436139098123> i can't find results about \`${search}\``)
      return message.channel.send(embed)

    case 'TRACK_LOADED':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      let embed2 = new MessageEmbed()
        .setColor("428CCF")
        .setTitle("ADEED TO QUEUE")
        .setDescription(`[${res.tracks[0].title}](${res.tracks[0].uri})`)
      if (player.queue.length >= 1) message.channel.send(embed2)
      return

    case 'PLAYLIST_LOADED':
      await player.queue.add(res.tracks)
      if (!player.playing && !player.paused && player.queue.size + 1 === res.tracks.length) player.play();
      let embed3 = new MessageEmbed()
        .setColor("428CCF")
        .setTitle("ADDED PLAYLIST TO QUEUE")
        .setDescription(`**${res.playlist.name}** \`[${res.tracks.length} songs]\``)
      if (player.queue.length >= res.tracks.length) message.channel.send(embed3)
      return;

    case 'SEARCH_RESULT':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      let embed4 = new MessageEmbed()
        .setColor("428CCF")
        .setTitle("ADDED TO QUEUE")
        .setDescription(  `[${res.tracks[0].title}](${res.tracks[0].uri})`)
      if (player.queue.length >= 1) message.channel.send(embed4)
      return;
  }
}
}
