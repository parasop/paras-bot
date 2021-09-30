const discord= require("discord.js")
module.exports = {
  name: "messageUpdate",
  async execute(client, oldMsg, newMsg) {
    if (!newMsg.guild) return;
    if (!newMsg.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await oldMsg.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;

    // not enabled

    if (newMsg.author.id === client.user.id) return;
    if (newMsg.content === oldMsg.content) return;

    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
      .setTitle(`Message Edited`)
      .setDescription(`
${client.paras.emotes.blue} **Message Author**
${newMsg.author.tag}
      
${client.paras.emotes.blue}**Message channel**
${newMsg.channel.name}
      `)
      .addField(`${client.paras.emotes.blue} Old Message`, oldMsg)
      .addField(`${client.paras.emotes.blue} Edited Message`, newMsg);
    webhook.send(embed);
  },
};
