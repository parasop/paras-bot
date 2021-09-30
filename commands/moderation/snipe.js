const Discord = require('discord.js');

module.exports = {
        name: 'snipe',
        botPermission:["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","MANAGE_CHANNELS",],
        description: 'Snipes last deleted message',
        aliases: [""],
        usage: '',
        accessableby: "",

    run: async (client, message, args) => {
    
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("There is no deleted message!")

        const embed = new Discord.MessageEmbed()

        .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))
        .addField('Content Of the Message :', msg.content || "NONE")
        .setColor("RANDOM")
        .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())
        .setTimestamp()
        if(msg.image)embed.setImage(msg.image)

        message.channel.send(embed)

    }
}
