import { Request, Response, NextFunction } from 'express';

import { getCacheData } from '../../middleWares';
import redisClient from '../../redis';

const _ = require('lodash');

let res: Response;
let next: NextFunction;

redisClient.set('cahced-key-found', JSON.stringify({ val: 'somevalues' }));

beforeEach(() => {
	// mocked response
	res = {
		send: jest.fn(({ fromCache, data }) => ({
			res: { send: { fromCache, data } },
		})),
		status: jest.fn((status) => ({
			res: { status },
		})),
		locals: {
			locals: jest.fn((redisClient) => ({
				res: { locals: { redisClient } },
			})),
		},
	} as unknown as Response;

	// mocked next
	next = (err: any) => err as unknown as NextFunction;
});

describe('getCacheData', () => {
	it('should get cached data if cached-key is found', async () => {
		// mocked request
		const req = {
			originalUrl: 'cahced-key-found',
		} as unknown as Request;

		const result = await getCacheData(req, res, next);

		expect(_.cloneDeep(result).res.send.fromCache).toBeTruthy();
		expect(_.cloneDeep(result).res.send.data).toBeTruthy();
	});

	it('should get continue to url if cached-key not found', async () => {
		// mocked request
		const req = {
			originalUrl: 'cahced-key-not-found',
		} as unknown as Request;

		const result = await getCacheData(req as any, res as any, next);
		expect(result).toBeFalsy();
	});
});
