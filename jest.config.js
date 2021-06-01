module.exports = {
	// Browser jsdom test
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js(x)?', '!src/**/stories.jsx'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
	modulePaths: ['<rootDir>/src/'],
};
