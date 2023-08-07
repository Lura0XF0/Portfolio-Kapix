<template>
  <VuePdfEmbed
    v-if="kapixContext.isClient && computedValue"
    class="kapix-pdf-viewer"
    :class="templateClass"
    :source="computedValue" />
  <fa-solid-file-pdf
    v-else
    class="kapix-pdf-viewer-icon"
    :class="templateClass" />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { kapixContext, kapixProps } from 'kapix-components-vue3'

const props = defineProps(kapixProps([String, Object] as PropType<String | Object | Uint8Array>))

const VuePdfEmbed = defineAsyncComponent(() => import(/* webpackChunkName: "KapixPdfViewer" */ 'vue-pdf-embed'))

const computedValue = computed(() => kapixContext.isClient ? props.lazyValue : undefined)
</script>

<style lang="scss">
.kapix-pdf-viewer {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &-icon {
    font-size: 100px;
  }
}
</style>
