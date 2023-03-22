module.exports = function (api) {
  api.cache(true);
  const presets = [
    ['@babel/preset-env', {
      // debug: true,
      modules: false,
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not ie <= 9'],
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    '@babel/preset-react',
  ];
  const plugins = [
    // [
    //   '@babel/plugin-transform-runtime', {
    //     corejs: 3,
    //   },
    // ],
    // 'react-hot-loader/babel',
  ];

  return {
    presets,
    plugins,
  };
};
