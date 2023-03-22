module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-pxtorem')({ 
      // 750宽度的设计稿
      rootValue: 100,
      // unitPrecision: 5,
      propList: ['*', '!letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1,
      exclude: /node_modules/i,
    }),
  ],
};
