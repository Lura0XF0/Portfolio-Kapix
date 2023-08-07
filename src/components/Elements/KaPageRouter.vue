<template>
  <KaElement
    v-bind="props"
    :slots="$slots">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="$data">
      <div
        v-if="$data.xs"
        class="kapix-page-router"
        :class="$data.templateClass">
        <slot />
      </div>
      <div
        v-else-if="$data.sm"
        class="kapix-page-router"
        :class="$data.templateClass">
        <slot />
      </div>
      <div
        v-else-if="$slots.default"
        class="kapix-page-router"
        :class="$data.templateClass">
        <slot />
      </div>
      <router-view
        v-else
        class="kapix-page-router"
        :class="$data.templateClass" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { kaProps } from 'kapix-components-vue3'

const props = defineProps(kaProps)
</script>

<style lang="scss">
.kapix-page-router {
  @include full-size;
}
</style>
