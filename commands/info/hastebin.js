const discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const moment = require("moment")
const { ownerid } = "";
const hastebin = require('hastebin-gen');

module.exports = {
        name: "hastebin",
          botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
        usage: `P!hastebin <code/text>`,
        category: "utility",
        aliases: ["haste"],
    run: async (client, message, args) => {
      
      if(!args.join(" ")) return message.channel.send(`Write \`\`VALID\`\` text💖`);
      
      hastebin(args.join(" "), { extension: 'rage' }).then(haste => {
    message.channel.send(haste);
}).catch(error => {
    message.channel.send(`\`\`\`\n-ERROR-\n\`\`\`${error}`);
      });
      }
}