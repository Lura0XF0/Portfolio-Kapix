<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <KapixStringInput
        v-model="value"
        v-bind="$data">
        <template #prepend-icon>
          <slot name="prepend-icon" />
        </template>
        <template #prepend-inner-icon>
          <slot name="prepend-inner-icon" />
        </template>
        <template #prepend-inner>
          <slot name="prepend-inner" />
        </template>
        <template #append-icon>
          <slot name="append-icon" />
        </template>
        <template #append-outer-icon>
          <slot name="append-outer-icon" />
        </template>
      </KapixStringInput>
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixStringInput, inputProps } from 'kapix-components-vue3'

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
