<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixLeaflet v-bind="$data">
        <template #item="$item">
          <slot
            name="item"
            v-bind="$item" />
        </template>
      </KapixLeaflet>
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixLeaflet, kaProps } from 'kapix-components-vue3'

const props = defineProps(kaProps)
</script>

