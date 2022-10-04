module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          screens: './src/screens',
          assets: './src/assets',
          constants: './src/constants',
          components: './src/components',
        },
        extensions: ['.tsx', '.ts'],
      },
    ],
  ],
};
