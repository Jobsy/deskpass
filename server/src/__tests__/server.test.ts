import request from 'supertest';

import app from '../app';

jest.mock('../proxy', () =>
	jest.fn((req, res, next) => {
		next();
	})
);

// describe("GET / - deskpass endpoints", () => {
//   // beforeEach(() => jest.resetModules());
//   it("when GET API Request passes the proxy check", async () => {
//     const result = await request(app).get("/");

//     expect(result.text).toBe("\"Welcome to DeskPass\"");
//     expect(result.statusCode).toEqual(200);
//   });

//   it("when GET API Request fails the proxy check", async () => {
//     const result = await request(app).get("/");

//     expect(result.text).toBe("\"Welcome to DeskPass\"");
//     expect(result.statusCode).toEqual(200);
//   });
// });

describe('GET / - deskpass endpoints - /deskpass/cocktail ', () => {
	it('when age < 18 API Request', async () => {
		const result = await request(app).get('/deskpass/cocktail');

		expect(result.text).toBe('{"response":"Drink is 18+"}');
		expect(result.statusCode).toEqual(404);
	}, 60000);

	it('/name API Request', async () => {
		const result = await request(app).get(
			'/deskpass/cocktail/name/?is18=true&alcoholic=false'
		);

		expect(result.statusCode).toEqual(200);
	}, 60000);

	it('/random API Request', async () => {
		const result = await request(app).get(
			'/deskpass/cocktail/random/?is18=true&alcoholic=false'
		);

		expect(result.statusCode).toEqual(200);
	}, 60000);
});

describe('GET / - deskpass endpoints - /deskpass/country API Request', () => {
	it('/all', async () => {
		const result = await request(app).get('/deskpass/country/all/?country=all');
		expect(result.statusCode).toEqual(200);
	}, 60000);

	it('/name', async () => {
		const result = await request(app).get(
			'/deskpass/country/name/?country=nigeria'
		);
		expect(result.statusCode).toEqual(200);
	}, 60000);
});

describe('GET / - deskpass endpoints - /deskpass/dog API Request', () => {
	it('/all_breads', async () => {
		const result = await request(app).get('/deskpass/dog/all_breads');
		expect(result.statusCode).toEqual(200);
	}, 60000);

	it('/random', async () => {
		const result = await request(app).get('/deskpass/dog/random');
		expect(result.statusCode).toEqual(200);
	}, 60000);

	it('/by_bread', async () => {
		const result = await request(app).get('/deskpass/dog/by_bread');
		expect(result.statusCode).toEqual(200);
	}, 60000);

	it('/by_sub_bread', async () => {
		const result = await request(app).get('/deskpass/dog/by_sub_bread');
		expect(result.statusCode).toEqual(200);
	}, 60000);
});
