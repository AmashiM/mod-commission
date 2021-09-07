

module.exports = async ({ fs, path, client, cwd }) => {

  let base_path = path.join(cwd, "commands");

  const commands = fs.readdirSync(sub).map(v => path.join(base_path, v));

  commands.forEach(commandFile => {
    const command = require(commandFile);
    console.log(`Registering Command: ${commandFile}`);
    if(command){
      client.commands.set(command.name, { ...command });
    }
  });

};
