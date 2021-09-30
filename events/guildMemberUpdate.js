const discord =require("discord.js")

module.exports = {
  name: "guildMemberUpdate",
  async execute(client, newMember, oldMember) {
    if (!newMember.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await newMember.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    if (!oldMember.guild) return;
    const avatar = newMember.user.displayAvatarURL({ dynamic: true });

    const embed = new discord.MessageEmbed()
      .setTimestamp()
      .setColor("BLUE");

    if (oldMember.nickname !== newMember.nickname) {
      const oldNickname = oldMember.nickname || "`None`";
      const newNickname = newMember.nickname || "`None`";
      embed
        .setTitle(`<:update_member:770223078508068874> MEMBER UPDATED`)
        .setDescription(`
        
${client.paras.emotes.blue} **User**    
${newMember} | 

${client.paras.emotes.blue} **User Id**
${newMember.id}


`)
        .addField(`${client.paras.emotes.blue} Nickname`, `${newNickname} ➔ ${oldNickname}`);

      webhook.send(embed);
    }

    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      const role = newMember.roles.cache
        .difference(oldMember.roles.cache)
        .first();
      embed
        .setTitle("<:update_member:770223078508068874> MEMBER UPDATED")
        .setDescription(`
${client.paras.emotes.blue} **User**        
${newMember} 

${client.paras.emotes.blue} **Added Role**
${role} | ${role.id}
`);

      webhook.send(embed);
    }

    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      const role = oldMember.roles.cache
        .difference(newMember.roles.cache)
        .first();
      embed
        .setTitle("<:update_member:770223078508068874> MEMBER UPDATED")
        .setDescription(`
${client.paras.emotes.blue} **User**       
${newMember} 

${client.paras.emotes.blue} **Removed Role**
${role} | ${role.id}
`);
      webhook.send(embed);
    }
  },
};
