const User = require('../schemas/User');

async function addScore(userId, guildId, amount){

  let user = await User.findOne({ user_id: userId, guild_id: guildID });

  if(!user){
    let new_user = new User({
      user_id: userId,
      guild_id: guildId,
      score: Math.abs(amount)
    });

    await new_user.save();
    user = await User.findOne({ user_id: userId, guild_id: guildID });
  } else {
    await User.updateOne({
      user_id: userId,
      guild_id: guildId
    }, {
      $set: {
        amount: Math.abs(user.amount + amount)
      }
    });
  };

};

module.exports = addScore;
