const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  // modifyVars: {
    // '@primary-color': '#42929D',
    // '@border-radius-base': '12px',
  // },
  // optional
  lessVarsFilePath: './src/theme/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  future: {
    // if you use webpack5
    webpack5: true,
  },
});
