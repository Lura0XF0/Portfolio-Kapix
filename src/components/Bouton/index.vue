<template>
  <ka-container
    code="bouton"
    :selected="{ click: componentInstance.boutonClickWhenSelected }"
    :options="$merge({
      style: { color: componentInstance.$choice.value === `Choix 1` ? appData.theme.buttonColor : appData.theme.buttonColor2 },
      click: componentInstance.boutonClick
    }, options)"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="$merge({ click: componentInstance.boutonClickOnSm }, sm)">
    <ka-text
      code="action"
      :options="{
        style: { margin: undefined == null || undefined === '' ? null : componentInstance.$constants.action },
        textNoWrap: true
      }">
      <span v-html="componentInstance.$actionName.value" />
    </ka-text>
    <ka-image
      code="image"
      :options="{
        animationIn: `fadeIn`,
        lazyOptions: {
          throttle: 200,
          once: true,
          intersection: { threshold: 0.1 }
        },
        style: { innerBackgroundColor: appData.theme.fontVisitedHyperlinkColor },
        hidden: componentInstance.$picture.value == null || componentInstance.$picture.value === '' ? true : false,
        renderSvg: true
      }"
      :value="componentInstance.$picture.value" />
  </ka-container>
</template>

<script setup lang="ts">
import { syncComponentStore } from 'kapix-components-vue3'
import { boutonComponent } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Bouton'
})
provide('$scoped', '--c0')
const appData = appDataStore()
const component = boutonComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  actionName: string
  choice: 'Choix 1' | 'Choix 2'
  picture?: Nullable<string>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  actionName: 'Contactez-moi',
  choice: 'Choix 1',
  picture: 'https://ucarecdn.com/6886207a-7df6-4273-af53-f1225e4195d3/pencil (2).svg',
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

const emit = defineEmits([
  'update:actionName',
  'update:choice',
  'update:picture'
])
componentInstance.$emit = emit

syncComponentStore(componentInstance, {
  props,
  propsToWatch: {
    actionName: true,
    choice: true,
    picture: true
  }
})
</script>
