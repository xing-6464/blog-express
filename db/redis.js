const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建redisClient
const redisClient = redis.createClient({
  url: `redis://${REDIS_CONF.host}:${REDIS_CONF.port}`,
  legacyMode: true, // 兼容旧版本redis
})

// 链接
redisClient
  .connect()
  .then(() => console.log('Redis connected successfully'))
  .catch(console.error)

module.exports = redisClient
