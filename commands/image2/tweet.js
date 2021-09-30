const canvacord = require("canvacord");
const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "tweet",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  category: "IMAGE",
  usage: "Tweet <ARGS>",
  description: "tweet something",
  run: async (client, message, args) => {
    let user = args[0];
    let text = args.slice(1).join(" ");

    if (!user) {
      return message.channel.send({
        embed: {
          color: "3179FB",
          description:
            "<:emoji_42:763352436139098123> You Have To Enter Someone's Twitter Nickname"
        }
      });
    }

    if (!text) {
      return message.channel.send({
        embed: {
          color: "3179FB",
          description:
            "<:emoji_42:763352436139098123> You must enter a tweet message!"
        }
      });
    }

    try {
      let res = await fetch(
        encodeURI(
          `https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`
        )
      );
      let json = await res.json();
      let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
      await message.channel.send(``, attachment);
      message.delete({ timeout: 5000 });
    } catch (e) {
      message.channel.send({
        embed: { description: "Error, Try Again! Mention Someone" }
      });
    }
  }
};
