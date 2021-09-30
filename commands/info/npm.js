const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "npm",
      botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
    run: async (client, message, args) => {
    const package1= args[0];
    if (!package1) {
      return message.channel.send({
       embed: {
         color:  "3179FB",
         description:`<:emoji_42:763352436139098123> Please provide a valid package.`
    }}  );
    }

    let response;
    try {
      response = await fetch("https://api.npms.io/v2/search?q=" + args[0]).then(
        res => res.json()
      );
    } catch (e) {
      return message.channel.send({
        embed: {
       color: "3179FB",
       description: `<:emoji_42:763352436139098123> An error occured, please try again!`
     }} );
    }

    try {
      const pkg = response.results[0].package;
      const embed = new MessageEmbed()
        .setTitle(pkg.name)
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/ouvh4fn7V9pphARfI-8nQdcfnYgjHZdXWlEg2sNowyw/https/cdn.auth0.com/blog/npm-package-development/logo.png"
        )
        .setURL(pkg.links.npm)
        .setDescription(pkg.description)
        .addFields(
          { name: "Author :", value: pkg.author ? pkg.author.name : "None" },
          { name: "Version :", value: pkg.version },
          {
            name: "  Repository :",
            value: pkg.links.repository ? pkg.links.repository : "None"
          },
          {
            name: " Maintainers :",
            value: pkg.maintainers
              ? pkg.maintainers.map(e => e.username).join(", ")
              : "None"
          },
          {
            name: " Keywords :",
            value: pkg.keywords ? pkg.keywords.join(", ") : "None"
          }
        )
        .setColor("RANDOM")
        .setFooter(
        message.guild)
        .setTimestamp();

      message.channel.send(embed);
    } catch (e) {
      return message.channel.send({
        embed:{
          
          color: "3179FB",
          description:`<:emoji_42:763352436139098123> Please provide a valid package.`
     }} );
    }
  }
};
