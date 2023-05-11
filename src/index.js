const { Client, IntentBitsField } = require('discord.js');

// intents are a set of permissions that your bot can use in order to get access to a set of events
const client = new Client({
    intents: [ 
        IntentBitsField.Flags.Guilds,
        IntentBitsField.Flags.GuildMembers,
        IntentBitsField.Flags.GuildMessages,
        IntentBitsField.Flags.MessageContent
    ] 
});

