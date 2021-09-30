const Discord = require("discord.js");

module.exports = {
  name: "burn",
  category: "image",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  run: async (client, message, args) => {
    let user = (await message.mentions.users.first()) || message.author;

    let buffer = await client.AmeAPI.generate("burn", {
      url: user.displayAvatarURL({ format: "png" })
    });

    message.channel.send({
      files: [
        {
          attachment: buffer,

          name: "burn.png"
        }
      ]
    });
  }
};
