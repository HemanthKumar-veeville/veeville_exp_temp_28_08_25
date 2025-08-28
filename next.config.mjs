/** @type {import('next').NextConfig} */

const isGitHub =
  process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS;

const repoName = "veeville_exp_temp_28_08_25"; // <-- change to your repo name

const nextConfig = {
  output: "export", // turn build into static files
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
