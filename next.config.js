/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://wpdevm.atwebpages.com',
    NEXT_PUBLIC_PER_PAGE: 5,
    TO_EMAIL: 'joy.mishu@gmail.com'
  },
  images: {
    domains: ['wpdevm.atwebpages.com', 'images.unsplash.com'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'wpdevm.atwebpages.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
}

module.exports = nextConfig
