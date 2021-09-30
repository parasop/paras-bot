module.exports = {
  name: "24/7",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
   
  aliases: ["247"],
  run: async (client, message, args) => {
    let vote = await client.topgg.hasVoted(message.author.id)
    
    if(!vote) { 
      message.channel.send({
     embed: {
       color: "428CCF",
       description: `<:emoji_42:763352436139098123> if you want make me 24/7 in vc so you   want to vote me on top.gg [here](https://top.gg/bot/712302003665240106/vote)`
     }})
    } else {
    
  const player = message.client.manager.players.get(message.guild.id);
		if (!player) return message.channel.send({
		  embed: {
		    color: "428CCF",
		    description:'<:emoji_42:763352436139098123> there is nothing playing'}}).then(m => m.delete({ timeout: 5000 }));

		// Check that user is in the same voice channel
		const { channel } = message.member.voice

		 
		// toggle 24/7 mode off and on
		if (player.twentyFourSeven) {
			player.twentyFourSeven = false;
			return message.channel.send({
			  embed: {
			    color: "GREEN",
			    description:'<:emoji_16:763367280817471498> 24/7 mode is now off.'}});
		} else {
			player.twentyFourSeven = true;
			return message.channel.send({
			  embed: {
			    color: "GREEN",
			    description:'<:emoji_16:763367280817471498> 24/7 mode is now on.'}});
		}
    }  
  }
}