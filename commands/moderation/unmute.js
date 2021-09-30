const Discord  = require("discord.js")
module.exports  = {
   name: "unmute",
   run: async (client,message,args ) => {

let user= message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let role = message.guild.roles.cache.find(x => x.name === 'Muted');
    let reason = args.slice(1).join(' ') || "reason not defined"
    
     if (!user) return message.channel.send({
        embed: {
          color: "#3179FB",
          description: `<:emoji_42:763352436139098123> Please mention vaild user for mute!`
        }
      });
   if (role && !user.roles.cache.has(role.id))
      return message.channel.send('that user is not muted!');


    user.roles.remove(role.id)

    const embed = new Discord.MessageEmbed()

      .setTitle(`${client.paras.emotes.right} SUCCESSFULLY UNMUTED`)
      .addField('member unmuted', `${user.user.tag} | ${user.id}`)
      .addField(`mod/admin`, `${message.author.tag}`)
      .addField(`reason`, `${reason}`)
      .setColor(`#11DD00`)
      
    message.channel.send(embed);

    const embedMuteUser = new Discord.MessageEmbed()
      .setTitle(`you have been unmute`)
      .addField(`server`, `${message.guild.name} | ${message.guild.id}`)
      .addField(`member unmuted`, `${user.user.tag} | ${user.id}`)
      .addField(`mod/admin`, `${message.author.tag}`)
      .addField(`reason`, `${reason}`)
      .setColor(`#FF0000`)
    usuario.send(embedMuteUser).catch(e => {});
}}