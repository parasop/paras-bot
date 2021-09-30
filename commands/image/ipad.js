const Canvas = require("canvas");
const Discord  = require("discord.js")
module.exports = {
  name: "ipad",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  run: async (client, message, args) => {

const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' })
        : message.author.displayAvatarURL({ format: 'png' })

        const canvas = Canvas.createCanvas(720 ,479);
        const ctx = canvas.getContext('2d')
      
        const background = await Canvas.loadImage('https://icdn2.digitaltrends.com/image/digitaltrends_es/ipad-17-768x511.jpg')
        ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);
      
        ctx.strokeStyle = '#740';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      
        const avatar = await Canvas.loadImage(memberLogo);
        ctx.rotate(-22 * Math.PI / 180);
        ctx.drawImage(avatar , 85 , 220, 120, 184);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}