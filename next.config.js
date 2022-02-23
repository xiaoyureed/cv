const isProd = process.env.NODE_ENV === 'production'


/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? '/cv/' : '',
  images: {
    loader: 'imgix',
    path: '/'  
  },
}
