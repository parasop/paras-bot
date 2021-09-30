const fetch = require("node-fetch").default;
module.exports = {
  name: "djs",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client, message, args) => {
    let [query, branch] = args;

    if (!query) return message.channel.send({
      embed: {
        color: "3179FB",
        description:"<:emoji_42:763352436139098123> Please include a search query!"}});
    if (!branch) branch = "master";

    fetch(
      `https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(
        query
      )}`
    )
      .then(res => res.json())
      .then(json => {
        if (!json) return message.channel.send({
          embed: {
            color: "3179FB",
            description:"<:emoji_42:763352436139098123> Not found!"}});

        message.channel.send({ embed: json });
      })
      .catch(() => {
        message.channel.send({
          embed: {
            color: "3179FB",
            description:"<:emoji_42:763352436139098123> Couldn't fetch docs!"}});
      });
  }
};
