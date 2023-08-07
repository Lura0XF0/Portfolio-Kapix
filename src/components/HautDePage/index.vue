<template>
  <ka-container
    code="haut-de-page"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner != null ? inner : true"
    :xs="xs"
    :sm="sm">
    <ka-image
      code="logo"
      :options="{
        animationIn: `fadeIn`,
        href: { path: `/` },
        ariaLabel: `home`,
        lazyOptions: {
          throttle: 200,
          once: true,
          intersection: { threshold: 0.1 }
        },
        click: componentInstance.logoClick,
        hidden: componentInstance.$logo.value == null || componentInstance.$logo.value === '' ? null : false,
        defaultImage: `https://ucarecdn.com/f4ac6a51-f9cc-4459-97a3-c44c1c573e9f/brand-image (1).svg`
      }"
      :value="componentInstance.$logo.value" />
    <!-- Onglets -->
    <ka-container
      code="onglets"
      :sm="{ hidden: true }">
      <ka-text
        code="onglet-1"
        :options="{
          href: { path: `/` },
          ariaLabel: `home`,
          style: { color: appData.theme.fontHyperlinkColor },
          click: componentInstance.onglet1Click,
          hidden: componentInstance.$onglet1.value == null || componentInstance.$onglet1.value === '' ? true : false,
          textNoWrap: true
        }"
        :hover="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }"
        :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
        <span v-html="componentInstance.$onglet1.value" />
      </ka-text>
      <ka-text
        code="onglet-2"
        :options="{
          href: { name: `MonParcours` },
          style: { color: appData.theme.fontHyperlinkColor },
          click: componentInstance.onglet2Click,
          hidden: componentInstance.$tab2.value == null || componentInstance.$tab2.value === '' ? true : false,
          textNoWrap: true
        }"
        :hover="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }"
        :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
        <span v-html="componentInstance.$tab2.value" />
      </ka-text>
      <ka-text
        code="onglet-3"
        :options="{
          href: { name: `Blog` },
          style: { color: appData.theme.fontHyperlinkColor },
          click: componentInstance.onglet3Click,
          hidden: componentInstance.$tab3.value == null || componentInstance.$tab3.value === '' ? true : false,
          textNoWrap: true
        }"
        :hover="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }"
        :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
        <span v-html="componentInstance.$tab3.value" />
      </ka-text>
      <ka-text
        code="onglet-4"
        :options="{
          style: { color: appData.theme.fontHyperlinkColor },
          click: componentInstance.onglet4Click,
          hidden: componentInstance.$tab4.value == null || componentInstance.$tab4.value === '' ? true : false,
          textNoWrap: true
        }"
        :hover="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }"
        :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
        <span v-html="componentInstance.$tab4.value" />
      </ka-text>
      <ka-text
        code="onglet-5"
        :options="{
          style: { color: appData.theme.fontHyperlinkColor },
          click: componentInstance.onglet5Click,
          hidden: componentInstance.$tab5.value == null || componentInstance.$tab5.value === '' ? true : false,
          textNoWrap: true
        }"
        :hover="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }"
        :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
        <span v-html="componentInstance.$tab5.value" />
      </ka-text>
    </ka-container>
    <Bouton
      instance-class="bouton--c1"
      :options="{ click: componentInstance.boutonClick }"
      :selected="{ click: componentInstance.boutonClickWhenSelected }"
      :sm="{ hidden: true }" />
    <ka-icon
      code="menu-burger"
      :options="{ hidden: true }"
      :sm="{
        style: {
          innerBackgroundColor: appData.theme.backgroundColor,
          color: appData.theme.fontColor2,
          borderColor: appData.theme.fontColor2
        },
        click: componentInstance.menuBurgerClickOnSm,
        hidden: false
      }"
      :sm-selected="{
        style: { color: appData.theme.fontColor2 },
        click: componentInstance.menuBurgerClickOnSmWhenSelected
      }"
      value="i-fa-solid:icons"
      sm-value="i-fa-solid:bars" />
  </ka-container>
</template>

<script setup lang="ts">
import { syncComponentStore } from 'kapix-components-vue3'
import { hautDePageComponent } from './store'
import Bouton from '~/components/Bouton/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HautDePage'
})
provide('$scoped', '--c1')
const appData = appDataStore()
const component = hautDePageComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  logo: string
  onglet1?: Nullable<string>
  tab2?: Nullable<string>
  tab3?: Nullable<string>
  tab4?: Nullable<string>
  tab5?: Nullable<string>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  logo: 'https://ucarecdn.com/a9722564-ba5a-47c3-964f-302975d7ec52/brand-image (1).svg',
  onglet1: 'Nos services',
  tab2: 'Nos réalisations',
  tab3: 'Nos engagements',
  tab4: undefined,
  tab5: undefined,
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

const emit = defineEmits([
  'update:logo',
  'update:onglet1',
  'update:tab2',
  'update:tab3',
  'update:tab4',
  'update:tab5'
])
componentInstance.$emit = emit

syncComponentStore(componentInstance, {
  props,
  propsToWatch: {
    logo: true,
    onglet1: true,
    tab2: true,
    tab3: true,
    tab4: true,
    tab5: true
  }
})
</script>
