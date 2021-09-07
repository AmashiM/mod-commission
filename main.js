const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
require('./app');
const models = require('./schemas/models');

cwd = process.cwd();

const intents = new Discord.Intents([...Object.keys(Discord.Intents.FLAGS)]);

const client = new Discord.Client({
  intents: intents
});
client.prefixs = [ process.env.PREFIX ]
client.commands = new Discord.Collection();

const handlers = fs.readdirSync("./handlers/").map(v => path.join(cwd, "handlers", v));

async function getGuildSettings(guildID){
  let query = { guild_id: guildID };
  let settings = await models.GuildSettings.findOne(query);
  if(!settings) {
    let new_settings = new models.GuildSettings({
      guild_id: guildID
    });

    await new_settings.save();
    settings = await models.GuildSettings.findOne(query);
  };
  return settings;
};

const req = {
  client,
  fs,
  path,
  Discord,
  cwd,
  ...models,
  getGuildSettings
};

handlers.forEach(handler_path => {
  const handler = require(handler_path);
  handler(req).catch(console.log)
})


client.on('ready', () => {
  console.log(`${client.user.tag} has logged in!`);
});


client.login(process.env.TOKEN).catch(console.log);


