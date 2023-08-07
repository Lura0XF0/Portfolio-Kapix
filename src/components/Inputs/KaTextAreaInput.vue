<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixTextAreaInput
        v-model="value"
        v-bind="$data" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixTextAreaInput, inputProps } from 'kapix-components-vue3'

const props = defineProps(inputProps(String))
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const value = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emits('update:modelValue', value)
  }
})
</script>
