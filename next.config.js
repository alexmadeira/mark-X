module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ['images.prismic.io','instagram.fcgh39-1.fna.fbcdn.net', 'instagram.fcgh2-1.fna.fbcdn.net']
  }
}

