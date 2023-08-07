import type { IBreakpoint } from 'kapix-components-vue3'
import { $first, $isEqual } from 'kapix-components-vue3'
import { merge } from 'lodash-es'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = async ({ app, isClient }) => {
  Object.assign(app.config.globalProperties, {
    $first,
    $isEqual,
    $merge: merge
  })
  if (isClient) {
    await import('animate.css/animate.css')
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $first: (conditions: Array<any | undefined>) => any
    $isEqual: (val1: any, val2: any) => boolean
    $merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource
    $breakpoint: IBreakpoint
  }
}
