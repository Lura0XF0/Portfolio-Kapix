import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { NOOP, initAliveStoreIds, kapixContext, navigateTo, remove, useToast } from 'kapix-components-vue3'
import hautDePageComponentStoreCustom from './store.custom'
import Contact from '~/pages/Contact/index.vue'
import Cv from '~/pages/Cv/index.vue'
import HautDePage from '~/pages/HautDePage/index.vue'

const storeName = 'hautDePageComponent'
const customImplement: CustomStoreImplementationOptions = hautDePageComponentStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function hautDePageComponentFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $constants: {},
        // Data,
        $data: {
          logo: 'https://ucarecdn.com/a9722564-ba5a-47c3-964f-302975d7ec52/brand-image (1).svg',
          onglet1: undefined as Nullable<string>,
          tab2: undefined as Nullable<string>,
          tab3: undefined as Nullable<string>,
          tab4: undefined as Nullable<string>,
          tab5: undefined as Nullable<string>
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      $logo (): WritableComputedRef<string> {
        return computed({
          get: () => this.$data.logo,
          set: (value) => {
            this.$data.logo = value
            this.$emit('update:logo', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $onglet1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.onglet1,
          set: (value) => {
            this.$data.onglet1 = value
            this.$emit('update:onglet1', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $tab2 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.tab2,
          set: (value) => {
            this.$data.tab2 = value
            this.$emit('update:tab2', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $tab3 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.tab3,
          set: (value) => {
            this.$data.tab3 = value
            this.$emit('update:tab3', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $tab4 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.tab4,
          set: (value) => {
            this.$data.tab4 = value
            this.$emit('update:tab4', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $tab5 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.tab5,
          set: (value) => {
            this.$data.tab5 = value
            this.$emit('update:tab5', value)
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async logoClick (event: KaElementClickEvent) {
        await navigateTo({ path: '/' })
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your custom file */
      async onglet1Click (event: KaElementClickEvent) {
        await navigateTo({ path: '/' })
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your custom file */
      async onglet2Click (event: KaElementClickEvent) {
        await navigateTo({ name: 'MonParcours' })
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your custom file */
      async onglet3Click (event: KaElementClickEvent) {
        await navigateTo({ name: 'Blog' })
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your custom file */
      onglet4Click (event: KaElementClickEvent) {
        event.vm?.showTooltip(Cv, {
          options: { placement: 'full-screen' },
          id: 'Cv'
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      onglet5Click () {
        useToast().info('Définir l\'action !')
      },
      /* @ts-ignore: to allow override in your custom file */
      boutonClick (event: KaElementClickEvent) {
        event.vm?.showTooltip(Contact)
      },
      /* @ts-ignore: to allow override in your custom file */
      boutonClickWhenSelected (event: KaElementClickEvent) {
        event.vm?.showTooltip(Contact)
        event.vm?.closeTooltip()
      },
      /* @ts-ignore: to allow override in your custom file */
      menuBurgerClickOnSm (event: KaElementClickEvent) {
        event.vm?.showTooltip(HautDePage, {
          context: {
            tab1: this.$onglet1.value,
            tab2: this.$tab2.value,
            tab3: this.$tab3.value,
            tab4: this.$tab4.value,
            tab5: this.$tab5.value
          },
          options: { placement: 'full-screen' },
          id: 'HautDePage'
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      menuBurgerClickOnSmWhenSelected (event: KaElementClickEvent) {
        event.vm?.closeAllTooltips()
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
  return hautDePageComponentFactory(storeId)()
}

export const hautDePageComponentRaw = hautDePageComponentFactory()
export const hautDePageComponent = () => hautDePageComponentRaw() as MergeCustomStore<typeof hautDePageComponentStoreCustom.instance>
