let cooldown = {}
const discord  = require("discord.js")
const queue2 = new Map();
const queue3 = new Map();
const queue = new Map();
const games = new Map()
module.exports = {
  name: "message",
  async execute(client,message) {
    
    if (message.content === "P!welcome") {
    client.emit("guildMemberAdd", message.member);
    }  
    
    
const hellobhai = new RegExp(`^<@!?${client.user.id}>( |)$`);

//const color = message.guild.me.roles.highest.color;

if (message.content.match(hellobhai)) {
      const embed =new discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`HEY,MY NANE IS PARAS BOT`)
      .setDescription(`
My prefix is \`P!\`,

[GO TO MY WEBSITE](https://parasbotmme)

[INVITE ME](https://discord.com/oauth2/authorize?client_id=712302003665240106&scope=bot&permissions=2147483647)

[SUPPORT SERVER](https://discord.gg/B7aEqBw)
      `)
      message.channel.send(embed)
  };

let prefix = client.config.prefix;
const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const paras = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : prefix;

if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(paras)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(paras.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  //if (command) command.run(client, message, args);
  
  if (!command) return;

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------



  if (command.botPermission) {
    let neededPerms = []

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`<:error:765141667488595988> I need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  } 
   if (command.userPermission) {
    let neededPerms = []


    command.userPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`<:error:765141667488595988> You need ${neededPerms.join(", ")} permission(s) to run the command!`)
  }

  // ---------------------------------------------O W N E R ----------------------------------------------------------

  if (command.ownerOnly) {
    if (message.author.id !== "567704764813541376") return message.channel.send("<:error:765141667488595988> This command can only be use by owner")
}

  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0

  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) 

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  
if(!message.channel.permissionsFor(client.user).has("SEND_MESSAGES")) return;

if(!message.channel.permissionsFor(client.user).has("VEIW_CHANNEL")) return;

if(!message.guild.me.hasPermission("SEND_MESSAGES")) return

let ops = {
            queue: queue,
            queue2: queue2,
            queue3: queue3,
            games: games
        }


  if (command)
  try{
  command.run(client, message, args,ops);
 
}catch(error){
  client.channels.cache.get("836308773983354941").send(error)
  
}

}}