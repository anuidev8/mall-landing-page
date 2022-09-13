/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gsap"]);
const nextConfig = {
  reactStrictMode: true,
  withTM,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['cdn.pixabay.com'],
  },
}


