/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '/uploads/**' },
      // produção: { protocol: 'https', hostname: 'seu-dominio-strapi.com', pathname: '/uploads/**' }
    ],
  },
};
module.exports = nextConfig;
