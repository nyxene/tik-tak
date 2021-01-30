module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coverageDirectory: './artifacts/coverage',
  testPathIgnorePatterns: ['/node_modules/', '(/__tests__/.*|(\\.|/)(test|spec))\\.d.ts$'],
  setupFilesAfterEnv: ['<rootDir>/scripts/tests/setupJest.js'],
  moduleNameMapper: {
    '\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    '^~/(.*)': '<rootDir>/src/$1',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
