const discord  = require("discord.js")

module.exports = {
  name: "channelCreate",
  async execute(client, channel) {
    if (channel.type === "dm") return;
    if (!channel.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await channel.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    let msg = "";

    if (channel.type === "category") {
      msg = `
${client.paras.emotes.arrow} **Category Name**
${channel}

${client.paras.emotes.arrow} **Catagory Id**
${channel.id}

${client.paras.emotes.arrow} **Created at**
${Channel.createdAt}
          
          
          `;
    } else {
      msg = `
${client.paras.emotes.arrow} **Channel Name**
${channel}

${client.paras.emotes.arrow} **Channel Id**
${channel.id}

${client.paras.emotes.arrow} **Channel Type**
**${channel.type}**

${client.paras.emotes.arrow} **Created at**
${channel.createdAt}


`;
    }
let url = channel.guild.iconURL() || client.user.displayAvatarURL()
    const embed = new discord.MessageEmbed()
    //  .setThumbnail(url)
      .setTitle("<:channelcreate:769847901094019085> CHANNEL CREATED")
      .setDescription(msg)
      .setColor("GREEN")
      .setFooter(`total channel : ${channel.guild.channels.cache.size}`);

    webhook.send(embed);
  },
};
