const { MessageEmbed } = require("discord.js");

module.exports = {
  
        name: 'roleinfo',
          botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
        category: "info",
        aliases: ["rinfo"],
        description: "shows stats of the mentioned role",
        usage: "[role name | role mention | ID]",
        accessableby: 'everyone',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send({embed:{
          color: "3179FB",
          description:"**Please Enter A Role!**"}})
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send({
          embed: { 
            color: "3179FB",
            description:"**Please Enter A Valid Role!**"}});

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("#00ff00")
            .setAuthor("ROLE INFORMATION")
            .setThumbnail(message.guild.iconURL())
            .addField("<:arrow_green:793787920342712330> **ID**", `\`${role.id}\``, true)
            .addField("<:arrow_green:793787920342712330> **Name**", role.name, true)
            .addField("<:arrow_green:793787920342712330> **Hex**", role.hexColor)
            .addField("<:arrow_green:793787920342712330> **Members In Role**", role.members.size)
            .addField("<:arrow_green:793787920342712330> **Position**", role.position)
            .addField("<:arrow_green:793787920342712330> **Mentionable**", status[role.mentionable])
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}
