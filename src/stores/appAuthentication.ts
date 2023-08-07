import appAuthenticationStoreStoreCustom from './appAuthentication.custom'
import type { CustomStoreImplementationOptions, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds } from 'kapix-components-vue3'
import { defineStore } from 'pinia'

const storeName = 'appAuthentication'
const customImplement: CustomStoreImplementationOptions = appAuthenticationStoreStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function appAuthenticationStoreFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        user: undefined as PartialEntity<Kapix.Entity.IUser>,
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      isAuthenticated:(state) => {
        return !!state.user
      },
      /* @ts-ignore: to allow override in your custom file */
      userEmail:(state) => {
        return state.user?.email
      },
      /* @ts-ignore: to allow override in your custom file */
      userName:(state) => {
        return state.user?.userName
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async login () {
        this.user = {
          userName: 'madfire307@gmail.com',
          email: 'madfire307@gmail.com'
        }
      },
      /* @ts-ignore: to allow override in your custom file */
      logout () {
        this.user = null
      },
      /* @ts-ignore: to allow override in your custom file */
      getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        return storeId != null ? getStoreInstance(storeId) : this
      },
      /* @ts-ignore: to allow override in your custom file */
      getStoreInstances () {
        return aliveStoreIds.map(storeId => this.getStoreInstance(storeId))
      },
      /* @ts-ignore: to allow override in your custom file */
      newStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        const newStoreId = storeId || this.$subStoreIds++
        if (aliveStoreIds.includes(newStoreId)) {
          throw new Error(`Store with id ${storeId} already exists`)
        }
        aliveStoreIds.push(newStoreId)
        return getStoreInstance(newStoreId)
      },
      ...customImplement.actions
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return appAuthenticationStoreFactory(storeId)()
}

export const appAuthenticationStoreRaw = appAuthenticationStoreFactory()
export const appAuthenticationStore = () => appAuthenticationStoreRaw() as MergeCustomStore<typeof appAuthenticationStoreStoreCustom.instance>