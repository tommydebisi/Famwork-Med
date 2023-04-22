const redisClient = require("../utils/redis");

async function authToken(req, res, next) {
  const token = req.get("X-Access-Token");
  if (!token) {
    return res.status(403).send({ message: "No token provided." });
  }

  // get user id from redis
  try {
    const userId = await redisClient.get(`auth_${token}`);
    if (!userId) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = userId;
    req.token = token;
    next();
  } catch (e) {
    // implement logger and log error
    console.log(e.message);
  }
}

module.exports = authToken;
