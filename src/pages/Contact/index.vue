<template>
  <ka-container
    code="contact"
    :data="page.$info.contact"
    :options="{
      style: {
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <!-- Container -->
    <ka-container code="container">
      <!-- Container -->
      <ka-container code="container-1">
        <ka-icon
          code="icon"
          value="i-fa-solid:envelope" />
        <ka-text code="email">
          <span v-html="t('contact.container.container1.email.value', `Email : maxime.lubrano&#64;hotmail.fr`)" />
        </ka-text>
        <ka-icon
          code="icon-1"
          :options="{ click: page.icon1Click }"
          value="i-fa-solid:copy" />
      </ka-container>
      <!-- Container -->
      <ka-container code="container-2">
        <ka-icon
          code="icon-2"
          value="i-fa-solid:phone" />
        <ka-text code="telephone-0652">
          <span v-html="t('contact.container.container2.telephone0652.value', `Telephone :  06 52 23 59 88`)" />
        </ka-text>
        <ka-icon
          code="icon-3"
          :options="{ click: page.icon3Click }"
          value="i-fa-solid:copy" />
      </ka-container>
      <!-- Container -->
      <ka-container code="container-3">
        <ka-icon
          code="icon-4"
          value="i-fa-brands:linkedin" />
        <ka-text
          code="linked-in"
          inner>
          <span v-html="t('contact.container.container3.linkedIn.value', `LinkedIn : maxime-lubrano-66b828263`)" />
        </ka-text>
        <ka-icon
          code="icon-5"
          :options="{ click: page.icon5Click }"
          value="i-fa-solid:copy" />
      </ka-container>
      <!-- Container -->
      <ka-container code="container-4">
        <ka-icon
          code="icon-6"
          value="i-fa-brands:github" />
        <ka-text code="github">
          <span v-html="t('contact.container.container4.github.value', `Github : MadFire07`)" />
        </ka-text>
        <ka-icon
          code="copiee"
          :options="{ click: page.copieeClick }"
          value="i-fa-solid:copy" />
      </ka-container>
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { syncPageStore } from 'kapix-components-vue3'
import { contact } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Contact'
})
provide('$scoped', '--p4')
const appData = appDataStore()
const page = contact()

syncPageStore(page)
</script>
