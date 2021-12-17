/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@pass/(.*?)$': '<rootDir>/packages/$1/src',
    'pass-compile': '<rootDir>/packages/pass-compile/src'
  },
  rootDir: __dirname,
});
