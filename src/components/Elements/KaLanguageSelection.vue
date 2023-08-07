<template>
  <KaElement v-bind="props">
    <template #label>
      <slot name="label" />
    </template>
    <template #default="{ templateClass }">
      <KapixSelectInput
        v-model="language"
        :class="templateClass"
        :options="{ values: languages }" />
    </template>
    <template #loading>
      <slot name="loading" />
    </template>
  </KaElement>
</template>

<script>
import { KapixSelectInput, kaProps } from 'kapix-components-vue3'
export default {
  components: {
    KapixSelectInput
  },
  props: kaProps,
  computed: {
    languages () {
      const codes = this.$i18n.availableLocales.map(code => code.split('-')[0])
      return this.$i18n.availableLocales.map((fullCode) => {
        const code = fullCode.split('-')[0]
        return {
          label: new Intl.DisplayNames([code], { type: 'language' }).of(codes.filter(c => c === code).length > 1 ? fullCode : code),
          value: fullCode
        }
      })
    },
    language: {
      get () {
        return this.$i18n.locale
      },
      set (value) {
        this.$i18n.locale = value
      }
    }
  }
}
</script>
