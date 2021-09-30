const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   botPermission:["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","MANAGE_CHANNELS",],
   description: "Locks a Channel",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send({
     embed:{
       color: "FF0000",
       description:"<:emoji_17:763367241327706118> YOU DON'T HAVE REQUIRE PERMISSION"}})
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setDescription(`<a:locked:775023776571326475> ${message.channel} has been Locked`)
   .setColor("BLACK");
   await message.channel.send(embed);
   message.delete();
}
}