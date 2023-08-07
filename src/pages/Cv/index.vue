<template>
  <ka-container
    code="cv"
    :data="page.$info.cv"
    :options="{
      style: {
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <ka-icon
      code="icon-1"
      :options="{ click: page.icon1Click }"
      value="i-fa-solid:times" />
    <!-- Container -->
    <ka-container code="container">
      <ka-image
        code="image"
        :options="{
          animationIn: `fadeIn`,
          lazyOptions: {
            throttle: 200,
            once: true,
            intersection: { threshold: 0.1 }
          },
          alt: `Image`
        }"
        value="https://ucarecdn.com/cc90caa0-2674-4b02-937c-baa43572d4e8/" />
    </ka-container>
    <!-- Container 2 -->
    <ka-container
      code="container-2"
      :options="{ click: page.container2Click }">
      <ka-text
        code="telecharger"
        :options="{
          style: { color: appData.theme.fontColor },
          click: page.telechargerClick
        }">
        <span v-html="t('cv.container2.telecharger.value', `Telecharger`)" />
      </ka-text>
      <ka-icon
        code="icon"
        :options="{ style: { color: appData.theme.fontColor } }"
        value="i-fa-solid:download" />
    </ka-container>
    <!-- Container 1 -->
    <ka-container
      code="container-1"
      :options="{ click: page.container1Click }" />
  </ka-container>
</template>

<script setup lang="ts">
import { syncPageStore } from 'kapix-components-vue3'
import { cv } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Cv'
})
provide('$scoped', '--p3')
const appData = appDataStore()
const page = cv()

syncPageStore(page)
</script>
