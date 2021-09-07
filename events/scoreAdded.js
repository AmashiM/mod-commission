


/**
 *
 * @param {*} req
 * @param {string} userID
 * @param {number} score
 */
module.exports = (req, userID, score) => {
  const { client, User } = req;

  const user = client.users.cache.get(userID);

  User.findOne({ user_id: userID })


};
