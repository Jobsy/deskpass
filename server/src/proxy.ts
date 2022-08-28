import path from 'path/posix';
import { Request, Response, NextFunction } from 'express';

const proxy = (req: Request, res: Response, next: NextFunction) => {
	const reqPath = path.join(__dirname, '../src/deskpassServices/'); // get the path to each requested services
	const deskpassApprovedFetchSites = ['cocktail', 'country', 'dog']; // query strings for each deskpass approved fetched sites
	const deskpassApprovedServices = ['servicea', 'serviceb', 'servicec']; // query strings for each deskpass approved services
	const requestURL = req.url.split('/')[2]; // get query string from the fetch/request url
	const requestService = req.url.split('/')[1]; // get query string from the fetch/request service

	if (deskpassApprovedFetchSites.includes(requestURL)) {
		next(); // continue to the next middleware if found
	} else if (deskpassApprovedServices.includes(requestService)) {
		return res.sendFile(`${requestService}.html`, { root: reqPath }); // route to the service path/address if found
	} else {
		return res.status(404).json({ response: 'Unapproved site' }); // return 404 if not found
	}
};

export default proxy;
