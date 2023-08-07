<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixLabel v-bind="$data">
        <slot v-if="$data.md" />
        <slot
          v-else-if="$data.sm"
          name="sm" />
        <slot
          v-else
          name="xs" />
      </KapixLabel>
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixLabel, kaProps } from 'kapix-components-vue3'

const props = defineProps(kaProps)
</script>
