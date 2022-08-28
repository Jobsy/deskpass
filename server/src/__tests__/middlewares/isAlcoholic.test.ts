import { Request, Response, NextFunction } from 'express';

import { nonAlcoholic } from '../../middleWares';

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

describe('isAlcoholic', () => {
	it('should continue to the next middleware or function if query (alcoholic) is false', async () => {
		// mocked request
		const req = {
			query: { alcoholic: 'false' },
		} as unknown as Request;

		const result = nonAlcoholic(req, res, next);

		expect(result).toBeFalsy();
	});

	it('should show error page if query (alcoholic) is true', async () => {
		// mocked request
		const req = {
			query: { alcoholic: 'true' },
		} as unknown as Request;

		const result = _.cloneDeep(nonAlcoholic(req, res, next));

		expect(result.res.status).toEqual(404);
		expect(result.res.response).toEqual('Drink is Alcoholic');
	});
});
