import { Request, Response, NextFunction } from 'express';

import redisClient from '../../redis';

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
			next(); // continue to url if cached-key not found
		}
	} catch (error) {
		console.error(error); // return any errors accordingly without breaking the code
		return res.status(404);
	}
};
