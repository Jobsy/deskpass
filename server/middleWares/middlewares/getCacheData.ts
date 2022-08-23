import { Request, Response, NextFunction } from "express"

const redis = require("redis");

let redisClient: any;

(async () => {
  // Redis will use port 6379, the default port.
  redisClient = redis.createClient();
  // on() method that registers events on the Redis object
  redisClient.on("error", (error: Error) => console.error(`Error : ${error}`));
  // connect() method, which starts the connection with Redis on the default port 6379
  await redisClient.connect();
})();


export const getCacheData = async (req: Request, res: Response, next: NextFunction) => {
  const key = `${req.originalUrl}`;
  let results;

  try {
    const cacheResults = await redisClient.get(key); // retrieves cached data from redis if available
    if (cacheResults) {
      results = JSON.parse(cacheResults);
      res.send({
        fromCache: true,
        data: results,
      });
    } else {
      res.locals.redisClient = redisClient;
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(404);
  }
}