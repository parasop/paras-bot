const fetch = require("node-fetch");
const url = require("url");
const world = ["pronhub", "xnxx", "XVEDIO", "xvedio", "porn", "xxx", "sex"];
module.exports = {
  name: "screenshot",
  description: "screenshot the homepage of the site you provide!",
  usage: "[sitelink]",
  category: "fun",
  cooldown: 5,
  run: async (client, message, args) => {
    if (message.content.includes(world)) {
      message.channel.send("NO  NSFW PLZ I HATE IT");
    }
    const urls = args[0];
    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
      return message.channel.send(`Here is a screenshot from requested URL`, {
        files: [{ attachment: body, name: "screenshot.png" }]
      });
    } catch (err) {
      if (err.status === 404)
        return message.channel.send("Could not find any results. Invalid URL?");
      return message.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
  }
};

//Screenshot Command, basically the bot will take a screenshot on the site u provided.
