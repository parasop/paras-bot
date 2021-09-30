const discord  =require("discord.js")
module.exports = {
  name: "guildUpdate",
  async execute(client, oldGuild, newGuild) {
    if (!newGuild.me.hasPermission("MANAGE_WEBHOOKS")) return;
    const w = await newGuild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "PARAS BOT");
    if (!webhook) return;
    if (oldGuild.premiumTier < newGuild.premiumTier) {
      const e = new discord.MessageEmbed()
        .setTitle("<:nitroboost:743905977996410901> SERVER BOOSTED")
        .setColor("pink")
        .setDescription(
          `This server is now on boost level ${newGuild.premiumTier}!`
        );
      webhook.send(e);
    }
    if (oldGuild.premiumTier > newGuild.premiumTier) {
      const e = new discord.MessageEmbed()
        .setTitle("<:nitroboost:743905977996410901> SERVER BOOST DOWN")
        .setColor("pink")
        .setDescription(
          `This server is now on boost level ${newGuild.premiumTier}!`
        );
      webhook.send(e);
    }
    if (oldGuild.region !== newGuild.region) {
      const e = new discord.MessageEmbed()
        .setTitle(" <:infoUpdate:843897703447658496> SERVER REGION CHANGED")
        .setColor("BLUE")
        .setDescription(`The region is now ${newGuild.region}!`);
      webhook.send(e);
    }
    if (!oldGuild.banner && newGuild.banner) {
      const e = new discord.MessageEmbed()
        .setTitle(" <:infoUpdate:843897703447658496> SERVER BANNER UPDATED")
        .setColor("BLUE")
        .setDescription(`The banner is ${newGuild.banner}!`);
      webhook.send(e);
    }
    if (oldGuild.banner !== newGuild.banner) {
      const e = new discord.MessageEmbed ()
        .setTitle(" <:infoUpdate:843897703447658496> SERVER BANNER UPDATD")
        .setColor("BLUE")
        .setDescription(`The banner is now ${newGuild.banner}!`);
      webhook.send(e);
    }
    if (!oldGuild.afkChannel && newGuild.afkChannel) {
      const e = new discord.MessageEmbed ()
        .setTitle(" <:infoUpdate:843897703447658496> AFK CHANNEL UPDATED")
        .setColor("BLUE")
        .setDescription(`The afk channel is now ${newGuild.afkChannel.name}!`);
      webhook.send(e);
    }
    if (oldGuild.afkChannel !== newGuild.afkChannel) {
      const e = new discord.MessageEmbed ()
      .setColor("BLUE")  
        .setTitle(" <:infoUpdate:843897703447658496> AFK CHANNEL UPDATED")
        .setDescription(`The afk channel is now ${newGuild.afkChannel.name}!`);
      webhook.send(e);
    }
    if (!oldGuild.vanityURLCode && newGuild.vanityURLCode) {
      const e = new discord.MessageEmbed ()
        .setTitle(" <:infoUpdate:843897703447658496> VANITY URL")
        .setColor("BLUE")
        .setDescription(`The vanity url code is ${newGuild.vanityURLCode}!`);
      webhook.send(e);
    }
    if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
      const e = new discord.MessageEmbed ()
        .setTitle(" <:infoUpdate:843897703447658496> VANITY URL CHANGED")
        .setColor("BLUE")
        .setDescription(
          `The vanity url code is now  ${newGuild.vanityURLCode}!`
        );
      webhook.send(e);
    }
    if (oldGuild.name !== newGuild.name) {
      const e = new discord.MessageEmbed ()
        .setTitle(" <:infoUpdate:843897703447658496> SERVER NAME CHANGED")
        .setColor("BLUE")
        .setDescription(`The server name is now  ${newGuild.name}!`);
      webhook.send(e);
    }
  },
};
