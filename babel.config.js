module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./demo'],
        alias: {
          '@': './demo',
          components: './components',
          xant: './components',
        },
      },
    ],
  ],
};
