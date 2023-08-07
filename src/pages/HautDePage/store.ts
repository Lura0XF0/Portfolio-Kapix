import hautDePageStoreCustom from './store.custom'
import { defineStore } from 'pinia'
import type { KaElementClickEvent, CustomStoreImplementationOptions, MergeCustomStore, StoreIdentifier, KaElementMap } from 'kapix-components-vue3'
import { kapixContext, navigateTo, useToast, initAliveStoreIds, remove } from 'kapix-components-vue3'
import Cv from '~/pages/Cv/index.vue'
import { $translate } from '~/modules/i18n'

const storeName = 'hautDePage'
const customImplement: CustomStoreImplementationOptions = hautDePageStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function hautDePageFactory (storeId?: Nullable<StoreIdentifier>) {
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
        // Page info,
        $title: $translate('haut-de-page.title', `Haut de page`),
        $description: $translate('haut-de-page.description', ``),
        $publishedTime: new Date('2023-05-11T10:17:14.532Z'),
        $modifiedTime: new Date('2023-08-03T14:25:27.861Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          tab1: `Nos services` as Nullable<string>,
          tab2: `Nos réalisations` as Nullable<string>,
          tab3: `Nos engagements` as Nullable<string>,
          tab4: undefined as Nullable<string>,
          tab5: undefined as Nullable<string>
        },
        $info: { hautDePage: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      fermerClick (event: KaElementClickEvent) {
        event.vm?.closeTooltip()
      },
      /* @ts-ignore: to allow override in your custom file */
      async onglet1Click () {
        await navigateTo({ path: `/` })
      },
      /* @ts-ignore: to allow override in your custom file */
      async onglet2Click () {
        await navigateTo({ name: `MonParcours` })
      },
      /* @ts-ignore: to allow override in your custom file */
      async onglet3Click () {
        await navigateTo({ name: `Blog` })
      },
      /* @ts-ignore: to allow override in your custom file */
      onglet4Click (event: KaElementClickEvent) {
        event.vm?.showTooltip(Cv, {
          options: { placement: `full-screen` },
          id: `Cv`
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      onglet5Click () {
        useToast().info(`Définir l'action !`)
      },
      /* @ts-ignore: to allow override in your custom file */
      fondNoirClick (event: KaElementClickEvent) {
        event.vm?.closeTooltip()
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
  return hautDePageFactory(storeId)()
}

export const hautDePageRaw = hautDePageFactory()
export const hautDePage = () => hautDePageRaw() as MergeCustomStore<typeof hautDePageStoreCustom.instance>