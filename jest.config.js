/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@pass/(.*?)$': '<rootDir>/packages/$1/src',
    pass: '<rootDir>/packages/pass/src'
  },
  rootDir: __dirname,
});
