module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          screens: './src/screens',
          icons: './src/assets/icons',
        },
        extensions: ['.tsx', '.ts'],
      },
    ],
  ],
};
