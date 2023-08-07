<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixPdf v-bind="$data" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { kaProps } from 'kapix-components-vue3'
import KapixPdf from './KapixPdf.vue'

const props = defineProps(kaProps)
</script>
