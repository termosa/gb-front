const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')

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

  return {
    ...cssOptions,
    typescript: { ignoreBuildErrors: true },
    env: {
      SITE_URL: process.env.SITE_URL,
      BASE_API_URL: process.env.BASE_API_URL,
      CLIENT_API_URL: process.env.CLIENT_API_URL,
    },
    redirects: () => Promise.resolve([
      { source: '/collections', destination: '/', permanent: false },
      { source: '/products', destination: '/', permanent: false },
    ]),
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
