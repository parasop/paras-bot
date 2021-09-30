const Discord = require("discord.js")


module.exports = {
  name: "mute",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","MANAGE_ROLES"],
     userPermission:["MANAGE_ROLES"],
run : async (client,message,args) => {
 
  const user =
      client.users.cache.get(args[0]) || message.mentions.members.first();
    if (!user) return message.channel.send({
        embed: {
          color: "#3179FB",
          description: `<:emoji_42:763352436139098123> Please mention vaild user for mute!`
        }
      });
    const reason = args.slice(1).join(" ");
    if (!reason)
      return message.channel.send({
        embed: {
          color: "#3179FB",
          description: `<:emoji_42:763352436139098123> Provide me reason for mute!`
        }
      });
    const vrole = user.roles.cache;

    const mutedRole = message.guild.roles.cache.find(r => r.name=== "Muted");
 const mentionedPositions = user.roles.highest.position;
    const memberPosition = message.member.roles.highest.position;
    const botPosition = message.guild.me.roles.highest.position;
    if (mentionedPositions >= botPosition) {
      return message.channel.send({embed: {
        color: `3179FB`,
       description: "<:emoji_42:763352436139098123> I can't mute this member as their role is higher/equal to mine!"
     }} );
    }
    
  if(mutedRole && user.roles.cache.has(mutedRole.id)) return message.channel.send({
    embed: {
      color: "428CCF",
      description:`${client.paras.emotes.error} that user is already muted`}}); 
      
if (reason.length > 1024) {
  return message.channel.send({embed: {
   color: "428CCF",
     description: `${client.paras.emotes.error} the reason cannot exceed 100 characters`
 }})
 }

       if (!mutedRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'Muted',
                color: 'BLACK',
            }
        }).catch(err => console.log(err))
    }

  await user.roles.remove(vrole);
          await message.guild.member(user).roles.add(mutedRole);

let embed = new Discord.MessageEmbed()

.setTitle(`${client.paras.emotes.right} SUCCESSFULLY MUTED`)
.addField('member muted', `${user.user.tag} | ${user.id}`)
.addField(`mod/admin`, `${message.author.tag}`)
.addField(`reason`, `${reason}`)
.setColor(`#11DD00`)
message.channel.send(embed);

const embedMuteUser = new Discord.MessageEmbed()
.setTitle(`you have been muted`)
.addField(`server`, `${message.guild.name} | ${message.guild.id}`)
.addField(`member muted`, `${user.user.tag} | ${user.id}`)
.addField(`mod/admin`, `${message.author.tag}`)
.addField(`reason`, `${reason}`)
.setColor(`#FF0000`)

user.send(embedMuteUser).catch(e => {})

  }
}