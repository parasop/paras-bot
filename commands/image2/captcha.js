const Color = "RANDOM";
const Discord = require("discord.js");
const fetch = require("node-fetch")
module.exports = {
  name: "captcha",
  aliases: ["stks"],
  category: "Image",
  description: "Return A Stonks Image!",
  usage: "Stonks | <Mention Or ID>",
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
   	const m = await message.channel.send("PLEASE_WAIT");
		try {
			const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${target.username}&url=${avatar}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "captcha.png");
			message.channel.send(attachment);
			m.delete();
		} catch(e){
			console.log(e);
			message.channel.send("misc:ERR_OCCURRED", null, {
				edit: true
			});
		}

	}

}