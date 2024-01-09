module.exports = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com", // Replace with the correct hostname
        port: "",
        pathname: "/**", // Adjust the pathname pattern
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/resources/", // Adjust the path based on your project structure
            outputPath: "static/resources/", // Adjust the path based on your project structure
          },
        },
      ],
    });

    return config;
  },
};
