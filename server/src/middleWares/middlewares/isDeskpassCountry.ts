import { Request, Response, NextFunction } from 'express';
import { isDeskpassPresent } from '../../plugIns';

// check if input country is found in countriesWithDeskpass array
export const countriesWithDeskpass = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const query: string = req.query.country!.toString();

	if (isDeskpassPresent(query)) {
		next(); // continue to the next middleware or function if query (country) is found
	} else {
		return res.status(404).json({ response: 'Deskpass not yet present' }); // return 404 error if query is not found
	}
};
