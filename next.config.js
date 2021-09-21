const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')
const basePath = require('./config/base-path')

module.exports = (phase) => {
  const shouldAddBuildConfig = [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER].includes(
    phase
  )
  if (!shouldAddBuildConfig) return {}

  const path = require('path')
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssPresetEnvOptions = {
    features: {
      'custom-media-queries': true,
      'custom-selectors': true,
    },
  }

  const cssOptions = {
    postcssLoaderOptions: {
      plugins: [postcssPresetEnv(postcssPresetEnvOptions)],
    },
    sassOptions: {
      includePaths: [path.join(process.cwd(), 'src', 'common', 'css')],
    },
  }

  /* const optimizedImages = withOptimizedImages({
    handleImages: ['jpeg', 'png', 'svg'],
  })*/

  return {
    ...cssOptions,
    /*...optimizedImages,*/
    basePath: basePath,
    // ...(phase !== PHASE_DEVELOPMENT_SERVER && { basePath: basePath }),
    typescript: { ignoreBuildErrors: true },
    env: {
      BASE_API_URL: process.env.BASE_API_URL,
      CLIENT_API_URL: process.env.CLIENT_API_URL,
    },
    /*    images: {
      domains: ['cdn.shopify.com', '//www.fragrantjewels.com', 'fragrantjewels.com', 'www.fragrantjewels.com'],
      loader: 'custom',
      path: '/',
    },*/
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeAttrs: { attrs: '(fill)' } },
                { removeTitle: true },
                { cleanupIDs: true },
                { removeStyleElement: true },
              ],
            },
          },
        ],
      })
      return config
    },
  }
}
