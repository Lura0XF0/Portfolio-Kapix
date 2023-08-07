<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixSelectMultipleInput
        v-model="value"
        v-bind="$data" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixSelectMultipleInput, inputProps } from 'kapix-components-vue3'

const props = defineProps(inputProps(Array))
const emits = defineEmits<{
  (e: 'update:modelValue', value: Array<any>): void
}>()
const value = computed({
  get () {
    return props.modelValue
  },
  set (value: Array<any>) {
    emits('update:modelValue', value)
  }
})
</script>
