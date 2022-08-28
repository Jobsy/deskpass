import moment from 'moment';
import { Request, Response, NextFunction } from 'express';

// intercept and logs info about the url being fetch or requested in the terminal
export const logger = (req: Request, res: Response, next: NextFunction) => {
	console.dir({
		timeStamp: `${moment().format()}`,
		message: res.errored,
		securityTags: 'none',
		url: `${req.protocol}://${req.get('host')};${req.originalUrl}`,
		ip: `${req.ip}`,
		userId: 'none',
		inputData: 'none',
	});
	next(); // continues to the next call regardless of what happens
};
