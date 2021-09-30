const { Manager } = require("erela.js");
const Spotify  = require("erela.js-spotify");
const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")

module.exports = {
  name: "ready",
  async execute(client) {
     const uptime = client.channels.cache.get("779969124725817374");
  const upembed = new discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("BOT HAS BEEN RESTARTED")
   uptime.send(upembed);

  console.log(
    `[CLIENT] ${client.user.tag} is ready with ${client.guilds.cache.size} servers`);
 //QUICK-MONGO ON READY 
client.db.on("ready", () => {
  console.log("[DB] CONNECTED WITH DATABASE");
});

//GIVEAWAYS - DATABASE
client.db.once('ready', async () => {
    if ((await client.db.get('giveaways')) === null) await client.db.set('giveaways', []);
});

    
      setInterval(() => {
      const statuses = [
       "P!help", "PING FOR HELP","https://parasbot.me"
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "WATCHING" });
    }, 60000); 
 
const nodes = [
    
    {
      host: "paras.parasgaming.repl.co", // Optional if Lavalink is local
      port: 443, // Optional if Lavalink is set to default
      password: "youshallnotpass", // Optional if Lavalink is set to defaul
      secure: true
 }];
  
  const clientID = "3c772cb0fa1642159603a1c897ddbfaf"
  const clientSecret = "f1c4d9fce1d44fc4bf93145b8b3b2ed5"

  client.manager = new Manager({
    nodes,
    plugins: [ new Spotify({ clientID, clientSecret }) ],
    autoPlay: true,
    secure: false,
    send: (id, payload) => {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    }
  });
//initialize the manager
  client.manager.init(client.user.id);

  
  //on node connect. NOTE: NODE HERE IS YOUR LAVALINK NODE/Server
  client.manager.on("nodeConnect", node => {
      console.log(`[NODE] "${node.options.identifier}" connected.`)
      client.channels.cache.get("784709134469300224").send("NODE CONNECTED")
  })
  

  //Node error event
  client.manager.on("nodeError", (node, error) => {
      console.log(`Node "${node.options.identifier}" encountered an error: ${error.message}.`);
  
  client.channels.cache.get("784709134469300224").send("NODE DISCONNECTED"); 
    
  });
  
  client.on("raw", d => client.manager.updateVoiceState(d));

  //Track start
  client.manager.on("trackStart", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    let min = Math.floor((track.duration/1000/60) << 0), sec = Math.floor((track.duration/1000) % 60);
    let sec2;
      if(sec < 10) {
          sec2 = `0${sec}`
      }
      else {
          sec2 = sec
      }

     let np = new MessageEmbed()
    .setColor("GREEN")
   .setTitle(`<a:sing:765279246759100416> NOW PLAYING`)
    .setDescription(` 
<:arrow_green:793787920342712330> **SONG NAME**
    [${track.title}](${track.uri})
    
<:arrow_green:793787920342712330> **REQUST BY**
     ${track.requester}
     
<:arrow_green:793787920342712330> **DURATION**
     [ \`${min}:${sec2}\` ]`)

     .setImage(`${track.displayThumbnail("hqdefault")}`)

     .setImage(`${track.displayThumbnail("hqdefault")}`)
    channel.send(np).then(m => m.delete({ timeout: track.duration }));
  });
  
  client.manager.on("queueEnd", player => {
    if (player.twentyFourSeven) return;

    const channel = client.channels.cache.get(player.textChannel);
    channel.send({embed: {
      color: "GREEN",
      description:"<:emoji_16:763367280817471498> Queue has ended."}});
    player.destroy();
  });
  
  
   
client.manager.on("socketClosed", (player, payload) => {
		if(payload.byRemote === true) player.destroy();
	});
	
  client.manager.on("playerMove", (player, currentChannel, newChannel) => {
	player.voiceChannel = client.channels.cache.get(newChannel);


setTimeout(() => {
 player.pause(false) 
})
	},1000);
      
  
  
  
  
  
  },
};
