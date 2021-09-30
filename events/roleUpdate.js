const discord  =require("discord.js")

module.exports = {
  name: "roleUpdate",
  async execute(client, oldRole, newRole) {
    if (!oldRole.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await oldRole.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
		if (oldRole.name != newRole.name) {
			const embed = new discord.MessageEmbed()
			.setTitle("ROLE UPDATED")
				.setDescription(`
${client.paras.emotes.blue} **Role**
${newRole} 

${client.paras.emotes.blue} **Role Id**
${newRole.id}

${client.paras.emotes.blue} **Old name**
${oldRole.name}

${client.paras.emotes.blue} **New Name**
${newRole.name}
`)
				.setColor("BLUE")
				.setTimestamp();
        webhook.send(embed);
		}
		// role colour change
		if (oldRole.color != newRole.color) {
			const embed = new discord.MessageEmbed()
			.setTitle("ROLE UPDATED")
				.setDescription(`**Role color of ${newRole} (${newRole.name}) changed**`)
				.setColor("BLUE")
				.setFooter(`ID: ${newRole.id}`)
				.addField('Before:', `${oldRole.color} ([${oldRole.hexColor}](https://www.color-hex.com/color/${oldRole.hexColor.slice(1)}))`)
				.addField('After:', `${newRole.color} ([${newRole.hexColor}](https://www.color-hex.com/color/${newRole.hexColor.slice(1)}))`)
				.setTimestamp();
        webhook.send(embed);
		}
		if (oldRole.permissions != newRole.permissions) {
			const embed = logBed(client)
				.setDescription(`**Role permissions of ${newRole} (${newRole.name}) changed**\n[What those numbers mean](https://discordapp.com/developers/docs/topics/permissions)`)
				.setColor("BLUE")
				.setFooter(`ID: ${newRole.id}`)
				.addField('Before:', oldRole.permissions.bitfield)
				.addField('After:', newRole.permissions.bitfield)
				.setTimestamp();
        webhook.send(embed);
		}


  },
};
