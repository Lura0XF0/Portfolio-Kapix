import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext, remove, textToClipboard, useToast } from 'kapix-components-vue3'
import contactStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'contact'
const customImplement: CustomStoreImplementationOptions = contactStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function contactFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('contact.title', 'Contact'),
        $description: $translate('contact.description', ''),
        $publishedTime: new Date('2023-08-02T14:21:24.310Z'),
        $modifiedTime: new Date('2023-08-09T07:30:57.612Z'),
        // Constants,
        $constants: {},
        // Data,
        $info: { contact: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async icon1Click () {
        await textToClipboard('maxime.lubrano@hotmail.fr')
        useToast().info('Email Copiée !')
      },
      /* @ts-ignore: to allow override in your custom file */
      async icon3Click () {
        await textToClipboard('06 52 23 59 88')
        useToast().info('Téléphone Copiée !')
      },
      /* @ts-ignore: to allow override in your custom file */
      async icon5Click () {
        await textToClipboard('maxime-lubrano-66b828263')
        useToast().info('LinkedIn Copiée !')
      },
      /* @ts-ignore: to allow override in your custom file */
      async copieeClick () {
        await textToClipboard('MadFire07')
        useToast().info('Github Copiée !')
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
  return contactFactory(storeId)()
}

export const contactRaw = contactFactory()
export const contact = () => contactRaw() as MergeCustomStore<typeof contactStoreCustom.instance>
