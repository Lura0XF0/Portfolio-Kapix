<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixAvatar v-bind="$data" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixAvatar, kaProps } from 'kapix-components-vue3'

const props = defineProps(kaProps)
</script>
