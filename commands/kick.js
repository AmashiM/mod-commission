

module.exports = {
  name: "ban",
  user_perms: [],
  async run({ message }){
    let mentions = message.mentions.members;

    if(mentions.size === 0){
      return message.channel.send({
        content: "You Need To Mention A User"
      })
    }
    mentions = mentions.filter(v => v.kickable);
    if(mentions.size === 0){
      return message.channel.send({
        content: "You Need To Mention Kickable Users"
      })
    }

    mentions = mentions.filter(m => m.roles.highest.position > message.guild.me.roles.highest.position);
    if(mentions.size === 0){
      return
    }

  }
}
