const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true, svgo: false } }],
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];

    return config;
  },
};
