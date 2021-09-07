

/**
 *
 * @param {*} req
 * @param {import('discord.js').GuildMember} member
 */
module.exports = async (req, member) => {
  const { client } = req;

  const { user } = member;

  const create = new Date(user.createdAt);

  const now = new Date(Date.now());

  console.log(create, now);

  const diff = Math.abs(create - now);

  console.log(new Date(diff).getHours());


};
