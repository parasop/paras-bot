const Discord = module.require("discord.js");
const ms = require("ms"); 

module.exports = {
    name: "timedlock",
    botPermission:["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","MANAGE_CHANNELS"],
   
    description: "Start a timed lockdown in a channel",
    run: async(client, message, args) => {
        const time = args.join(" ");
        if (!time) {
        return message.channel.send("Enter a valid time period in `Seconds`, `Minutes` or `Hours`")
        }
        if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
            return message.channel.send(`You don't have enough Permisions`)
        }
        message.channel.overwritePermissions([
            {
               id: message.guild.id,
               deny : ['SEND_MESSAGES'],
            },
           ],);
           const embed = new Discord.MessageEmbed()
           .setDescription(`<a:locked:775023776571326475>${message.channel} has been placed under lockdown for ${time}`)
           .setColor("RANDOM");
           message.channel.send(embed)

           let time1 = (`${time}`)
           setTimeout(function(){
           message.channel.overwritePermissions([
               {
               id: message.guild.id,
               null: ['SEND_MESSAGES'],
               },
            ],);
           const embed2 = new Discord.MessageEmbed()
           .setDescription(`<a:locked:775023776571326475>Locked has been lifted in ${message.channel}`)
           .setColor("RANDOM");
           message.channel.send(embed2);
        }, ms(time1));
        message.delete();
    }
}