const discord  = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "guildBanAdd",
  async execute(client, guild, user) {
    if (!guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;

  
  
  
    const embed = new discord.MessageEmbed()
    .setColor("FF0000")
      .setTitle("<a:DE_AuditMemberDel:763367347612286987> USER BANNED")
      .setThumbnail(`${user.displayAvatarURL()}`)
      .setDescription(`
${client.paras.emotes.red} **User Name**   ${user.username}

${client.paras.emotes.red} **User ID**
${user.id}`);

    webhook.send(embed);
  },
};
