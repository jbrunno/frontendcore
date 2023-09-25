const { defaults } = require('jest-config');

module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.[jt]s?(x)',
    '!<rootDir>/src/**/*.{stories,test,spec,d}.[jt]s?(x)',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/src/$1'],
    '@test-utils/(.*)': ['<rootDir>/test/test-utils/$1'],
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/transform/fileTransformer.js',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  clearMocks: true,
};
