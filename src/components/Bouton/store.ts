import boutonComponentStoreCustom from './store.custom'
import { defineStore } from 'pinia'
import type { KaElementClickEvent, CustomStoreImplementationOptions, MergeCustomStore, StoreIdentifier, KaElementMap } from 'kapix-components-vue3'
import { kapixContext, NOOP, useToast, initAliveStoreIds, remove } from 'kapix-components-vue3'
import Contact from '~/pages/Contact/index.vue'

const storeName = 'boutonComponent'
const customImplement: CustomStoreImplementationOptions = boutonComponentStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function boutonComponentFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        $emit: (() => {}) as (propName: any, value: any) => void,
        $elements: {} as KaElementMap,
        $router: kapixContext.isClient ? kapixContext.$router : undefined,
        $route: kapixContext.isClient ? kapixContext.$route : undefined,
        $parentPage: NOOP,
        $parentComponent: NOOP,
        // Constants,
        $constants: {
          action: [
            0,
            10,
            0,
            0
          ]
        },
        // Data,
        $data: {
          actionName: `Contactez-moi`,
          choice: `Choix 1`,
          picture: undefined as Nullable<string>
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      $actionName (): WritableComputedRef<string> {
        return computed({
          get: () => this.$data.actionName,
          set: (value) => {
            this.$data.actionName = value
            this.$emit('update:actionName', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $choice (): WritableComputedRef<string> {
        return computed({
          get: () => this.$data.choice,
          set: (value) => {
            this.$data.choice = value
            this.$emit('update:choice', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $picture (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.picture,
          set: (value) => {
            this.$data.picture = value
            this.$emit('update:picture', value)
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      boutonClick () {
        useToast().info(`Définir l'action !`)
      },
      /* @ts-ignore: to allow override in your custom file */
      boutonClickWhenSelected (event: KaElementClickEvent) {
        event.vm?.closeTooltip()
      },
      /* @ts-ignore: to allow override in your custom file */
      boutonClickOnSm (event: KaElementClickEvent) {
        event.vm?.showTooltip(Contact)
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
      ...customImplement.actions,
      /* @ts-ignore: to allow override in your custom file */
      beforeMount () {
        customImplement.actions?.beforeMount?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      mounted () {
        customImplement.actions?.mounted?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      serverPrefetch () {
        customImplement.actions?.serverPrefetch?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      beforeUnmount () {
        customImplement.actions?.beforeUnmount?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      unmounted () {
        if (this.$storeId != null) {
          this.$dispose()
          remove(aliveStoreIds, this.$storeId)
        }
        customImplement.actions?.unmounted?.call(this)
      }
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return boutonComponentFactory(storeId)()
}

export const boutonComponentRaw = boutonComponentFactory()
export const boutonComponent = () => boutonComponentRaw() as MergeCustomStore<typeof boutonComponentStoreCustom.instance>