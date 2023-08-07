<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixTextLink v-bind="$data">
        <slot v-if="$data.md" />
        <slot
          v-else-if="$data.sm"
          name="sm" />
        <slot
          v-else
          name="xs" />
      </KapixTextLink>
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixTextLink, kaProps } from 'kapix-components-vue3'

const props = defineProps(kaProps)
</script>
