const {
    MessageEmbed
} = require("discord.js");
const {
    Utils
} = require("erela.js");


module.exports = {
  name: "eq",
  aliases: ['EQUALIZER',"filter","filters"],
 botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {
    const player = message.client.manager.players.get(message.guild.id)
  
  if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> there is nothing playing to loop")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> Please connect with voice channel")
    return message.channel.send(embed)
  }

  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }
let embed = new MessageEmbed()
      
     .setTitle('<a:sing:765279246759100416> EQUALIZER COMMANDS')
     .setColor("GREEN")
        .setTimestamp()
      .setDescription(`
<:arrow_green:793787920342712330> **EQUALIZER TYPE**
presets, party,bass,trablebass(tb),radio,soft,bassboost(bb)
     
<:arrow_green:793787920342712330> <:arrow_green:793787920342712330> **CUSTOM EQUALIZER**
 Usage there are 14 bands and value between  -1 to 1
     ex:-
     [1] P!eq custom 0 0 0 0 0 0 0 0 0 0 0 0 0 0
     [2] P!eq custom 1 0.24
     [3] there are only 2 bands so it will change first two bands other will be 0
<:arrow_green:793787920342712330> **HOW TO OFF EQUALIZER**
    P!eq off
      
      
      `)
       
    if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'party') {
        player.setEQ([{
                band: 0,
                gain: -1.16
            },
            {
                band: 1,
                gain: 0.28
            },
            {
                band: 2,
                gain: 0.42
            },
            {
                band: 3,
                gain: 0.5
            },
            {
                band: 4,
                gain: 0.36
            },
            {
                band: 5,
                gain: 0
            },
            {
                band: 6,
                gain: -0.3
            },
            {
                band: 7,
                gain: -0.21
            },
            {
                band: 8,
                gain: -0.21
            }
        ]);
        if (args[0] == 'party') return message.channel.send({embed: {
          color: "GREEN",
          description:'<:emoji_16:763367280817471498>Party Mode ON!!'}});
        message.channel.send(`EQ on !!🎵`)
    } else if (args[0] == 'off' || args[0] == 'of' || args[0] == 'OFF') {
        player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
        message.channel.send({embed: {
          color: "FF000",
          description:'EQUALIZER IS OFF NOW'}});
    } else if (args[0] == 'bass' || args[0] == 'Bass') {
        player.setEQ([{
                band: 0,
                gain: 0.6
            },
            {
                band: 1,
                gain: 0.7
            },
            {
                band: 2,
                gain: 0.8
            },
            {
                band: 3,
                gain: 0.55
            },
            {
                band: 4,
                gain: 0.25
            },
            {
                band: 5,
                gain: 0
            },
            {
                band: 6,
                gain: -0.25
            },
            {
                band: 7,
                gain: -0.45
            },
            {
                band: 8,
                gain: -0.55
            },
            {
                band: 9,
                gain: -0.7
            },
            {
                band: 10,
                gain: -0.3
            },
            {
                band: 11,
                gain: -0.25
            },
            {
                band: 12,
                gain: 0
            },
            {
                band: 13,
                gain: 0
            }
        ]);
        message.channel.send({embed: {
          color: "GREEN",
          description:'<:emoji_16:763367280817471498> BASS MODE ON!'}});

    } else if (args[0] == 'radio' || args[0] == 'Radio') {
        player.setEQ([{
                band: 0,
                gain: 0.65
            },
            {
                band: 1,
                gain: 0.45
            },
            {
                band: 2,
                gain: -0.45
            },
            {
                band: 3,
                gain: -0.65
            },
            {
                band: 4,
                gain: -0.35
            },
            {
                band: 5,
                gain: 0.45
            },
            {
                band: 6,
                gain: 0.55
            },
            {
                band: 7,
                gain: 0.6
            },
            {
                band: 8,
                gain: 0.6
            },
            {
                band: 9,
                gain: 0.6
            },
            {
                band: 10,
                gain: 0
            },
            {
                band: 11,
                gain: 0
            },
            {
                band: 12,
                gain: 0
            },
            {
                band: 13,
                gain: 0
            }
        ]);
        message.channel.send({embed: {
           color: "GREEN",
          description:'<:emoji_16:763367280817471498> RADIO Mode ON!'}});
    } else if (args[0] == 'pop' || args[0] == 'POP') {
        player.setEQ([{
                band: 0,
                gain: -0.25
            },
            {
                band: 1,
                gain: 0.48
            },
            {
                band: 2,
                gain: 0.59
            },
            {
                band: 3,
                gain: 0.72
            },
            {
                band: 4,
                gain: 0.56
            },
            {
                band: 5,
                gain: 0.15
            },
            {
                band: 6,
                gain: -0.24
            },
            {
                band: 7,
                gain: -0.24
            },
            {
                band: 8,
                gain: -0.16
            },
            {
                band: 9,
                gain: -0.16
            },
            {
                band: 10,
                gain: 0
            },
            {
                band: 11,
                gain: 0
            },
            {
                band: 12,
                gain: 0
            },
            {
                band: 13,
                gain: 0
            }
        ]);
        message.channel.send({embed: {
          color: "GREEN",
          description:'<:emoji_16:763367280817471498>POP Mode ON!'}});

    } else if (args[0] == 'trablebass' || args[0] == 'tb') {
        player.setEQ([{
                band: 0,
                gain: 0.6
            },
            {
                band: 1,
                gain: 0.67
            },
            {
                band: 2,
                gain: 0.67
            },
            {
                band: 3,
                gain: 0
            },
            {
                band: 4,
                gain: -0.5
            },
            {
                band: 5,
                gain: 0.15
            },
            {
                band: 6,
                gain: -0.45
            },
            {
                band: 7,
                gain: 0.23
            },
            {
                band: 8,
                gain: 0.35
            },
            {
                band: 9,
                gain: 0.45
            },
            {
                band: 10,
                gain: 0.55
            },
            {
                band: 11,
                gain: 0.6
            },
            {
                band: 12,
                gain: 0.55
            },
            {
                band: 13,
                gain: 0
            }
        ]);
        message.channel.send({embed: {
          color: "GREEN",
          description:'<:emoji_16:763367280817471498> trable and bass Mode ON!'}});

    } else if (args[0] == 'soft' || args[0] == 'Soft') {
        player.setEQ([{
                band: 0,
                gain: 0
            },
            {
                band: 1,
                gain: 0
            },
            {
                band: 2,
                gain: 0
            },
            {
                band: 3,
                gain: 0
            },
            {
                band: 4,
                gain: 0
            },
            {
                band: 5,
                gain: 0
            },
            {
                band: 6,
                gain: 0
            },
            {
                band: 7,
                gain: 0
            },
            {
                band: 8,
                gain: -0.25
            },
            {
                band: 9,
                gain: -0.25
            },
            {
                band: 10,
                gain: -0.25
            },
            {
                band: 11,
                gain: -0.25
            },
            {
                band: 12,
                gain: -0.25
            },
            {
                band: 13,
                gain: -0.25
            }
        ]);
        message.channel.send({embed: {
          color: "GREEN",
          description:'<:emoji_16:763367280817471498> Soft Mode ON!!'}});

    } else if (args[0] == 'custom' || args[0] == 'manual') {
        Array(13).forEach(i => {
            let num = Number(args[i + 1])
            if (num > 1 || num < -1) return message.channel.send(embed);

        });
        player.setEQ([{
                band: 0,
                gain: args[1]
            },
            {
                band: 1,
                gain: args[2]
            },
            {
                band: 2,
                gain: args[3]
            },
            {
                band: 3,
                gain: args[4]
            },
            {
                band: 4,
                gain: args[5]
            },
            {
                band: 5,
                gain: args[6]
            },
            {
                band: 6,
                gain: args[7]
            },
            {
                band: 7,
                gain: args[8]
            },
            {
                band: 8,
                gain: args[9]
            },
            {
                band: 9,
                gain: args[10]
            },
            {
                band: 10,
                gain: args[11]
            },
            {
                band: 11,
                gain: args[12]
            },
            {
                band: 12,
                gain: args[13]
            },
            {
                band: 13,
                gain: args[14]
            }
        ]);
        message.channel.send({embed: {
          description:'<:emoji_16:763367280817471498> Custom  Mode ON!!'}});

    } else if (args[0] == 'help' || args[0] == 'manual' || !args) {
        message.channel.send(embed)
    } else if (args[0] == 'bassboost' || args[0] == 'bb') {
        player.setEQ(Array(6).fill(0).map((n, i) => ({
            band: i,
            gain: 0.5
        })));

        message.channel.send({embed: {
         color: "GREEN",
          description:'<:emoji_16:763367280817471498>BASS Mode ON!!'}});

    } else {
        message.channel.send(embed);
    }


}


}
