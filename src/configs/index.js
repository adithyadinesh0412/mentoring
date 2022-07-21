/**
 * name : configs
 * author : Aman Kumar Gupta
 * Date : 31-Sep-2021
 * Description : Contains connections of all configs
 */

require('./mongodb')()

require('./kafka')()

const { RedisConfig, InternalCache, RedisHelper } = require('elevate-node-cache')
RedisConfig.config(process.env.REDIS_HOST)
InternalCache.init(process.env.INTERNAL_CACHE_EXP_TIME)
RedisHelper.init(process.env.REDIS_CACHE_EXP_TIME)
