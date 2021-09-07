

/**
 *
 * @param {*} req
 * @param {import('discord.js').Message} message
 * @returns
 */
module.exports = async (req, message) => {
  const { GuildSettings, User } = req;
  console.log("recieved message")

  if(message.author.bot) return;

  const prefix = client.prefixs.find(v => message.content.startsWith(v));

  if(!prefix) return;

  const searchQuery = { guild_id: message.guild.id };

  const userQuery = { user_id: message.author.id, guild_id: message.guild.id };

  let settings = await GuildSettings.findOne(searchQuery);

  if(!settings){
    let new_settings = new GuildSettings({
      guild_id: message.guild.id
    });

    await new_settings.save();
    settings = await GuildSettings.findOne(searchQuery);
  };



  let user = await User.findOne(userQuery);

  if(!user){
    let new_user = new User({
      guild_id: message.guild.id,
      user_id: message.author.id
    });

    await new_user.save();
    user = await User.findOne(userQuery);
  };

  const [commandName, ...args] = message.content.slice(prefix).split(/ +|\n/igm);

  const command = client.commands.find(v => v.name === commandName || [...(v.aliases || [])].includes(commandName));

  if(!command) return;

  if(command.user_perms){
    let missing_perms = command.user_perms.filter(v => !message.member.permissions.has(v));

    if(missing_perms.length > 0){
      return message.channel.send({
        content: `Missing Perms: ${missing_perms.join(', ')}`
      });
    }
  }

  const command_req = {
    ...req,
    message,
    prefix,
    args,
    user,
    settings
  };

  return command.run(command_req);

};
