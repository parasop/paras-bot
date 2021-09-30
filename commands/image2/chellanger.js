const Discord = require("discord.js");

module.exports = {
  name: "chellanger",
  botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  category: "image",
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let buffer = await client.AmeAPI.generate("challenger", {
      url: user.avatarURL({ format: "png", dynamic: true }),
      avatar: message.author.avatarURL({ format: "png", dynamic: true })
    });
  await  message.channel.send({
      files: [
        {
          attachment: buffer,
          name: "challenger.png"
        }
      ]
    });
  }
};
