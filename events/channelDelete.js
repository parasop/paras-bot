const discord  = require("discord.js")

module.exports = {
  name: "channelDelete",
  async execute(client, channel) {
    if (channel.type === "dm") return;
    if (!channel.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await channel.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
 
 if (channel.type === "category") {
      msg = `
${client.paras.emotes.red} **Category name**
     ${channel.name}

${client.paras.emotes.red} **Catagory id**
${channel.id}
`
    } else {
      msg = `
${client.paras.emotes.red} **Channel name**
      ${channel.name}

${client.paras.emotes.red} **Channel  id**
${channel.id}

${client.paras.emotes.red} **Channel Type**
     ${channel.type}
`;
    }
let url = channel.guild.iconURL() || client.user.displayAvatarURL()
  
    const embed = new discord.MessageEmbed()
    
      .setTitle("<:channeldelete:769909477985222686> CHANNEL DELETED")
//.setThumbnail(url) 
      .setDescription(msg)
      .setColor("FF0000")
      .setTimestamp();

    webhook.send(embed);
  },
};
