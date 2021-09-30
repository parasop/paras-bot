const Discord = require("discord.js");
module.exports = {
    name: 'slowmode',
    aliases: ['slow', 'sm'],
    category: 'Moderation',
    description: 'Sets up the slowmode in any time you want',
    example: `P!slowmode 2`,

    run: async (client, message, args) => {

        const perms = ["MANAGE_CHANNELS" || "ADMINSTRATOR"];
        const doggo = message.guild.members.cache.get(client.user.id);

        if(!message.member.hasPermission([perms])) 
        return message.reply(` You do not have the permission to setup slowmode you need to have permissions **\`MANAGE_CHANNELS\`** or **\`ADMINISTRATOR\`**`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });

        if(!doggo.hasPermission(perms)) 
        return message.reply(` I do not have permission to setup slowmode for this channel pls enable permission **\`MANAGE_CHANNELS\`** or **\`ADMINISTRATOR\`** for me`);
        

        if (isNaN(args[0]) || parseInt(args[0]) < 0) {
            return message.reply(` Please provide the duration to to setup the slowmode for this channel example:**\`${config.Prefix}slowmode 69\`**`)
        }

        if (parseInt(args[0]) > 21600) 
        return message.reply(` I can only setup upto \`21600\` seconds maximum which is 6 hours !!`)

        const duration = args[0]

        message.channel.setRateLimitPerUser(duration)

        const embed = new Discord.MessageEmbed()
        .setTitle('Slowmode Setup Sucessfully !!')
        .setDescription(` Slowmode has been setup to **\`${duration}\`** Seconds\n\nIf you wan't to turn slowmode off type **\`!!slowmode 0\`**`)
        .addField('Channel', `<#${message.channel.id}>`, true)
        .addField('Setup By', `<@${message.author.id}>`, true)
        .setTimestamp()
        .setFooter(`Setup by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(embed)
        
    }
}
