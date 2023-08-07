import { kaRegisterSW } from 'kapix-components-vue3'
import { get } from 'lodash-es'
import type { UserModule } from '~/types'
import appInfo from '~/app-info.json'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.isReady().then(async () => {
      const { registerSW } = await import('virtual:pwa-register')
      kaRegisterSW({
        registerSW,
        router,
        noToastMessages: get(appInfo, 'pwa.newVersionMode') === 'no-toast'
      })
    })
  }
}
