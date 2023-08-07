/// <reference types="kapix-vite-ssg" />
import path from 'path'
import { defineConfig } from 'vite'
import Preview from 'vite-plugin-vue-component-preview'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'kapix-vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import VueTypeImports from 'kapix-vite-plugin-vue-type-imports'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePluginFonts } from 'vite-plugin-fonts'
import { SchemaOrgResolver, schemaAutoImports } from '@vueuse/schema-org'
import { visualizer } from 'rollup-plugin-visualizer'
import type { NormalizedOutputOptions, OutputBundle } from 'rollup'
import DefineOptions from 'unplugin-vue-define-options/vite'
import autoprefixer from 'autoprefixer'
import appInfo from './src/app-info.json'

const pwaInfo = appInfo.pwa as Nullable<KeyValuePair>

const staticFolder = 'assets'
const jsFolderPath = '/js'
const cssFolderPath = '/css'
const imgFolderPath = '/img'

function generatingRollupBundleReport (this: any, outputOptions: NormalizedOutputOptions, outputBundle: OutputBundle) {
  if (!outputBundle['main.mjs']) {
    const v = visualizer({
      filename: 'reports/bundle-stats.html',
      title: `${pwaInfo?.name || 'Kapix'} - Bundle Stats`,
      brotliSize: true
      // open: true,
      // template: 'sunburst'
    })
    return (v.generateBundle as Function).call(this, outputOptions, outputBundle)
  }
}

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer() as any
      ]
    },
    preprocessorOptions: {
      scss: {
        // dont need include file extend .scss
        additionalData: '@import "~/assets/scss/variables";'
      }
    }
  },
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      plugins: [
        {
          name: 'kapix-rollup-plugin-visualizer',
          generateBundle: generatingRollupBundleReport
        }
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return ''
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = imgFolderPath
          }
          else if (/woff|woff2/.test(extType)) {
            extType = cssFolderPath
          }
          else {
            extType = `/${extType}`
          }
          return `${staticFolder}${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId && chunkInfo.facadeModuleId.endsWith('.vue')) {
            if (!chunkInfo.facadeModuleId.endsWith('pages/index.vue')) {
              const info = chunkInfo.facadeModuleId.split('/')
              info.pop() // remove index.vue
              const mainName = info.pop()
              const subName = info.pop()
              return `${staticFolder}${jsFolderPath}/${[subName !== 'pages' && subName, mainName].filter(i => i).join('-')}-[hash].js`
            }
          }
          return `${staticFolder}${jsFolderPath}/[name]-[hash].js`
        },
        entryFileNames: `${staticFolder}/[name]-[hash].js`
      }
    }
  },

  plugins: [
    DefineOptions(),

    Preview(),

    Vue({
      include: [/\.vue$/]
      // reactivityTransform: true
    }),

    // https://github.com/wheatjs/vite-plugin-vue-type-imports
    VueTypeImports(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue']
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      directoryAsNamespace: true,
      globalNamespaces: [
        'Inputs',
        'Elements'
      ],
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: ''
          // enabledCollections: ['carbon']
        }),
        // auto-import schema-org components
        SchemaOrgResolver()
      ],
      dts: 'src/components.d.ts'
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        {
          '@vueuse/schema-org': schemaAutoImports
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store'
      ],
      vueTemplate: true
    }),

    // https://github.com/antfu/unplugin-vue-components

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
      scale: 1
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      base: '/',
      registerType: pwaInfo?.registerType || 'prompt',
      includeAssets: pwaInfo?.includeAssets,
      // devOptions: {
      //   enabled: true
      // },
      manifest: {
        name: pwaInfo?.name || 'Kapix',
        orientation: pwaInfo?.orientation || 'portrait',
        description: pwaInfo?.description || 'App Built With Kapix',
        categories: pwaInfo?.categories || [
          'business',
          'technology',
          'web'
        ],
        short_name: pwaInfo?.shortName || 'Kapix',
        start_url: pwaInfo?.startUrl || './',
        theme_color: pwaInfo?.themeColor || '#ffffff',
        background_color: pwaInfo?.backgroundColor || undefined,
        dir: pwaInfo?.dir || 'auto',
        lang: appInfo.defaultLanguage && appInfo.defaultLanguage.split('-')[0],
        display_override: pwaInfo?.displayOverrode || ['standalone'],
        iarc_rating_id: pwaInfo?.iarcRatingId || 'e84b072d-71b3-4d3e-86ae-31a8ce4e53b7',
        prefer_related_applications: pwaInfo?.preferRelatedApplications || true,
        icons: pwaInfo?.icons || [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        globPatterns: [
          '**/*.{js,css,ico,png,svg,webmanifest}',
          'index.html'
        ],
        globIgnores: [
          '**\/node_modules\/**\/*',
          `${staticFolder}${jsFolderPath}/Kapix*`,
          `${staticFolder}${jsFolderPath}/leaflet*`
        ],
        runtimeCaching: [
          {
            urlPattern: /.*\.html$/,
            handler: 'NetworkOnly'
          },
          {
            urlPattern: /.*\.js$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-cache'
            }
          },
          {
            urlPattern: /.*\.json$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'json-cache'
            }
          },
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|webp)/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'image-cache',
              expiration: {
                // Cache only 30 images
                maxEntries: 30,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60
              }
            }
          }
          // https://vite-plugin-pwa.netlify.app/workbox/generate-ws.html#background-sync
          // {
          //   handler: 'NetworkOnly',
          //   urlPattern: /\/api\/.*\/*.json/,
          //   method: 'POST',
          //   options: {
          //     backgroundSync: {
          //       name: 'myQueueName',
          //       options: {
          //         maxRetentionTime: 24 * 60
          //       }
          //     }
          //   }
          // }
        ]
      }
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: false,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')]
    }),

    // https://github.com/stafyniaksacha/vite-plugin-fonts
    VitePluginFonts({
      // Google Fonts API V2
      google: {
        /**
         * enable preconnect link injection
         *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
         * default: true
         */
        preconnect: true,
        /**
         * values: auto, block, swap(default), fallback, optional
         * default: 'swap'
         */
        display: 'swap',
        /**
         * values: auto, block, swap(default), fallback, optional
         * default: undefined
         */
        text: undefined,
        /**
         * Fonts families lists
         */
        families: appInfo.fontFamilies || []
      }
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect()
  ],

  // https://github.com/vitest-dev/vitest
  // test: {
  //   include: ['test/**/*.test.ts'],
  //   environment: 'jsdom',
  //   deps: {
  //     inline: ['@vue', '@vueuse', 'vue-demi']
  //   }
  // },

  server: {
    fs: {
      strict: true
    }
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: process.env.NODE_ENV === 'no-minify' ? 'prettify' : 'minify',
    crittersOptions: {
      fonts: true,
      external: true,
      mergeStylesheets: true,
      compress: true
    },
    onFinished () { generateSitemap({ hostname: appInfo.hostname }) }
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/]
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head'
    ],
    exclude: [
      'vue-demi'
    ]
  }
})
