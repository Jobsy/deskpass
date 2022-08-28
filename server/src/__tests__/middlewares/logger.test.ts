import { Request, Response, NextFunction } from 'express';

import { logger } from '../../middleWares';

// let req = Request;
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

describe('logger', () => {
	it('should log and continue to the next middleware or function', async () => {
		// mocked request
		const req = {
			protocol: 'http',
			get: (host: any) => host,
			originalUrl: '/deskpass/cocktail/random/?is18=true&alcoholic=false',
		} as unknown as Request;

		const result = logger(req, res, next);

		expect(result).toBeFalsy();
	});
});
