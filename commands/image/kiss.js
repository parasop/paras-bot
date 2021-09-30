const DIG = require("discord-image-generation");
const Discord = require("discord.js");
module.exports = {
  name: "kiss",
  botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  run: async (bot, message, args) => {
    
    let target1 = message.author
    let target2 = message.mentions.users.first();
    ///paras op
    
    let avatar1 = target1.displayAvatarURL({
      dynamic: false,
      format: "png"
    });
    let avatar2 = target2.displayAvatarURL({
      dynamic: false,
      format: "png"
    });
    // Make the image by PARAS
    let img = await new DIG.Kiss().getImage(avatar1, avatar2);
    // Add the image as an attachement
    let attach = new Discord.MessageAttachment(img, "kiss.png");
    
      message.channel.send(attach)
                      
  }
};

