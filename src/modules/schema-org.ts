import appInfo from '~/app-info.json'
import type { UserModule } from '~/types'

// Setup @vueuse/schema-org
// https://schema-org.vueuse.com
export const install: UserModule = async (ctx) => {
  // Disables client on build, allows 0kb runtime
  if (ctx.isClient && import.meta.env.PROD) {
    return
  }

  const { SchemaOrgUnheadPlugin } = await import('@vueuse/schema-org')
  ctx.head?.use(SchemaOrgUnheadPlugin({
    // config
    host: appInfo.hostname,
    defaultLanguage: appInfo.defaultLanguage
  }, () => {
    return {
      path: ctx.router.currentRoute.value.path,
      ...ctx.router.currentRoute.value.meta
    }
  }))
}
