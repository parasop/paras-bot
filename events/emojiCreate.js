const discord = require('discord.js');

module.exports = {
	name: 'emojiCreate',
	async execute(client, emoji) {
		if (!emoji.guild.me.hasPermission('MANAGE_WEBHOOKS')) return;
		const w = await emoji.guild.fetchWebhooks();
		const webhook = w.find(w => w.name === 'PARAS BOT');
		if (!webhook) return;
		const embed = new discord.MessageEmbed()
			.setTitle('<:emojiCreate:843835936834977802> EMOJI CREATED')
			.setDescription(
`${client.paras.emotes.arrow} **Emoji Name**
**${emoji.name}** 

${client.paras.emotes.arrow} **Emoji Id**
${emoji.id}


${client.paras.emotes.arrow} **Created At**
${emoji.createdAt}
`)
.setImage(emoji.url)
			.setColor('GREEN')
			.setTimestamp();

		webhook.send(embed);
	}
};
