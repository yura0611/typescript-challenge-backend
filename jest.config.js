module.exports = {
  verbose: false,
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/?(*.)(spec).(ts|js)?(x)'],
  collectCoverageFrom: ['src/**/*.{ts,js}', '!<rootDir>/node_modules/', '!src/__tests__/**/*', '!src/index.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
}
