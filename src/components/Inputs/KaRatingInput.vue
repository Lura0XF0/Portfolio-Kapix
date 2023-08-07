<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixRatingInput
        v-model="value"
        v-bind="$data" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixRatingInput, inputProps } from 'kapix-components-vue3'

const props = defineProps(inputProps(Number))
const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const value = computed({
  get () {
    return props.modelValue
  },
  set (value: number) {
    emits('update:modelValue', value)
  }
})
</script>
