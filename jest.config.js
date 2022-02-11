/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@passlang/(.*?)$': '<rootDir>/packages/$1/src',
    'passlang': '<rootDir>/packages/passlang/src',
    'pass-loader': '<rootDir>/packages/pass-loader/src'
  },
  rootDir: __dirname,
});
