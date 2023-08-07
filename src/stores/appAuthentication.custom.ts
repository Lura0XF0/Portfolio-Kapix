//* * this file should be modified only by you */
import type { CustomStoreImplementation, CustomStoreImplementationInstance } from 'kapix-components-vue3'
import type { StateTree, _GettersTree } from 'pinia'
import type { appAuthenticationStoreRaw } from './appAuthentication'

export default defineCustomStoreImplementation({
  state: () => {
    return {
      // custom state here
    }
  },
  getters: {
    // ** EXAMPLE ** //
    // myCustomGetter (): WritableComputedRef<Nullable<string>> {
    //   return computed({
    //     get: () => this.$title,
    //     set: (value) => {
    //       this.$title = value
    //     }
    //   })
    // }
  },
  actions: {
    // ** EXAMPLE ** //
    myCustomAction () {
      // console.debug(this.$id)
    },
    beforeMount () {
    },
    async mounted () {
      // ** EXAMPLE ** //
      // custom action like fetching data
      // const response = await axios.get('https://backend-url/my-api/endpoint')
      // this.$emailInput = response.data.email
    },
    async serverPrefetch () {
      // use to fill data during ssg build
    },
    beforeUnmount () {
    },
    unmounted () {
    }
  }
})

type StoreRaw = ReturnType<typeof appAuthenticationStoreRaw>
function defineCustomStoreImplementation<S extends StateTree = {}, G extends _GettersTree<S> = {}, A = {}> (options: CustomStoreImplementation<StoreRaw, S, G, A>) {
  return {
    instance: options as CustomStoreImplementationInstance<StoreRaw, S, G, A>,
    options
  }
}
