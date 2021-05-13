module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**', '!**/vendor/**'],
  coverageReporters: ['text', 'lcov'],
};
