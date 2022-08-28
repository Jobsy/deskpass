import { isDeskpassPresent } from '../../plugIns';

describe('country - isDeskpassPresent', () => {
	it('should true  query string (country) is found or not', async () => {
		const country = 'nigeria';

		const result = isDeskpassPresent(country);
		expect(result).toBeTruthy();
	});

	it('should false if parameter (country) is false', async () => {
		const country = 'Europe';

		const result = isDeskpassPresent(country);
		expect(result).toBeFalsy();
	});
});
