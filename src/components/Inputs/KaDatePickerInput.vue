<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixDatePicker
        v-model="value"
        v-bind="$data" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixDatePicker, inputProps } from 'kapix-components-vue3'

const props = defineProps(inputProps([Date, String]))
const emits = defineEmits<{
  (e: 'update:modelValue', value: Date): void
}>()
const value = computed({
  get () {
    return props.modelValue
  },
  set (value: Date) {
    emits('update:modelValue', value)
  }
})
</script>
