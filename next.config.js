/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Disable strict mode for development
  reactStrictMode: false,
  // Asset optimization
  images: {
    unoptimized: true
  },
  // For static export if needed
  trailingSlash: true,
  // Remove output: 'export' for development, add it back for production build
  // output: 'export'
}

module.exports = withMDX(nextConfig)
