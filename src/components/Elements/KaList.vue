<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixList
        v-model="selectedItem"
        v-bind="$data">
        <template #item="$item">
          <slot
            name="item"
            v-bind="$item" />
        </template>
        <template
          v-if="$slots['item-sm']"
          #item-sm="$item">
          <slot
            name="item-sm"
            v-bind="$item" />
        </template>
        <template
          v-if="$slots['item-xs']"
          #item-xs="$item">
          <slot
            name="item-xs"
            v-bind="$item" />
        </template>
      </KapixList>
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixList, inputProps } from 'kapix-components-vue3'

const props = defineProps(inputProps([String, Object]))
const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const selectedItem = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emits('update:modelValue', value)
  }
})
</script>
