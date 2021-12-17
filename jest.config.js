/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@passlang/(.*?)$': '<rootDir>/packages/$1/src',
    'passlang': '<rootDir>/packages/passlang/src'
  },
  rootDir: __dirname,
});
