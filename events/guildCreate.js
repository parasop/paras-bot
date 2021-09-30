const {MessageEmbed} = require("discord.js")

module.exports = {
 name : "guildCreate",
 async execute (client, guild)  { 
let embed = new MessageEmbed()

.setTitle(`Thanks for adding me in your  server ☺`)
 .setColor("GREEN")
 .setDescription(`
__**MY FEATURES**__

- MODERATION 
- MUSIC 
- WELCOME 
- GAMES
- UTILITY
- IMAGE MANUPALING 
- FUN
- GIVEAWAY 


 if you have any questions or need help with melody music [click here](https://discord.gg/B7aEqBw) to talk with our staff team
 
 `)

    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(embed).catch(err => {})

  //const sowner = `${guild.owner.user}`;
  const embed1 = new MessageEmbed()
    .setTitle("New Server Joined!")
    .setImage(`${guild.iconURL({ dynamic: true, size: 2048 })}`)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Members:`, `${guild.memberCount}`)
    //.addField(`Server Owner Tag:`, `${sowner.tag}`)
    //.addField(`ServerOwner ID:`, `${sowner.id}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`My new Server Count - ${client.guilds.cache.size}`);

client.channels.cache.get("777158641345626123").send(embed1)
}
}