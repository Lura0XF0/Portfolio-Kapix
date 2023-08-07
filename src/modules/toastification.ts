import { toastificationPlugin } from 'kapix-components-vue3'
import type { UserModule } from '~/types'

export const install: UserModule = async (context) => {
  return toastificationPlugin(context)
}
