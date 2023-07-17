/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://wpdevm.atwebpages.com',
    NEXT_PUBLIC_PER_PAGE: 5
  },
}

module.exports = nextConfig
