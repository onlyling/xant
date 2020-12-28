const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,

  preset: 'react-native',

  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },

  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.test.json',
    },
  },
};
