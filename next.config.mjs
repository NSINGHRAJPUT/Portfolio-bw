/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // Add your domain(s) here
  },
  webpack: (config, { isServer }) => {
    // Add a rule for PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files",
            outputPath: `${isServer ? "../" : ""}static/files/`,
            name: "[name].[ext]",
            esModule: false, // <-- Important
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
