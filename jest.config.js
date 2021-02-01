module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    'jest-canvas-mock',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
      'ts-jest': {
        tsconfig: {
          jsx: 'react',
        },
      },
    },
  },
};
