const { Client, Collection} = require("discord.js");
const discord = require("discord.js");
require('discord-reply')
const client = new Client({
  disableEveryone: true
});

//----TOP.GG-----------------
const Topgg = require("@top-gg/sdk")
client.topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMjMwMjAwMzY2NTI0MDEwNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5NTEwMjMyfQ.qcPtVqjhQqXxXK1vhjuhEIdxhA5eESzEa4TK1LNLOGo")


const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMjMwMjAwMzY2NTI0MDEwNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5NTEwMjMyfQ.qcPtVqjhQqXxXK1vhjuhEIdxhA5eESzEa4TK1LNLOGo', client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})




//-------DATABASE---------------
const { Database } = require("quickmongo");
client.db = new Database(
  "mongodb+srv://PARAS-BOT:6P0Ay5rFKFy9LZvX@paras-bot.junpi.mongodb.net/parasop?retryWrites{}=true&w=majority"
);
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://PARAS-BOT:6P0Ay5rFKFy9LZvX@paras-bot.junpi.mongodb.net/parasop?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
console.log("[DB] Connected to the Mongodb database.", "log");
  }).catch((err) => {
    console.log("Unable to connect to the Mongodb database. Error:"+err, "error");
  });

//#-----IMAGE MANUPALING------
const AmeClient = require("amethyste-api")
const AMEAPI = `b238fbefaf846470dfe4409e40d5092450f0071d93a14df3c15209c3fef88916dbdfab1cce309a161f6b0ed5718a6845780e5425e42c64dee88f7d41caa0f01a`;
client.AmeAPI = new AmeClient(AMEAPI);


//FILE REQUIRE 
require("./uptime.js");
require("./utils/Player.js")
require("./structures/Giveaway.js")


// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.snipes = new Map();
client.paras = require("./emote.js")
client.config= require("./config.json");

// Run the command loader
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});



process.on('unhandledRejection', console.error)



const { GiveawaysManager } = require('discord-giveaways');
class GiveawayManagerWithOwnDatabase extends GiveawaysManager {
    async getAllGiveaways() {
        // Get all the giveaway in the database
        return await client.db.get('giveaways');
    }
async saveGiveaway(messageID, giveawayData) {
        // Add the new one
        await client.db.push('giveaways', giveawayData);
        // Don't forget to return something!
        return true;
    }

    async editGiveaway(messageID, giveawayData) {
        const giveaways = await client.db.get('giveaways');
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Push the new giveaway to the array
        newGiveawaysArray.push(giveawayData);
        // Save the updated array
        await client.db.set('giveaways', newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

    async deleteGiveaway(messageID) {
        // Gets all the current giveaways
        const data = await client.db.get('giveaways');
        // Remove the giveaway from the array
        const newGiveawaysArray = data.filter((giveaway) => giveaway.messageID !== messageID);
        // Save the updated array
        await client.db.set('giveaways', newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }
}

// Create a new instance of your new class
const manager = new GiveawayManagerWithOwnDatabase(client, {
    storage: false, // Important - use false instead of a storage path
    updateCountdownEvery: 15000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ 'MANAGE_MESSAGES', 'ADMINISTRATOR' ],
        embedColor: 'FF0000',
        reaction: '<:tada2:837629800012841020>'
    }
});
client.giveawaysManager = manager;





client.login(process.env.TOKEN);
