import express, { Express, Request, Response } from 'express';

import {
	is18Plus,
	nonAlcoholic,
	countriesWithDeskpass,
	logger,
	getCacheData,
	setCacheData,
} from './middleWares';
import routerCocktail from './routes/deskpass/cocktail';
import routerCountry from './routes/deskpass/country';
import routerDog from './routes/deskpass/dog';
import proxy from './proxy';

const app: Express = express();

// implement the getCacheData and logger middleware, and proxy server respectively before hitting any endpoint
app.use(getCacheData, logger, proxy);

// default home endpoint
app.get('/', (req: Request, res: Response) => {
	return res.status(200).json('Welcome to DeskPass');
});

// cocktail routerlink
app.use(
	'/deskpass/cocktail',
	is18Plus,
	nonAlcoholic,
	routerCocktail,
	setCacheData
);

// routerDog routerlink
app.use('/deskpass/dog', routerDog, setCacheData);

// routerCountry routerlink
app.use(
	'/deskpass/country',
	countriesWithDeskpass,
	routerCountry,
	setCacheData
);

export default app;
