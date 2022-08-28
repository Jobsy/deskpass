import axios from 'axios';
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

dotenv.config();

const COCKTAIL_BASE_URL = process.env.COCKTAIL_BASE_URL;
const router = express.Router();

router.get('/name', async (req: Request, res: Response, next: NextFunction) => {
	let results;
	const { name } = req.query;
	const url = `${COCKTAIL_BASE_URL}/search.php?s=${name}`;
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

router.get(
	'/first_letter',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const { firstLetter } = req.query;
		const url = `${COCKTAIL_BASE_URL}/search.php?f=${firstLetter}`;
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
	}
);

router.get(
	'/search_ingredient_name',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const { ingredientName } = req.query;
		const url = `${COCKTAIL_BASE_URL}/search.php?i=${ingredientName}`;
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
	}
);

router.get('/random', async (req: Request, res: Response) => {
	let results;
	const url = `${COCKTAIL_BASE_URL}/random.php`;
	const key = `${req.originalUrl}`;

	try {
		const data = await axios.get(url);
		results = data.data;

		res.locals.results = results;
		res.locals.key = key;

		res.status(200).json({ fromCache: false, data: results });
	} catch (error) {
		console.log(error);
	}
});

router.get(
	'/filter_ingredient_name',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const { ingredientName } = req.query;
		const url = `${COCKTAIL_BASE_URL}/filter.php?i=${ingredientName}`;
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
	}
);

router.get(
	'/filter_alcoholic',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/filter.php?a=Alcoholic`;
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
	}
);

router.get(
	'/filter_nonalcoholic',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/filter.php?a=Non_Alcoholic`;
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
	}
);

router.get(
	'/filter_ordinary_drinks',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/filter.php?c=Ordinary_Drink`;
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
	}
);

router.get(
	'/filter_cocktail',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/filter.php?c=Cocktail`;
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
	}
);

router.get(
	'/filter_cocktail_glass',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/filter.php?g=Cocktail_glass`;
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
	}
);

router.get(
	'/filter_champagne_flute',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/filter.php?g=Champagne_flute`;
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
	}
);

router.get(
	'/list_categories',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;
		const url = `${COCKTAIL_BASE_URL}/list.php?c=list`;
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
	}
);

router.get(
	'/list_glasses',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;

		const url = `${COCKTAIL_BASE_URL}/list.php?g=list`;
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
	}
);

router.get(
	'/list_ingredients',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;

		const url = `${COCKTAIL_BASE_URL}/list.php?i=list`;
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
	}
);

router.get(
	'/list_alcoholic',
	async (req: Request, res: Response, next: NextFunction) => {
		let results;

		const url = `${COCKTAIL_BASE_URL}/list.php?a=list`;
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
	}
);

export default router;
