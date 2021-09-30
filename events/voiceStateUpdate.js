const discord  = require("discord.js")
const delay = require("delay")
module.exports = {
  name: "voiceStateUpdate",
  async execute(client, oldState, newState) {
    
    //LOGS
     if (!oldState.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await oldState.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    if (!oldState.channel && newState.channel) {
      const e = new discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(
        `${oldState.member.user.tag} has joined ${newState.channel.name}`
      );
      webhook.send(e);
    }
    if (oldState.channel && !newState.channel) {
      const e = new discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(
        `${oldState.member.user.tag} has left ${newState.channel.name}`
      );
      webhook.send(e);
    }
    if (
      oldState.channel &&
      newState.channel &&
      oldState.channel.id !== newState.channel.id
    ) {
      const e = new discord.MessageEmbed()
      .setDescription(
        `${oldState.member.user.tag} has switched from ${oldState.channel.name} to ${newState.channel.name}`
      );
      webhook.send(e);
    }
    if (!oldState.mute && newState.mute) {
      const muteType = newState.selfMute ? "self-muted" : "server-muted";
      const e = new discord.MessageEmbed()
     .setColor("BLUE")
      .setDescription(
        `${oldState.member.user.tag} has been muted. Type: (${muteType})`
      );
      webhook.send(e);
    }
    if (oldState.mute && !newState.mute) {
      const muteType = oldState.selfMute ? "self-muted" : "server-muted";
      const e = new discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(
        `${oldState.member.user.tag} has been unmuted. Type: (${muteType})`
      );
      webhook.send(e);
    }
    if (!oldState.deaf && newState.deaf) {
      const deafType = newState.selfDeaf ? "self-deafed" : "server-v";
      const e = new discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(
        `${oldState.member.user.tag} has been deafened. Type: (${deafType})`
      );
      webhook.send(e);
    }
    if (oldState.deaf && !newState.deaf) {
      const deafType = oldState.selfDeaf ? "self-deafed" : "server-v";
      const e = new discord.MessageEmbed()
      .setDescription(
        `${oldState.member.user.tag} has been undeafened. Type: (${deafType})`
      );
      webhook.send(e);
    }
    if (!oldState.streaming && newState.streaming) {
      const e = new discord.MessageEmbed()
      .setColor("BLUE")
  
    .setDescription(
        `${oldState.member.user.tag} has started streaming.`
      );
      webhook.send(e);
    }
    if (oldState.streaming && !newState.streaming) {
      const e = new discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(
        `${oldState.member.user.tag} has stopped streaming.`
      );
      webhook.send(e);
    }
    
    
    
    //FINISH
const player = client.manager.players.get(newState.guild.id);

		if (!player) return;
		if (!newState.guild.members.cache.get(client.user.id).voice.channelID) player.destroy();
		if (oldState.id === client.user.id) return;
		if (!oldState.guild.members.cache.get(client.user.id).voice.channelID) return;

		if (player.twentyFourSeven) return;

		if (oldState.guild.members.cache.get(client.user.id).voice.channelID === oldState.channelID) {
			if (oldState.guild.voice.channel && oldState.guild.voice.channel.members.filter(m => !m.user.bot).size === 0) {
				const vcName = oldState.guild.me.voice.channel.name;
				await delay(60000);

				const vcMembers = oldState.guild.voice.channel.members.size;
				if (!vcMembers || vcMembers === 1) {
					const newPlayer = client.manager.players.get(newState.guild.id);
					(newPlayer) ? player.destroy() : oldState.guild.voice.channel.leave();
	let embed1  = new discord.MessageEmbed 
					embed1.setColor("GREEN")
						embed1.setDescription(`I left vc because I was inactive for too long, for 24/7 use P!24/7`)
					try {
						const c = client.channels.cache.get(player.textChannel);
						if (c) c.send(embed1)
					} catch (err) {
						console.log(err)
					}
				}
			}
		}


}}