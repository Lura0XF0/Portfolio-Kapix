<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixCheckboxInput
        v-model="value"
        v-bind="$data" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixCheckboxInput, inputProps } from 'kapix-components-vue3'

const props = defineProps(inputProps(Boolean))
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const value = computed({
  get () {
    return props.modelValue
  },
  set (value: boolean) {
    emits('update:modelValue', value)
  }
})
</script>
