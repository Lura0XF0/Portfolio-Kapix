import blogStoreCustom from './store.custom'
import type { CustomStoreImplementationOptions, MergeCustomStore, StoreIdentifier, KaElementMap } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { kapixContext, navigateTo, initAliveStoreIds, remove } from 'kapix-components-vue3'
import { $translate } from '~/modules/i18n'

const storeName = 'blog'
const customImplement: CustomStoreImplementationOptions = blogStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function blogFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('blog.title', `Blog`),
        $description: $translate('blog.description', ``),
        $publishedTime: new Date('2023-03-15T08:06:34.738Z'),
        $modifiedTime: new Date('2023-08-04T07:44:18.581Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          logo: `https://ucarecdn.com/a9722564-ba5a-47c3-964f-302975d7ec52/brand-image (1).svg`,
          onglet1: `Nos services` as Nullable<string>,
          tab2: `Nos réalisations` as Nullable<string>,
          tab3: `Nos engagements` as Nullable<string>,
          tab4: undefined as Nullable<string>,
          tab5: undefined as Nullable<string>,
          get blogSelector () {
            return (kapixContext.$route?.query['blog-selector'] || `Rien`) as string
          },
          set blogSelector (blogSelector) {
            navigateTo({
              query: {
                'blog-selector': blogSelector === `Rien` ? undefined : blogSelector
              }
            })
          },
          weekSelector: `0`
        },
        $info: { blog: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      container3Click () {
        this.$data.blogSelector = `Kapix`
      },
      /* @ts-ignore: to allow override in your custom file */
      container6Click () {
        this.$data.weekSelector = `1`
      },
      /* @ts-ignore: to allow override in your custom file */
      container6ClickWhenSelected () {
        this.$data.weekSelector = `1`
        this.$data.weekSelector = `0`
      },
      /* @ts-ignore: to allow override in your custom file */
      container7Click () {
        this.$data.weekSelector = `2`
      },
      /* @ts-ignore: to allow override in your custom file */
      container7ClickWhenSelected () {
        this.$data.weekSelector = `1`
        this.$data.weekSelector = `0`
      },
      /* @ts-ignore: to allow override in your custom file */
      container8Click () {
        this.$data.weekSelector = `3`
      },
      /* @ts-ignore: to allow override in your custom file */
      container8ClickWhenSelected () {
        this.$data.weekSelector = `1`
        this.$data.weekSelector = `0`
      },
      /* @ts-ignore: to allow override in your custom file */
      container9Click () {
        this.$data.weekSelector = `4`
      },
      /* @ts-ignore: to allow override in your custom file */
      container9ClickWhenSelected () {
        this.$data.weekSelector = `1`
        this.$data.weekSelector = `0`
      },
      /* @ts-ignore: to allow override in your custom file */
      container10Click () {
        this.$data.weekSelector = `5`
      },
      /* @ts-ignore: to allow override in your custom file */
      container10ClickWhenSelected () {
        this.$data.weekSelector = `1`
        this.$data.weekSelector = `0`
      },
      /* @ts-ignore: to allow override in your custom file */
      container11Click () {
        this.$data.weekSelector = `6`
      },
      /* @ts-ignore: to allow override in your custom file */
      container11ClickWhenSelected () {
        this.$data.weekSelector = `1`
        this.$data.weekSelector = `0`
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
  return blogFactory(storeId)()
}

export const blogRaw = blogFactory()
export const blog = () => blogRaw() as MergeCustomStore<typeof blogStoreCustom.instance>