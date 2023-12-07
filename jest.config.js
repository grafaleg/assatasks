const {defaults: tsjPreset} = require('ts-jest/presets');

const notTransformList = [
  '@react-native',
  'react-native',
  'react-redux',
  '@react-navigation',
  // '@react-navigation/native',
].join('|');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {babelConfig: true}],
  },
  transformIgnorePatterns: [`/node_modules/(?!(${notTransformList})/).*/`],
  cacheDirectory: '.jest/cache',
  moduleNameMapper: {
    '.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
};
