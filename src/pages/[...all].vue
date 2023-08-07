<template>
  <ka-container
    code="page-404"
    :data="page.$info.page404"
    :options="{
      bgType: 0,
      lottieOptions: {
        src: `https://assets3.lottiefiles.com/packages/lf20_mqaedonz.json`,
        preserveAspectRatio: `xMidYMid slice`,
        loop: true,
        autoplay: true
      },
      lazyOptions: {
        throttle: 200,
        once: true,
        intersection: { threshold: 0.1 }
      },
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }"
    :xs-hover="{
      lottieOptions: {
        src: `https://assets3.lottiefiles.com/packages/lf20_mqaedonz.json`,
        loop: true,
        autoplay: true
      }
    }"
    :xs-selected="{
      lottieOptions: {
        src: `https://assets3.lottiefiles.com/packages/lf20_mqaedonz.json`,
        loop: true,
        autoplay: true
      }
    }">
    <!-- Conteneur -->
    <ka-container
      code="conteneur"
      inner>
      <ka-text
        code="page-introuvable"
        inner>
        <span v-html="t('page404.conteneur.pageIntrouvable.value', `Page introuvable`)" />
      </ka-text>
      <ka-button
        code="retour-a-laccueil"
        :options="{
          ripple: true,
          href: { path: `/` },
          ariaLabel: `home`,
          click: page.retourALaccueilClick
        }"
        inner>
        <span v-html="t('page404.conteneur.retourALaccueil.value', `Retour à l'accueil`)" />
      </ka-button>
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { page404 } from './Page404/store'
import { generateMeta, syncPageStore } from 'kapix-components-vue3'
import { appDataStore } from '~/stores'
import './Page404/style.scss'
import './Page404/style.custom.scss'

defineOptions({
  name: 'Page404'
})
provide('$scoped', '--p1')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(page404())
// SEO
if (props.seo) {
  // https://github.com/vueuse/head
  useHead({
    title: computed(() => page.$title),
    htmlAttrs: { lang: appData.locale },
    meta: computed(() => generateMeta({
      title: page.$title,
      description: page.$description,
      canonicalUrl: appData.hostname,
      publishedTime: page.$publishedTime,
      modifiedTime: page.$modifiedTime,
      ...appData.twitter
    }))
  })

  useSchemaOrg([
    // https://vue-schema-org.netlify.app/api/schema/webpage.html#type-definition
    defineWebPage({
      name: page.$title,
      description: page.$description,
      inLanguage: appData.locale,
      primaryImageOfPage: appData.twitter.image,
      datePublished: page.$publishedTime
      // dateModified: page.$modifiedTime?.toISOString()
    })
  ])
}
</script>
