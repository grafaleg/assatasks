const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {babelConfig: true}],
  },
  cacheDirectory: '.jest/cache',
};
