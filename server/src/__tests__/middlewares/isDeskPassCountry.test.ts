import { Request, Response, NextFunction } from 'express';

import { countriesWithDeskpass } from '../../middleWares';

const _ = require('lodash');

let res: Response;
let next: NextFunction;

beforeEach(() => {
	// mocked response
	res = {
		status: jest.fn((status) => ({
			json: jest.fn((resObj) => ({
				res: { status, ...resObj },
			})),
		})),
	} as unknown as Response;

	// mocked next
	next = (err: any) => err as unknown as NextFunction;
});

describe('iscountry', () => {
	it('should continue to the next middleware or function if provided query (country) is isDeskpassPresent', async () => {
		// mocked request
		const req = {
			query: { country: 'nigeria' },
		} as unknown as Request;

		const result = countriesWithDeskpass(req, res, next);

		expect(result).toBeFalsy();
	});

	it('should show error page if provided query (country) is not isDeskpassPresent', async () => {
		// mocked request
		const req = {
			query: { country: 'Spain' },
		} as unknown as Request;

		const result = _.cloneDeep(countriesWithDeskpass(req, res, next));

		expect(result.res.status).toEqual(404);
		expect(result.res.response).toEqual('Deskpass not yet present');
	});
});
