const { MessageEmbed } = require('discord.js')
const { porgressBar } = require("music-progress-bar");
const { time2 } = require('../../utils/Utils.js')

module.exports = {
  name:"nowplaying",
  aliases: ["np"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run: (client, message) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> There is nothing playing")
    return message.channel.send(embed)
  }

  const { title, author, duration, uri } = player.queue.current

  const progressBar = porgressBar({
    currentPositon: player.position > 0 ? player.position : "1",
    endPositon: duration, 
    width: 12, 
    barStyle: "<:line:836901336418353172>",
    currentStyle: "<:buttonsmile:836901799297941554>"
  },
    {
      format: " **  <bar>  ** "
    })

  let embed = new MessageEmbed()
    .setColor("GREEN")
    .setAuthor(author, message.author.avatarURL({ dynamic: true }))
    .setTitle(title)
    .setURL(uri)
    .setImage(`${player.queue.current.displayThumbnail("hqdefault")}`)
    .setDescription(`${player.playing ? "<:emoji_93:763367260013592626>" : "<:emoji_93:763352159927533568>"}  ${progressBar}  \`[${player.position <= 60000 ? `${time2(player.position)}s` : time2(player.position)}/${time2(duration)}]\``)
  return message.channel.send(embed)
}}
