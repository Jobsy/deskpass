import axios from 'axios';
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

dotenv.config();

const COUNTRY_BASE_URL = process.env.COUNTRY_BASE_URL;
const router = express.Router();

router.get('/all', async (req: Request, res: Response, next: NextFunction) => {
	let results;
	const { country } = req.query;
	const url = `${COUNTRY_BASE_URL}/${country}`;
	const key = `${req.originalUrl}`;

	try {
		const data = await axios.get(url);
		results = data.data;

		res.locals.results = results;
		res.locals.key = key;

		res.status(200).json({ fromCache: false, data: results });
		next();
	} catch (error) {
		console.log(error);
	}
});

router.get('/name', async (req: Request, res: Response, next: NextFunction) => {
	let results;
	const { country } = req.query;
	const url = `${COUNTRY_BASE_URL}/name/${country}`;
	const key = `${req.originalUrl}`;

	try {
		const data = await axios.get(url);
		results = data.data;

		res.locals.results = results;
		res.locals.key = key;

		res.status(200).json({ fromCache: false, data: results });
		next();
	} catch (error) {
		console.log(error);
	}
});

export default router;
