import appDataStoreStoreCustom from './appData.custom'
import type { CustomStoreImplementationOptions, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, toResponsiveTheme } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import appInfo from '~/app-info.json'

const storeName = 'appData'
const customImplement: CustomStoreImplementationOptions = appDataStoreStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function appDataStoreFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        title: `Portfolio`,
        icon: `work`,
        name: `rapportdestage`,
        owner: `madfire307@gmail.com`,
        version: `master`,
        copyright: `copyright © 2022`,
        languages: [
          { code: `fr-FR` },
          {
            default: true,
            code: `en-US`
          }
        ],
        website: {
          name: `Portfolio Maxime Lubrano`,
          description: `Bienvenue sur mon portfolio`,
          image: `https://ucarecdn.com/2b70f1c5-bb14-476a-a2bc-d2bd8abb6f10/`,
          domain: `maximelubrano.fr`
        },
        pwa: {
          name: `Portfolio Maxime Lubrano`,
          shortName: `Portfolio`,
          startUrl: `./`,
          themeColor: `#ffffff`,
          backgroundColor: `#ffffff`,
          image: `https://ucarecdn.com/2b70f1c5-bb14-476a-a2bc-d2bd8abb6f10/`
        },
        rawTheme: {
          fontColor: `#C6BFEEFF`,
          fontSize: `18px`,
          fontFamily: `google-font:Montserrat`,
          focusColor: `#000000FF`,
          primaryColor: `#00000073`,
          secondaryColor: `#FFFFFF73`,
          focusBackgroundColor: `{"Angle":90,"Colors":["#ffffffff"]}`,
          backgroundColor: `{"Angle":90,"Colors":["#ffffffff"]}`,
          backgroundImage: null,
          fontColor2: `#C6BFEEFF`,
          fontFamily2: `google-font:Noto Sans Bengali`,
          backgroundColor2: `{"Angle":90,"Colors":["#F9F9F9FF"]}`,
          buttonColor: `#FFFFFFFF`,
          buttonColor2: `#000000FF`,
          fontHyperlinkColor: null,
          fontVisitedHyperlinkColor: null,
          buttonBackgroundColor: `{"Angle":90,"Colors":["#000000FF"]}`,
          buttonBackgroundColor2: `{"Angle":90,"Colors":["#ffffffff"]}`
        },
        hostname: appInfo.hostname,
        twitter: appInfo.twitter as any,
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      theme:(state) => {
        return toResponsiveTheme(state.rawTheme)
      },
      /* @ts-ignore: to allow override in your custom file */
      locale:() => {
        const i18n = useI18n()
        return computed(() => i18n.locale.value)
      },
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
      ...customImplement.actions
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return appDataStoreFactory(storeId)()
}

export const appDataStoreRaw = appDataStoreFactory()
export const appDataStore = () => appDataStoreRaw() as MergeCustomStore<typeof appDataStoreStoreCustom.instance>