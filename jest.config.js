module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    '^~test-utils(.*)$': '<rootDir>/src/lib/test-utils$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/file.mock.js',
  },
  moduleDirectories: [
    'node_modules',
    'src/lib', // a utility folder
    __dirname, // the root directory
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.js',
  ],
};
