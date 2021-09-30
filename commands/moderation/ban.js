const Discord = require("discord.js")
const embed = require("../../utils/embed")
module.exports  =  {
  name: "ban",
 botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","BAN_MEMBERS"],
     userPermission: ["BAN_MEMBERS"],
     cooldown: 1000,
run: async(client,message,args) => {
    
  if(!args[0]) {
    embed("mention someone them you want ban \n example : P!ban <@user> ,<reason>",message.channel)
  }
    
   let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
   
   let reason = args.slice(1).join(" ") || "reason not specified";
  
 if(!user) {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} Please mention vaild  user!\n example - P!ban <@user> <reason>
     `
 }})
 }
 
if (user.id === client.user.id)  {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} i can't ban my self`
 }})
}
 if (user.id === message.author.id)  {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} You can't  ban your  self`
 }})
 
 }
 if (message.guild.ownerID !== message.author.id && user.roles.highest.comparePositionTo(message.member.roles.highest) >= 0)
     {
   return 
   message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} That user has highest role or equal role to me so i can't able to ban`
 }})
     }
 
 
 if (reason.length > 100) {return message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} the reason cannot exceed 100 characters`
 }})
 }
    if (!message.guild.member(user).bannable) {return message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} I can't  able to ban that user!`
 }})
 
    }
 
 message.guild.members.ban(user, { reason: reason })
    const embedBan = new Discord.MessageEmbed()
    .setTitle(`${client.paras.emotes.right} SUCCESSFULLY  BANNED!`)
      .setThumbnail(user.user.displayAvatarURL())
      .addField("user:", `${user}`)
      .addField("ID:", `${user.id}`)
      .addField("reason:", `${reason}`)
      .addField("mod/admin:", `${message.author.tag}`)
      .setColor("#16b4f2")
 
    message.channel.send(embedBan);

    const embedUserBan = new Discord.MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL())
      .addField("server:", `${message.guild.name}`)
      .addField("user:", `${user}`)
      .addField("ID:", `${user.id}`)
      .addField("reason:", `${reason}`)
      .addField("mod/admin:", `${message.author.tag}`)
      .setColor("#16b4f2")
      
 
    user.send(embedUserBan).catch(e => {})
 
 
 
 
 
 
 
  }
  
}