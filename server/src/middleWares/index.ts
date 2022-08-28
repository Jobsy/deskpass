import { logger } from './middlewares/logger';
import { is18Plus } from './middlewares/is18Plus';
import { nonAlcoholic } from './middlewares/isAlcoholic';
import { setCacheData } from './middlewares/setCacheData';
import { getCacheData } from './middlewares/getCacheData';
import { countriesWithDeskpass } from './middlewares/isDeskpassCountry';

export {
	is18Plus,
	nonAlcoholic,
	countriesWithDeskpass,
	logger,
	getCacheData,
	setCacheData,
};
