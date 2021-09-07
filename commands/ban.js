

module.exports = {
  name: "ban",
  user_perms: [],
  async run({ message }){
    const mentions = message.mentions.members;

    if(mentions.size === 0){
      return message.channel.send({
        content: "You Need To Mention A User"
      })
    };

    for(const mention of mentions){
      await mention.ban()
    };
  }
}
