const Discord = require("discord.js");

module.exports = {
  name: "discord",
  category: "image",
  run: async (client, message, args) => {
    let user = (await message.mentions.users.first()) || message.author;

    let buffer = await client.AmeAPI.generate("discordhouse", {
      url: user.displayAvatarURL({ format: "png" })
    });

    message.channel.send({
      files: [
        {
          attachment: buffer,

          name: "discord.png"
        }
      ]
    });
  }
};
