const discord  =require("discord.js")

module.exports = {
  name: "emojiUpdate",
  async execute(client, oldEm, newEm) {
    if (!oldEm.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await oldEm.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    let msg = "";

    if (oldEm.name !== newEm.name) {
      msg = `
${client.paras.emotes.blue} **Old name**
${oldEm.name}

${client.paras.emotes.blue} **New Name**
${newEm.name}  (${newEm})
    
${client.paras.emotes.blue} **Emoji Id**
${newEm.id}
      
   ` }
    {
      msg = `${client.paras.emotes.blue} Emoji: **${newEm.name}** was updated (${newEm})`;
    }

    const embed = new discord.MessageEmbed()
    .setTitle("<:updateEmoji:843853980429451374> EMOJI UPDATED")
    .setDescription(msg)
    .setColor("BLUE");

    webhook.send(embed);
  },
};
