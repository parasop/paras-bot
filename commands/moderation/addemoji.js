const Discord = require('discord.js');
const { parse } = require('twemoji-parser');
const { MessageEmbed } = require('discord.js');
const Color = `RANDOM`;
const embed = require('../../utils/embed');
module.exports = {
	name: 'addemoji',
	aliases: ['steal', 'stealemoji'],
	botPermission: [
		'EMBED_LINKS',
		'READ_MESSAGE_HISTORY',
		'USE_EXTERNAL_EMOJIS',
		'ADD_REACTIONS',
		'MANAGE_EMOJIS'
	],
	userPermission: ['MANAGE_EMOJIS'],
	description: 'Adds emoji to serverr',
	category: 'moderation',
	usage: '<emojiname> <link>',
	accessableby: 'Administrator',
	run: async (client, message, args) => {
		const emoji = args[0];
		if (!emoji) return embed(`Please Give Me A Emoji!`, message.channel);

		let customemoji = Discord.Util.parseEmoji(emoji);

		if (customemoji.id) {
			const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
				customemoji.animated ? 'gif' : 'png'
			}`;
			const name = args.slice(1).join(' ');
			message.guild.emojis.create(
				`${Link}`,
				`${name || `${customemoji.name}`}`
			);
			const Added = new MessageEmbed()
				.setTitle(`${client.paras.emotes.right}EMOJI ADDED`)
				.setColor(`GREEN`)
				.setDescription(
					`**Name**
					${name ||
						`${customemoji.name}`} 
				`)
				.setImage(Link);
			return message.channel.send(Added);
		} else {
			let CheckEmoji = parse(emoji, { assetType: 'png' });
			if (!CheckEmoji[0])
				return embed(`Please Give Me A Valid Emoji!`, message.channel);
			embed(
				`You Can Use Normal Emoji Without Adding In Server!`,
				message.channel
			);
		}
	}
};
