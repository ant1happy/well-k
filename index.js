const Discord = require("discord.js");
const chalk = require("chalk");
const client = new Discord.Client();

let { prefix } = require('./config.json');
let { token } = require('./config.json');
var log = chalk.bold.blue("Bot is ready.");


client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.includes(`<@${bot.user.id}>`)) {
  const helloembed = new Discord.MessageEmbed()
  .setAuthor('Devilzz')
  .setColor('RANDOM')
  .setTitle('Sup bitch, subscribe to my YT Channel')
  .setURL('https://www.youtube.com/channel/UCsc2vbT8cs_ioVrinL6-Zpw?view_as=subscriber')
  .addField('Bye!', '‎‎‎‎‎')
  
    msg.reply(helloembed)

    client.login(token);

    let { prefix } = require('./config.json');
    let { token } = require('./config.json');
    var log = chalk.bold.blue("Bot is ready.");
    var log01 = chalk.bold.green("Succsessfully Joined Discord.API");
  
  };
  });
