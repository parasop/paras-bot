const discord =require("discord.js")

module.exports = {
  name: "messageDelete",
  async execute(client,message,channel) {
     if (!message.author) return;
   
  //SNIPE
    client.snipes.set(message.channel.id,{
        content:message.content,
        author:message.author.tag,
        image:message.attachments.first() ? message.attachments.first().proxyURL : null
})

//LOGS 
if (!message.guild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    if (message.author.id === client.user.id) return;
    if (!message.guild) return;
    if (!message) return;
    if(message.partial) await message.fetch()
    if (message.author === null) return;
    const w = await message.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    
if(message.length > 2000) return
    const embed = new discord.MessageEmbed()
     .setColor("FF0000")
      .setTitle("MESSAGE DELETED")
      .setDescription(`
${client.paras.emotes.red} **Message Author**
${message.author}

${client.paras.emotes.red} **Message Channel**
${message.channel}

${client.paras.emotes.red} **Message Content**
${message}
`
      )
      .setTimestamp();

    webhook.send(embed);
  

}}