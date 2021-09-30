const Discord = require("discord.js");

module.exports = {
  name: "distort",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  category: "image",
  run: async (client, message, args) => {
    let user = (await message.mentions.users.first()) || message.author;


    let buffer = await client.AmeAPI.generate("distort", {
      url: user.displayAvatarURL({ format: "png" })
    });


    message.channel.send({
      files: [
        {
          attachment: buffer,

          name: "distort.png"
        }
      ]
    });
  }
};
