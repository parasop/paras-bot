const discord = require("discord.js");
var cpuStat = require('cpu-stat');
const si = require('systeminformation');
const os = require('os');
const ms = require('ms');
var osutils = require('os-utils');


var avgClockMHzCore2 = cpuStat.clockMHz(2);
    var totalCores = cpuStat.totalCores();
    var platform = os.platform();
    var uptime = os.uptime();
    var totalmem = osutils.totalmem();
    let totalRam = totalmem/1024; // Converting it to GB
    let usedRam = (process.memoryUsage().heapUsed/1024/1024).toFixed();//converted this to MB
    let freeMemCalculate = (usedRam/1024).toFixed(2); //calculating Free Ram in GB
    let freeRam = totalRam - freeMemCalculate;

module.exports = {
  name: "botinfo",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  category: "help",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    cpuStat.usagePercent(function(err,percent,seconds){
      if(err){
        return console.log(err);
      }
      si.cpu(function(data){

    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", `PARAS BOT #0203`)
      .addField(
        "BOT DEVELOPER ",
        `
<:DB:729627031448453213> INCASX丶PARAS OPᴰᴱⱽ#9237 
<:DB:729627031448453213> INCASX丶P̶ʀᴏғᴇssᴏʀᴰᴱⱽ ⏦#6025  `
      )
      .addField(
        "TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "TOTAL CHANNAL",
        `${client.channels.cache.size}`
      )
      .addField(
        "TOTAL USER",
            `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
        true  )
        .addField("CREATED AT", `${client.user.createdAt.toDateString()}`)
      .addField("BOT LIBRARY", `discord.js v12.5.1`)
      .addField("NODE.JS", `${process.version}`)
    .addField("RAM USAGE",`${usedRam}MB /${totalRam.toFixed(2)}GB`)
    .addField("CPU",`${os.cpus()[0].model}`)
.addField("UPTIME",ms(client.uptime, { long: true }))
.addField("BOT LINK","https://top.gg/bot/712302003665240106")

      .setColor("#000000")
      .setFooter(`information about bot`);

    message.channel.send(embed);
      })
    })
  }
}
