const Discord = require("discord.js");
const configFile = require("./config.json")
var bot = new Discord.Client();
const Carbadah = "<@259951423544885258>";
//const antiswear = require("./swears/antiswear.js");

//var modules = {
    //[antiswear.id] : {"status":function() { return antiswear.status() }, "toggle":function() { antiswear.toggle(); console.log("Toggle called") } },
//}

//antiswear.initialize();

var knockjokes = [
  {name: "Dozen", answer: "anybody want to let me in?" },
  {name: "Avenue", answer: "knocked on this door before?" },
  {name: "Ice Cream", answer: "if you don't let me in!" },
  {name: "Adore", answer: "is between us. Open up!" },
  {name: "Lettuce", answer: "in. Its cold out here!" },
  {name: "Bed", answer: "you can not guess who I am." },
  {name: "Al", answer: "give you a kiss if you open the door." },
  {name: "Olive", answer: "you!" },
  {name: "Abby", answer: "birthday to you!" },
  {name: "Rufus", answer: "the most important part of your house." },
  {name: "Cheese", answer: "a cute girl." },
  {name: "Wanda", answer: "hang out with me right now?" },
  {name: "Ho-ho.", answer: "You know, your Santa impression could use a little work." },
  {name: "Mary and Abbey.", answer: "Mary Christmas and Abbey New Year!" },
  {name: "Carmen", answer: "let me in already!" },
  {name: "Ya", answer: "I’m excited to see you too!" },
  {name: "Scold", answer: "outside, let me in!" },
  {name: "Robin", answer: "you! Hand over your cash!" },
  {name: "Irish", answer: "you a Merry Christmas!" },
  {name: "Otto", answer: "know whats taking you so long!" },
  {name: "Needle", answer: "little help gettin in the door." },
  {name: "Luke", answer: "through the keyhole to see!" },
  {name: "Justin", answer: "the neighborhood and thought I'd come over." },
  {name: "Europe", answer: "No, you are a poo" },
  {name: "To", answer: "To Whom." },
  {name: "Etch", answer: "Bless You!" },
  {name: "Mikey", answer: "doesnt fit through this keyhole" },
  {name: "King Tut", answer: "-key fried chicken!"},

];

var classicjokes = [
  {name: "What did the 0 say to the 8?", punchline: "Your belt's on tight!"},
  {name: "Doctor: \"I'm sorry but you suffer from a terminal illness and have only 10 to live.\"", punchline: "Patient: \"What do you mean, 10? 10 what? Months? Weeks?!\"", puncline2: "Doctor: \"Nine\""},
  {name: "What's the difference between a well dressed man on a unicycle and a poorly dressed man on a bike?", punchline: "Attire"},
  {name: "A mexican magician tells the audience he will disappear on the count of 3. He says, \"Uno, dos...\" and then *poof* … he disappeared without a tres!"},
  {name: "Two satellites decided to get married.", punchline: "The wedding wasn't much, but the reception was incredible!"},
  {name: "Did you hear about the guy who invented the knock knock joke?", punchline: "He won the no-bell prize!"},
  {name: "What do you call a bear with no teeth?", punchline: "A gummy bear!"}

];

var knock = function() {
    var knockjoke = knockjokes[Math.floor(Math.random() * knockjokes.length)]
    return formatKnockJoke(knockjoke)
}

function formatKnockJoke(knockjoke) {
    return [
        "Knock, knock.",
        "Who’s there?",
        knockjoke.name + ".",
        knockjoke.name + " who?",
        knockjoke.name + " " + knockjoke.answer
    ].join("\n")
}

var Classic = function() {
  var classicjoke = classicjokes[Math.floor(Math.random() * classicjokes.length)]
  return formatClassicJoke(classicjoke)
}

function formatClassicJoke(classicjoke) {
  return [
    classicjoke.name,
    classicjoke.punchline,
    classicjoke.puncline2
  ].join("\n")
}

bot.on("message", (message) => {
  if (message.author.equals(bot.user)) return;
  if (message.content.equals(configFile.prefix + "roger-roger")) return;

  if (message.content.includes(configFile.prefix +"knock-knock")) {
        const msg = message.content.split(" ");

            message.reply(knock());
          };

    if (message.content.includes(configFile.prefix +"classicjoke")) {
            const msg = message.content.split(" ")

            message.reply(Classic());
          }
});

bot.on("ready", function() {
  console.log("Ready");
  bot.user.setGame("Roger Roger");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (message.content.includes("roger"))
  message.channel.send("Roger roger")
  else if (message.content.includes("Roger"))
  message.channel.send("Roger roger")

  else if (message.content.includes("sand"))
  message.channel.send("I don’t like sand. It’s coarse and rough and irritating and it gets everywhere")

  else if (message.content.includes("Sand"))
  message.channel.send("I don’t like sand. It’s coarse and rough and irritating and it gets everywhere")

});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(configFile.prefix)) return;
  var args = message.content.substring(configFile.prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
  case "avatar":
  message.channel.send(message.author.displayAvatarURL)
  break;
  case "help":
  message.channel.send("Hello! Here is a list of my commands:");
  var embed = new Discord.RichEmbed()
  .addField("Help", "This command (duh)")
  .addField("Info", "Some info about this *FULLY OPERATIONAL BATTLESTATION!* Sorry, meant bot")
  .addField("Tragedy", "The most tragic story in the universe")
  .addField("Roll", "Rolls a dice")
  .addField("1-10", "Random number from 1-10")
  .addField("Roger-roger", "The most soothing words in the universe shall be spoken into your voice channel")
  .addField("Coin-Flip", "Flips a coin. Not sure what you are expecting")
  .setColor(0xFFFFFF)
  message.channel.send(embed)
  break;
  case "info":
  message.channel.send("I am a B1 Battle Droid, made by The Trade Federation, but programmed by " + Carbadah + ". Roger Roger");
  break;
  case "tragedy":
  message.channel.send("Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.");
  break;
  case "roll":
  message.channel.send(message.author.toString() + " You rolled a " + [Math.floor(Math.random() * 6 + 1)] + "!");
  break;
  case "1-10":
  message.channel.send(message.author.toString() + " SURVEY SAYYS " + [Math.floor(Math.random() * 10 + 1)] + "!!!");
  break;
  case "roger-roger":
  if (!message.member.voiceChannel) {
    message.channel.send("You must be in a voice channel!")
    return;
  }
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(function (connection) {
			connection.playFile("./_media/sounds/Roger_Roger.ogx").on("end", function () {
				connection.disconnect();
			});
		});
		voiceChannel.join().catch(function(error) {
			message.reply("Error");
		})
  break;
  case "coin-flip":
  var result = Math.floor(Math.random() * 2 + 1);
  if (result === 1) {
    message.channel.send(message.author.toString() + " Coin is heads!");
  }
  else {
    message.channel.send(message.author.toString() + " Coin is tails!");
  }
  break;
 };
});


bot.login(configFile.token);
