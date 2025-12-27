module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['<rootDir>/example/', '<rootDir>/lib/'],
  setupFilesAfterEnv: ['./jest/setupTests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|@shopify/flash-list)/)',
  ],
};
