const { Client, IntentsBitField } = require('discord.js');
// intents are a set of permissions that your bot can use in order to get access to a set of events
// client is our bot instance
const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

// When our bot is online
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online. ✔️ `);
});

client.on('messageCreate', (msg) => {
// interacting with the user && preventing the bot from answering itself
    if(msg.author.bot) {   
        return;
    };

    if(msg.content === 'hello') {
        msg.reply('Hey!')
    }
});

// Log in into our discord bot
client.login('MTEwNjI2MTE0NTg4NDU2OTY3MQ.Gr5zd0.Wa5cgFyZJOgSBXQw6d6okb1P3-z8gdP3LNufZg');

