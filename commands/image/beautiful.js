const DIG = require("discord-image-generation");
const Discord = require("discord.js");
module.exports = {
  name: "beautiful",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  run: async (client, message, args) => {
    let target;

    if (message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }

    let avatar = target.displayAvatarURL({
      dynamic: false,
      format: "png"
    });
    // Make the image by PARAS
    let img = await new DIG.Beautiful().getImage(avatar)

    // Add the image as an attachement
    let attach = new Discord.MessageAttachment(img, "beautiful.png");

    message.channel.send(attach);
  }
};
