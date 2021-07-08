module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@screens': './src/screens',
            '@common': './src/common',
            '@app': './App.tsx',
            '@store': './src/redux/store',
            '@slices': './src/redux/slices',
            '@models': './src/models',
            '@utils': './src/utils',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
