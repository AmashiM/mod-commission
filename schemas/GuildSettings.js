const { model, Schema } = require("mongoose");

const GuildSettings = new Schema({
  guild_id: { type: String, match: /\d{18}/, req: true },
  score: {
    kick: { type: Number, default: 5 },
    ban: { type: Number, default: 10 }
  },
  logs: { type: Array, default: [] },
  color: { type: String, default: "RANDOM" }
});


module.exports = model("GuildSettings", GuildSettings)
