const Discord = require("discord.js");
const embed = require("../../utils/embed")
module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot ",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","KICK_MEMBERS"],
     userPermission: ["KICK_MEMBERS"],
cooldown: 50000,
  usage: "kick <@user> <reason>",
  run: (client, message, args) => {
   if(!args[0]) {
    embed("mention someone them you want kick \n example : P!kick <@user> ,<reason>",message.channel)
  } 
    
    let user= message.mentions.members.first() || message.guild.members.cache.get(args[0])
     let reason = args.slice(1).join(" ") || "reason not specified";
  
  if(!user) {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} Please mention vaild  user!\n example - P!kick <@user> 
     `
 }})
 }
 if (user.id === client.user.id)  {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} i can't kick my self`
 }})
}
 if (user.id === message.author.id)  {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} You can't  kick  your  self`
 }})
 
 }
 if (message.guild.ownerID !== message.author.id && user.roles.highest.comparePositionTo(message.member.roles.highest) >= 0)
     {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} That user has highest role or equal role to me so i can't able to kick`
 }})
     }
    
  if (!message.guild.member(user).kickable) {return message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} I can't  able to ban that user!`
 }})
 
    }
 
    
  const embedKick = new Discord.MessageEmbed()
      .setTitle(`${client.paras.emotes.right} SUCCESSFULLY  KICKED`)
      .addField(`kicked User`, `${user.user.tag} : ${user.id}`)
      .addField(`MOD/STAFF`, `${message.author.tag}`)
      .addField(`reason`, `${reason}`)
      .setColor("#16b4f2")
    message.channel.send(embedKick);
 
    const embedKickUser = new Discord.MessageEmbed()
      .addField(`server`, `${message.guild.name} : ${message.guild.id}`)
      .addField(`USER `, `${user.user.tag} : ${user.id}`)
      .addField(`MOD/STAFF`, `${message.author.tag}`)
      .addField(`REASON`, `${reason}`)
      .setColor("RANDOM")
    user.send(embedKickUser).catch(e => message.channel.send(''));
    message.guild.member(user).kick(reason).catch(err => {})  
    
    
  }
}