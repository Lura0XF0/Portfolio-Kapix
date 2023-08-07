import NProgress from 'nprogress'
import { isRouteNameEquals } from 'kapix-components-vue3'
import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      (!from || !isRouteNameEquals(to, from)) && NProgress.start()
    })
    router.afterEach((to, from) => {
      (!from || !isRouteNameEquals(to, from)) && NProgress.done()
    })
  }
}
