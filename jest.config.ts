import type { Config } from 'jest';
import nextJest from 'next/jest.js';
const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageProvider: 'v8',
  coverageReporters: ['html'],
  collectCoverageFrom: [
    'src/**/*.{tsx,ts}',
    '!src/build/*.{ts,js}',
    '!src/**/*.d.ts',
  ],
  coveragePathIgnorePatterns: ['src/app/layout.tsx'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
