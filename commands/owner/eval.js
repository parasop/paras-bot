const Discord = require("discord.js");

const owners = [
  "567704764813541376"
];
module.exports = {
  name: "eval",
  description: "owner only",
  run: async (client, message, args) => {
    if (owners.length === 0)
      return message.author.send(`Owner ID Is Not Setted!`);

    if (owners[0] === "Owner ID!") return;

    if (!owners.includes(message.author.id)) return;

    if ((message.author.id === "567704764813541376")) {
      const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              "TERA BAAP DEKE GAYA THA YA TERI ME"
            );
          }
          message.channel.send(output, {
            code: "js"
          });
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "ABE SALE");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    }
  }
};
