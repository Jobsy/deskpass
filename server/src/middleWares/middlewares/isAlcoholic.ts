import { Request, Response, NextFunction } from 'express';
import { isAlcoholic } from '../../plugIns';

// check if query (alchol) is true
export const nonAlcoholic = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const query: string | undefined = req.query.alcoholic?.toString();
	if (!isAlcoholic(query)) {
		next(); // continue to the next middleware or function if query (alchol) is true
	} else {
		return res.status(404).json({ response: 'Drink is Alcoholic' }); // return 404 error if query is false
	}
};
