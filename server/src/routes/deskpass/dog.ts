import axios from 'axios';
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

dotenv.config();

const DOG_BASE_URL = process.env.DOG_BASE_URL;
const router = express.Router();

router.get(
	'/all_breads',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${DOG_BASE_URL}/breeds/list/all`;
		const key = `${req.originalUrl}`;

		try {
			const data = await axios.get(url);
			results = data.data;

			res.locals.results = results;
			res.locals.key = key;
			res.locals.securityTags = true;

			res.status(200).json({ fromCache: false, data: results });
			next();
		} catch (error) {
			console.log(error);
		}
	}
);

router.get('/random', async (req: Request, res: Response) => {
	let results;
	const url = `${DOG_BASE_URL}/breeds/image/random`;
	const key = `${req.originalUrl}`;

	try {
		const data = await axios.get(url);
		results = data.data;

		res.locals.results = results;
		res.locals.key = key;
		res.locals.securityTags = true;

		res.status(200).json({ fromCache: false, data: results });
	} catch (error) {
		console.log(error);
	}
});

router.get(
	'/by_bread',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${DOG_BASE_URL}/breed/hound/images`;
		const key = `${req.originalUrl}`;

		try {
			const data = await axios.get(url);
			results = data.data;

			res.locals.results = results;
			res.locals.key = key;
			res.locals.securityTags = true;

			res.status(200).json({ fromCache: false, data: results });
			next();
		} catch (error) {
			console.log(error);
		}
	}
);

router.get(
	'/by_sub_bread',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${DOG_BASE_URL}/breed/hound/list`;
		const key = `${req.originalUrl}`;

		try {
			const data = await axios.get(url);
			results = data.data;

			res.locals.results = results;
			res.locals.key = key;
			res.locals.securityTags = true;

			res.status(200).json({ fromCache: false, data: results });
			next();
		} catch (error) {
			console.log(error);
		}
	}
);

export default router;
