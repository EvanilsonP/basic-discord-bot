const { Client, IntentBitsField } = require('discord.js');

// intents are a set of permissions that your bot can use in order to get access to a set of events
// client is our bot instance
const client = new Client({
    intents: [ 
        IntentBitsField.Flags.Guilds,
        IntentBitsField.Flags.GuildMembers,
        IntentBitsField.Flags.GuildMessages,
        IntentBitsField.Flags.MessageContent
    ] 
});

// Log in into our discord bot
client.login('MTEwNjI2MTE0NTg4NDU2OTY3MQ.GivtCB.15XJq0uvJfKZPSCZekji_f3ObhtnTzYj6mVZPU');

