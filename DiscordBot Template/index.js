require('dotenv').config();

const {Client, IntentsBitField, MessageActivityType, createChannel, messageLink} = require('discord.js');
const { time } = require('console');
const { createReadStream } = require('node:fs');
const { join } = require('node:path');

const client = new Client
({
    intents:
    [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})
const channel = client.channels.cache.get('<id>');
client.on('ready', () => {console.log(`${client.user.tag} is online`)});


client.login(process.env.BOT_TOKEN);  
