module.exports = {
	name: 'clear',
	aliases: ['c', 'purge'],
userPermission:["MANAGE_MESSAGES"],
	category: 'moderation',
	description: 'Delete bulk messages with 1 command',
	run: async (client, message, args) => {
	 
	
	 if(!args[0]){
	    
	   message.channel.send({
	     embed: {
	       color: "GREEN",
	       description: `COMMAND: P!clear\n P!clear all \n P!clear  <amount> <@user> \n P!clear <amount>`
	     }
	   })
	  }
	  
	 
	if(args[0] === "all"){
			message.channel.send({
			  embed: {
			    color: "428CCF" ,
			    description: `${client.paras.emotes.error} Are you  sure you  want delete all messages \n type -confirm`
			  }
			});
			await message.channel.awaitMessages((m) => (m.author.id === message.author.id) && (m.content === "-confirm"), {
				max: 1,
				time: 20000,
				errors: ["time"]
			}).catch(() => {
			});
			const position = message.channel.position;
			const newChannel = await message.channel.clone();
			await message.channel.delete();
			newChannel.setPosition(position);
			return newChannel.send({
			  embed: {
			    color:"GREEN" ,
			    description: `${client.paras.emotes.right} Cleared all messages  of this channel`
			  }
			});
}
		let amount = args[0];
		if(!amount || isNaN(amount) || parseInt(amount) < 1){
			return message.channel.send({
			  embed: {
			    color:"GREEN" ,
			    description: `${client.paras.emotes.right} Cleared ${amount} messages  of this channel`
			  }
			});
		}

		//await message.delete();

		const user = message.mentions.users.first();

		let messages = await message.channel.messages.fetch({limit:100});
		messages = messages.array();
		if(user){
			messages = messages.filter((m) => m.author.id === user.id);
		}
		if(messages.length > amount){
			messages.length = parseInt(amount, 10);
		}
		messages = messages.filter((m) => !m.pinned);
		amount++;

		message.channel.bulkDelete(messages, true);

		let toDelete = null;

		if(user){
			toDelete = await message.channel.sned({
			  embed:{
			    description: `cleard  ${amount} messages  of ${user} `
			} })
		} else {
			toDelete = await message.channel.send({
			  embed: {
			    color: "green",
			    description:`cleared ${--amount} messages`}})
		}

		setTimeout(function(){
			toDelete.delete();
		}, 2000);
	}
};
