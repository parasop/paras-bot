const discord  = require("discord.js")
module.exports = {
  name: "roleCreate",
  async execute(client, role) {
    if (!role.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await role.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    const embed = new discord.MessageEmbed()
    .setColor("GREEN")
      .setTitle("<:DE_AuditRoleAdd:763367212417155112> ROLE CREATED")
      .setDescription(`
${client.paras.emotes.arrow} **Role Name** 
  ${role} 
  
${client.paras.emotes.arrow} **Role Id**
${role.id}


  
  `);

    webhook.send(embed);
  },
};
