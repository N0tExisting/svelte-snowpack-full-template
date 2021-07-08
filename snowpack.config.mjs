import webCfg from './webpack.config.mjs';

/** @type { import("snowpack").SnowpackUserConfig } */
const ___SNOWPACK__USER__CONFIG___ = {
  mount: {
    public: {
      url: '/',
      static: true,
      resolve: false,
    },
    assets: {
      url: '/assets',
      static: true,
      resolve: true,
    },
    src: {
      url: '/dist',
      resolve: true,
    },
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? {tsc: 'yarn pnpify tsc'} : {}),
      },
    ],
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: true,
        outputPattern: {
          css: '[name].[id].min.[contenthash].css',
          js: '[name].[id].min.[contenthash].js',
          assets: '[name].[id].min.[contenthash][ext]',
        },
        manifest: true,//'../../asset-manifest.json',
        extendConfig: (baseCfg) => {
          const retVal =  {
            ...baseCfg,
            ...webCfg
          };
          //console.log(retVal);
          return retVal;
        },
        htmlMinifierOptions: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyCSS: true,
          minifyJS: true,
        },
      }
    ],
    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
        target: [
          "chrome58",
          "firefox57"
        ],
      }
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    metaUrlPath: 'dist/packager',
    /* ... */
  },
};

export default ___SNOWPACK__USER__CONFIG___;
