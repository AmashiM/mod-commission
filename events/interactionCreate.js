

/**
 *
 * @param {*} req
 * @param {import('discord.js').Interaction} interaction
 */
module.exports = async (req, interaction) => {
  const { client, path, cwd } = req;

  if(interaction.isButton() || interaction.isSelectMenu()){

    const cid = JSON.parse(interaction.customId);

    const command_path = path.join(cwd, "interactions", cid.command);

    delete require.cache[command_path];

    const command = require(command_path);

    return command({ ...req, cid }, interaction);

  };

};
