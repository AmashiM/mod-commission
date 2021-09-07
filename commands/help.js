

module.exports = {
  name: "help",
  aliases: [],
  use: "help",
  description: "gets the bot's ping",
  user_perms: [],
  async run({ message, client, Discord, prefix }){
    const commands = [...client.commands.values()];

    let desc = ''

    for(const command of commands){
      desc += `\`${prefix}\`${command.name}`
    }

    const embed = new Discord.MessageEmbed()
    .setColor(settings.color)
    .setTitle("Help")
    .setDescription(desc);

    message.channel.send({
      embeds: [embed]
    });
  }
}
