import { Request, Response, NextFunction } from 'express';
import { is18 } from '../../plugIns';

// check if input age is equal or over 18
export const is18Plus = (req: Request, res: Response, next: NextFunction) => {
	const query: string | undefined = req.query.is18?.toString();

	if (is18(query)) {
		next(); // continue to the next middleware or function if age >= 18
	} else {
		return res.status(404).json({ response: 'Drink is 18+' }); // return 404 error if age < 18
	}
};
