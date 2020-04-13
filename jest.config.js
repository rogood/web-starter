module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json'
    }
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.globals.ts"
  ]
};