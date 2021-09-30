const { MessageEmbed } = require('discord.js');
const moment = require("moment")
const permissions = require('../../JSON/permission.json');
moment.suppressDeprecationWarnings = true;


module.exports  = {
  name: "permission",
  botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async(client,message,args) => {
const member =  getMemberFromMention(message, args[0]) || 
      message.guild.members.cache.get(args[0]) || 
      message.member;

    const memberPermissions = member.permissions.toArray();
    const finalPermissions = [];
    for (const permission in permissions) {
      if (memberPermissions.includes(permission)) finalPermissions.push(`+ ${permissions[permission]}`);
      else finalPermissions.push(`- ${permissions[permission]}`);
    }

    const embed = new MessageEmbed()
      .setTitle(`${member.displayName}'s Permissions`)
      .setDescription(`\`\`\`diff\n${finalPermissions.join('\n')}\`\`\``)
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }

}

function getMemberFromMention(message, mention) {
    if (!mention) return;
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches) return;
    const id = matches[1];
    return message.guild.members.cache.get(id);
  }