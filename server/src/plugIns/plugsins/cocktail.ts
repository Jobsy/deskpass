// checks if query string (alcoholic) is true or false
export const isAlcoholic = (alcoholic: string | undefined) => {
	return alcoholic === 'true';
};

// checks if query string (age) is true or false
export const is18 = (age: string | undefined) => {
	return age === 'true';
};
