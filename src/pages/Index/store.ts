import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext, remove } from 'kapix-components-vue3'
import portfolioStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'portfolio'
const customImplement: CustomStoreImplementationOptions = portfolioStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function portfolioFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('portfolio.title', 'Portfolio de Maxime Lubrano : Expert en Cybersécurité | Découvrez mes compétences et réalisations'),
        $description: $translate('portfolio.description', `Découvrez mon portfolio polyvalent en cybersécurité et technologies IT. Je suis Maxime Lubrano, spécialisé en cyber sécurité, je fais aussi de l'administration réseau en entreprise et DevOps. Explorez mes projets et réalisations dans le domaine de la sécurité informatique, tout en découvrant mes compétences en Linux, Hardware et développement de code.
`),
        $publishedTime: new Date('2023-03-15T08:06:34.738Z'),
        $modifiedTime: new Date('2023-08-04T07:51:45.009Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          logo: 'https://ucarecdn.com/a9722564-ba5a-47c3-964f-302975d7ec52/brand-image (1).svg',
          onglet1: 'Nos services' as Nullable<string>,
          tab2: 'Nos réalisations' as Nullable<string>,
          tab3: 'Nos engagements' as Nullable<string>,
          tab4: undefined as Nullable<string>,
          tab5: undefined as Nullable<string>
        },
        $info: { portfolio: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      ...customImplement.getters
    },
    actions: {
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
  return portfolioFactory(storeId)()
}

export const portfolioRaw = portfolioFactory()
export const portfolio = () => portfolioRaw() as MergeCustomStore<typeof portfolioStoreCustom.instance>
