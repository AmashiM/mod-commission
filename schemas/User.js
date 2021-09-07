const { Schema, model } = require('mongoose');

const CoolDown = new Schema({
  command: { type: String },
  timestamp: { type: Date }
});

const User = new Schema({
  user_id: { type: String, match: /\d{18}/, req: true },
  guild_id: { type: String, match: /\d{18}/, req: true },
  score: 0,
  marks: { type: Array, default: [] },
  cooldowns: [CoolDown]
});


module.exports = model("User", User);
