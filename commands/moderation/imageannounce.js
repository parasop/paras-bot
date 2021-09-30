const Discord = require("discord.js");
const { Attacment } = require("discord.js");

module.exports = {
  name: "announceimg",
  category: "Info",
  description: "Announce Your Message To Anothr Channel",
  usage: "'announce #channel your message",
  run: async (client, message, args) => {
  
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have premmsions to do that!");

  let inline = true
    let sayChannel = message.mentions.channels.first() || message.guild.channels.get(args[0]);
    if (!sayChannel) return message.channel.send(`:cause: | ${message.author} mention a channel First`)
        let sayMsg = args.slice(1 || 0, args.length).join(" ");
        if (!sayMsg) return message.channel.send(":cause: | Give Me `URL` To Announce") 
        var role = message.member.highestRole;
        var embed = new Discord.MessageEmbed()
            .setColor(role.color)
            .setImage(sayMsg)
    
        message.delete()
    message.channel.send(`Successfully Announced Your Message To ` + sayChannel)
        sayChannel.send({embed}).catch(console.error);

    }
};