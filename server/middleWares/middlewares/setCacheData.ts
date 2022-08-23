import { Request, Response } from "express"

export const setCacheData = async (req: Request, res: Response) => {
  const redisClient = res.locals.redisClient;
  const results = res.locals.results;
  const key = res.locals.key;

  // store the data in the Redis cache
  await redisClient.set(key, JSON.stringify(results), {
    // cache validity duration
    EX: 180,
    NX: true,
  });
}