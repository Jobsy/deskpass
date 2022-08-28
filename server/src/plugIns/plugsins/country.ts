// checks if query string (country) is found or not
export const isDeskpassPresent = (country: string) => {
	const countriesWithDskpassPresence: string[] = [
		'nigeria',
		'all',
		'australia',
		'canada',
		'netherlands',
		'germany',
		'hong kong',
		'india',
		'mexico',
		'new zealand',
		'portugal',
		'puerto rico',
		'singapore',
		'spain',
		'switzerland',
		'thailand',
		'gb',
		'usa',
	];
	return countriesWithDskpassPresence.includes(country);
};
