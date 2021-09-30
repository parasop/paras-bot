const discord  = require("discord.js")
module.exports = {
  name: "guildBanRemove",
  async execute(client, guild, user) {
    if (!guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;

    const embed = new discord.MessageEmbed()
    .setColor("GREEN")
    .SetThumbnail(`${user.displayAvatarURL()}`)
      .setTitle("<:MembroEntrou:843882309110726750> USER UNBANNED")
      .setDescription(`
${client.paras.emotes.arrow} **User Name** 
${user.username}

${client.paras.emotes.arrow} **User Id**
${user.id}
      
      `);
    webhook.send(embed);
  },
};
