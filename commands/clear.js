

module.exports = {
  name: "clear",
  async run({ message, args }) {

    if(!args[0]){
      return message.channel.send({
        content: "Missing Argument"
      });
    }
    if(Number(args[0]) === NaN){
      return message.channel.send({
        content: "Argument Must Be A Valid Number"
      })
    }

    if(Number(args[0]) > 100 || Number(args[0]) < 1){
      return message.channel.send({
        content: "Number Must be between 1-100"
      });
    }


    await message.channel.bulkDelete(Number.parseInt(Number(args[0])));
  }
}
