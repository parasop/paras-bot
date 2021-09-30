const {MessageEmbed} = require("discord.js")
module.exports = {
 name : "guildDelete",
 async execute (client, guild)  { 

 const channel = client.channels.cache.get("777158641345626123");
 //const sowner = guild.owner.user;
  if (!channel) return;
  const embed = new MessageEmbed()
    .setTitle("I left a Server!")
    .setThumbnail(`${guild.iconURL({ format: "png" })}`)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Members:`, `${guild.memberCount}`)
    //.addField(`Server Owner Tag:`, `${sowner.tag}`)
    //.addField(`ServerOwner ID:`, `${sowner.id}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`My new Server Count - ${client.guilds.cache.size}`);
  channel.send(embed);


}}