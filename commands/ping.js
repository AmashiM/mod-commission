

module.exports = {
  name: "ping",
  aliases: [],
  use: "ping",
  description: "gets the bot's ping",
  async run({ message, client }){
    message.channel.send({
      content: `${client.ws.ping}ms is my ping`
    })
  }
}
