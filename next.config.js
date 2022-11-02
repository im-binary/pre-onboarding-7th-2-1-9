/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['interview.platdev.net'],
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cars',
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
