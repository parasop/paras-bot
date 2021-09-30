const Discord = require("discord.js")
let embed = require("../../utils/embed")
module.exports = {
  name: "nick",
  aliases: ["setnick", "setnickname", "nickname"],
  category: "moderation",
  description: "Change nickname of anyone",
  run: async (client, message, args) => {
    
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
    let uembed = new Discord.MessageEmbed()
    .setDescription("You don't have enough powers")
    .setColor("RED")
    return message.channel.send(uembed)
  }
    
    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
      let cembed = new Discord.MessageEmbed()
      .setDescription("I don't have enough powers")
      .setColor("RED")
      return message.channel.send(cembed)
    }
  
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user || message.author
    
  if (!user){
    let eembed = new Discord.MessageEmbed()
    .setDescription("You need to mention the user first")
    .setColor("RED")
    return message.channel.send(eembed)
  }
  
  let nick = args.slice(1).join(" ")
  
  if (!nick){
    let membed = new Discord.MessageEmbed()
    .setDescription("Please give the nick you want to have")
    .setColor("RED")
    return message.channel.send(membed)
  }
  
  let member = message.guild.members.cache.get(user.id);
    
   if (user.roles.highest.position > message.member.roles.highest.position)
    return embed(`You cannot  change nickname someone with an equal or higher role to you \n or if you are owner pls be yourself in a higher position`,mesage.channel)
    
    
    if (user.roles.highest.position > doggo.roles.highest.position)
    return embed(`You cannot ban someone with an equal or higher role than me `,message.channel)

    nickname = nickname.slice(0, nickname.indexOf('"'));
    if (!nickname.replace(/\s/g, '').length)
    return embed(` Please provide a nickname to give to someone `,message.channel);
  

    if (nickname.length > 32) {
    return embed(` Provided nickname is too big pls provide a nickname which is lesser than 32 characters `,message.channel);


    } else {

      let reason;
      if (args[1].startsWith('"'))
      reason = message.content.slice(message.content.indexOf(nickname) + nickname.length + 1);
      else reason = message.content.slice(message.content.indexOf(nickname) + nickname.length);

      if (!reason) reason = '`-`';
      if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
      
      try {
      
        const oldNickname = user.nickname || user.user.username;
        const changelog = `From \`${oldNickname}\` to \`${nickname}\``;

        await user.setNickname(nickname);

        const embed = new Discord.MessageEmbed()
     .setDescription(`${client.
     paras.emotes.right} successfully  changed nickname  of ${user}`)

          .setColor(message.guild.me.displayHexColor);
        await message.channel.send(embed);
      
      } catch (err) {
        embed(` Please check the role posution : ${err.message}`,message.channel);
      }
    }  
  }
}