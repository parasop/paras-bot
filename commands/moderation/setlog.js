const Discord = require("discord.js");
const embed = require("../../utils/embed")
module.exports = {
  name: "setlog",
  category: "config",
  usage: "setlog <#channel>",
  botPermission: ["ADMINISTRATOR"],
  userPermission: ["ADMINISTRATOR"],
  description: "Set the log channel",
  run: async (client, message, args) => {
    const w = await message.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    let channel = message.mentions.channels.first()

    if (!channel) {
      //if channel is not mentioned
      if (!webhook) {
        return embed("MENTIONED A VAILD CHANNEL",message.channel);
      } else {
        webhook.delete({ reason: `${message.author} has removed logs` });
        embed("logs has been removed from server",message.channel);
      }
    } else {

      channel.createWebhook("PARAS BOT", {
        avatar:
          "https://cdn.discordapp.com/attachments/727930035255640194/836667251851657266/JPEG_20190915_155209.jpg",
        channel: channel,
      });

      message.channel.send({
        embed: 
        {
          color: "GREEN",
          description:`${client.paras.emotes.right} successfully  setted log channel to ${channel}`}}); //send success message
    }
  },
};
