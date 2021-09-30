const discord  = require("discord.js")
module.exports = {
  name: "emojiDelete",
  async execute(client, emoji) {
    if (!emoji.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await emoji.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    const embed = new discord.MessageEmbed()
      .setTitle("EMOJI DELETED")
      .setDescription(`
${client.paras.emotes.red} **Emoji Name**
 ${emoji.name}   
 
 ${client.paras.emotes.red} **Emoji Id**
 ${emoji.id}
    
    `)
.setImage(emoji.url)
.setColor("FF0000")
    webhook.send(embed);
  },
};
