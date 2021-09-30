const hastebin = require("hastebin-gen");
module.exports = {
  name: "discrim",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  category: "help",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
const query = args[0];
    if (!query) return message.channel.send("Please include a discriminator!");

    const users = client.users.cache.filter(user => user.discriminator === query).map(m => m.tag);
    if (!users.length) return message.channel.send(`No users found with discriminator **#${query}**!`);

    hastebin(users.join("\n"))
        .then(haste => {
            message.channel.send(`${users.length} Users found with discriminator **#${query}**!\n${haste}`);
        })
        .catch(e => {
            message.channel.send("Something went wrong, please try again later!");
        });
}}