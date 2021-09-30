const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "roleDelete",
  async execute(client, role) {
    if (!role.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await role.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    const embed = new MessageEmbed()
      .setTitle("ROLE DELETED")
      .setColor("FF0000")
      .setDescription(`
${client.paras.emotes.red} **Role Name**
${role.name}
      
${client.paras.emotes.red} **Role Id**
${role.id}
      `
      );

    webhook.send(embed);
  },
};
