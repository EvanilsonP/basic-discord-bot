require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
// intents are a set of permissions that your bot can use in order to get access to a set of events
// client is our bot instance
const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ]
  });

// When our bot is online
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online. ✔️ `);
});

client.on('messageCreate', (msg) => {
    // interacting with the user
    if (msg.content.toLocaleLowerCase() === 'hello') {
        msg.reply('Hello!');

    } else if (msg.content.toLocaleLowerCase() === 'hi') {
        msg.reply('Hi!!');

    } else if (msg.content.toLocaleLowerCase() === 'hey') {
        msg.reply('Hey!');
    };
    // Preventing the bot from answering itself
    if(msg.author.bot) {   
        return;
    };
});

// Log in into our discord bot
client.login(process.env.TOKEN);

