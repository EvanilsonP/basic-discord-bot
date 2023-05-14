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

// When a user types in one of the options
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

// Welcome message to new members
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if(!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});


// Sends a private message to a new member on discord
client.on('guildMemberAdd', (member) => {
    const welcomeMessage = `Welcome, ${member}! We're glad you joined our server. Enjoy your stay!`;
    member.send(welcomeMessage)
    .then(() => console.log(`Sent a welcome message to ${member.user.tag}`))
    .catch(console.error);
});
  
// Log in into our discord bot
client.login(process.env.TOKEN);

