import type { RouteRecordRaw } from 'vue-router'
import { ViteSSG } from 'kapix-vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import kapixComponents from 'kapix-components-vue3'
import App from './App.vue'
import type { UserModule } from './types'
import { dynamicPaths } from './dynamicRoutes'
import generatedRoutes from '~pages'

import 'kapix-components-vue3/dist/style.css'
import '~/assets/scss/unocss/reset/kapix.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.config.unwrapInjectedRef = true // to remove in vue 3.3.0
    kapixComponents.install(ctx, { kapixBuiltWithOptions: { hide: true } })

    // install all modules under 'modules/'
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
  }
)

export async function includedRoutes (paths: string[], routes: Readonly<RouteRecordRaw[]>) {
  const validDynamicRoutes: RouteRecordRaw[] = []
  const validStaticRoutes: RouteRecordRaw[] = []
  routes.forEach((route) => {
    if (!route.path.includes('/:all')) {
      route.path.includes(':') ? validDynamicRoutes.push(route) : validStaticRoutes.push(route)
    }
  })
  let newPaths: string[] | undefined
  try {
    newPaths = await dynamicPaths(validDynamicRoutes, validStaticRoutes, routes)
  }
  catch (e) {
    console.error('dynamicRoutes failed, error was : ', e)
  }

  // ignore dynamic routes
  return [
    ...validStaticRoutes.map(s => s.path),
    ...(newPaths || [])
  ]
}
