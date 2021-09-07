

module.exports = {
  name: "settings",
  user_perms: ["ADMINISTRATOR"],
  async run({ message, settings, GuildSettings, Discord }){

    const embed = new Discord.MessageEmbed()
    .setColor(settings.color)
    .setTitle("Show")


    const button = new Discord.MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Show")
    .setCustomId(JSON.stringify({
      command: "config"
    }));

    const row = new Discord.MessageActionRow()
    .addComponents([button])

    await message.channel.send({
      embeds: [embed],
      components: [row]
    });


  }
}
