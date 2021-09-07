

module.exports = async (req, interaction) => {
  const { client, Discord, settings } = req;

  let score_desc = ''

  const keys = Object.keys(settings.score);

  for(const key of keys){
    score += `${key}: ${settings.score[key]}`;
  };

  const embed = new Discord.MessageEmbed()
  .setColor(settings.color)
  .setDescription(`color: ${settings.color}`)
  .addField("Score", score_desc);

  const row = new Discord.MessageActionRow()
  .addComponents([])


  interaction.reply({
    embeds: [embed]
  })

};
