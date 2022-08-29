import { Request, Response, NextFunction } from 'express';

const redis = require('redis');

let redisClient: any;

export const db = (async () => {
	// Redis will use port 6379, the default port.
	redisClient = await redis.createClient();
	// on() method that registers events on the Redis object
	redisClient.on('error', (error: Error) => console.error(`Error : ${error}`));
	// connect() method, which starts the connection with Redis on the default port 6379
	await redisClient.connect();

	return redisClient;
})();

// get cached data from redis database
export const getCacheData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const key = `${req.originalUrl}`; // set the fetch url as key on redis server
	let results; // holds retrieved cached data

	try {
		const cacheResults = await redisClient.get(key); // retrieves cached data from redis if available

		if (cacheResults) {
			results = JSON.parse(cacheResults);

			return res.send({
				fromCache: true, // set to true if data is cached and available
				data: results, // return retrieved cached data
			});
		} else {
			next();
			res.locals.redisClient = redisClient; // return redisClient as response if data cannot be retrieve
			return (res = {
				locals: { redisClient },
			} as unknown as Response); // for testing
		}
	} catch (error) {
		console.error(error); // return any errors accordingly without breaking the code
		return res.status(404);
	}
};
