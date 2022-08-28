/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	clearMocks: true,
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	modulePathIgnorePatterns: ['/dist'],

	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+spec(spec|test).[tj]s?(x)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
