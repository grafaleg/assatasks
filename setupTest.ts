jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  return jest.requireActual(
    'react-native/Libraries/Utilities/mocks/BackHandler.js',
  );
});

export {};
