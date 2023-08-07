<template>
  <router-view />
  <KapixTooltipsContainer />
</template>

<script setup lang="ts">
import { DEBUG, avoid_debug_127_0_0_1 } from 'kapix-components-vue3'
import appInfo from '~/app-info.json'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
appInfo.website && useHead({
  title: appInfo.website.name,
  meta: [
    { name: 'description', content: appInfo.website.description }
  ]
})

useSchemaOrg([
  // https://vue-schema-org.netlify.app/guide/guides/identity.html#organization
  appInfo.organization && defineOrganization(appInfo.organization),

  // https://vue-schema-org.netlify.app/guide/recipes/breadcrumbs.html
  appInfo.breadcrumb && defineBreadcrumb(appInfo.breadcrumb),

  // https://vue-schema-org.netlify.app/api/schema/person.html#type-definition
  appInfo.author && definePerson(appInfo.author),

  // https://vue-schema-org.netlify.app/guide/guides/identity.html#local-business
  appInfo.localeBusiness && defineLocalBusiness(appInfo.localeBusiness),

  // https://vue-schema-org.netlify.app/api/schema/website.html
  appInfo.website && defineWebSite(appInfo.website)

  // // https://vue-schema-org.netlify.app/api/schema/webpage.html#type-definition
  // defineWebPage()
].filter(v => v))

DEBUG && onMounted(() => avoid_debug_127_0_0_1())

</script>

<style lang="scss">

html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

html {
  font-family: open sans,Arial,helvetica neue,Helvetica,sans-serif;
  font-size: 16px;
  word-break: normal;
  tab-size: 4;
  line-height: 1.5;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
}

* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: none;
  outline: none;
  background: none;
  -webkit-box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  -webkit-padding-before: 0;
  -webkit-padding-start: 0;
  -webkit-padding-end: 0;
  -webkit-padding-after: 0;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background-color: #FFC107;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}
</style>

