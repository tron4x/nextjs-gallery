const createClient = require('redis').createClient;

const CacheHandler = require('@neshca/cache-handler').CacheHandler;
const createLruCache = require('@neshca/cache-handler/local-lru').default;
const createRedisCache = require('@neshca/cache-handler/redis-strings').default;

CacheHandler.onCreation(async () => {
  const localCache = createLruCache({
    maxItemsNumber: 10000,
    maxItemSizeBytes: 1024 * 1024 * 1024,
  });

  let redisCache;
  if (!process.env.REDIS_URL) {
    console.warn('REDIS_URL env is not set, using local cache only.');
  } else {
    try {
      const client = createClient({
        url: process.env.REDIS_URL,
        tls: {
          rejectUnauthorized: false
        }
      });

      client.on('error', (error) => {
        console.error('Redis error', error);
      });

      await client.connect();

      redisCache = createRedisCache({
        client,
        keyPrefix: `next-shared-cache-${process.env.REDIS_PREFIX}:`,
        // timeout for the Redis client operations like `get` and `set`
        // after this timeout, the operation will be considered failed and the `localCache` will be used
        timeoutMs: 50000,
        socket: {
          connectTimeout: 50000,
        },
      });
    } catch (error) {
      console.log(
        'Failed to initialize Redis cache, using local cache only.',
        error,
      );
    }
  }

  return {
    handlers: [redisCache, localCache],
    ttl: {
        // This value is also used as revalidation time for every ISR site
      defaultStaleAge: process.env.NEXT_PUBLIC_CACHE_IN_SECONDS, 
      // This makes sure, that resources without set revalidation time aren't stored infinitely in Redis
      estimateExpireAge: (staleAge) => staleAge, 
    },
  };
});

module.exports = CacheHandler;