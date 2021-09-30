const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
module.exports = {
        name: "emoji",
          botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
        aliases: ["enlarge"],
    run: async (client, message, args) => {
      const emoji = args[0];
    if (!emoji) return message.channel.send({embed:{
      color:"FF0000",
      description:"<:emoji_17:763367241327706118>provide as emoji!"}});

    let custom = Discord.Util.parseEmoji(emoji);
    const embed = new Discord.MessageEmbed()
    
    .setColor("#FFFF00");

    if (custom.id) {
        embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
        return message.channel.send(embed);
    }
    else {
        let parsed = parse(emoji, { assetType: "png" });
        if (!parsed[0]) return message.channel.send("Invalid emoji!");

        embed.setImage(parsed[0].url);
        return message.channel.send(embed);
    }

}
}