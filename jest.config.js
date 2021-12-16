/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@pass/(.*?)$': '<rootDir>/packages/$1/src',
    'pass-lang': '<rootDir>/packages/pass-lang/src'
  },
  rootDir: __dirname,
});
