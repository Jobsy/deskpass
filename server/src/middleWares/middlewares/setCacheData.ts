import { Request, Response } from 'express';

import redisClient from '../../redis';

// set/store uncached data on redis database
export const setCacheData = async (req: Request, res: Response) => {
	const results = res.locals.results; // data to be cached
	const key = res.locals.key; // key received from the getCacheData middleware

	// store the data in the Redis cache
	await redisClient.set(key, JSON.stringify(results), {
		// cache validity duration
		EX: 180, // set the specified unix time at which the key will expire, in milliseconds (3mins)
		NX: true, // set the key if it does not already exist.
	});
};
