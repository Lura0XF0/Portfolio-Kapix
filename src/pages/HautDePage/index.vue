<template>
  <ka-container
    code="haut-de-page"
    :data="page.$info.hautDePage"
    :options="{
      animationIn: `fadeInDownBig`,
      style: {
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <ka-icon
      code="fermer"
      :options="{
        style: {
          color: `$invert`,
          innerBackgroundColor: appData.theme.backgroundColor
        },
        click: page.fermerClick
      }"
      value="i-fa-solid:times" />
    <!-- Burger -->
    <ka-container
      code="burger"
      :options="{
        style: {
          color: `$invert`,
          innerBackgroundColor: appData.theme.backgroundColor
        }
      }">
      <ka-text
        code="onglet-1"
        :options="{
          href: { path: `/` },
          ariaLabel: `home`,
          click: page.onglet1Click,
          hidden: page.$data.tab1 == null || page.$data.tab1 === '' ? true : false
        }">
        <span v-html="page.$data.tab1" />
      </ka-text>
      <ka-text
        code="onglet-2"
        :options="{
          href: { name: `MonParcours` },
          click: page.onglet2Click,
          hidden: page.$data.tab2 == null || page.$data.tab2 === '' ? true : false
        }">
        <span v-html="page.$data.tab2" />
      </ka-text>
      <ka-text
        code="onglet-3"
        :options="{
          href: { name: `Blog` },
          click: page.onglet3Click,
          hidden: page.$data.tab3 == null || page.$data.tab3 === '' ? true : false
        }">
        <span v-html="page.$data.tab3" />
      </ka-text>
      <ka-text
        code="onglet-4"
        :options="{
          click: page.onglet4Click,
          hidden: page.$data.tab4 == null || page.$data.tab4 === '' ? true : false
        }">
        <span v-html="page.$data.tab4" />
      </ka-text>
      <ka-text
        code="onglet-5"
        :options="{
          click: page.onglet5Click,
          hidden: page.$data.tab5 == null || page.$data.tab5 === '' ? true : false
        }">
        <span v-html="page.$data.tab5" />
      </ka-text>
      <Bouton instance-class="bouton--p2" />
    </ka-container>
    <!-- Fond noir -->
    <ka-container
      code="fond-noir"
      :options="{ click: page.fondNoirClick }" />
  </ka-container>
</template>

<script setup lang="ts">
import { hautDePage } from './store'
import { syncPageStore } from 'kapix-components-vue3'
import Bouton from '~/components/Bouton/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HautDePage'
})
provide('$scoped', '--p2')
const appData = appDataStore()
const page = hautDePage()
const props = withDefaults(defineProps<{
  tab1?: Nullable<string>
  tab2?: Nullable<string>
  tab3?: Nullable<string>
  tab4?: Nullable<string>
  tab5?: Nullable<string>
}>(), {
  tab1: `Nos services`,
  tab2: `Nos réalisations`,
  tab3: `Nos engagements`,
  tab4: undefined,
  tab5: undefined
})

syncPageStore(page, {
  props,
  propsToWatch: {
    tab1: true,
    tab2: true,
    tab3: true,
    tab4: true,
    tab5: true
  }
})
</script>
