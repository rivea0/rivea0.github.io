/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      },
      {
        protocol: 'https',
        hostname: 'imgs.xkcd.com'
      }
    ],
    unoptimized: true // for now, for static export
  },
  output: 'export',
  basePath: '',
  // experimental: {
  //   mdxRs: false,
  // },
}
const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

module.exports = withMDX(nextConfig)
