/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;