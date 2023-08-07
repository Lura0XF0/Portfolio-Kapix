<template>
  <ka-container
    code="mon-parcours"
    :data="page.$info.monParcours"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <HautDePage
      instance-class="haut-de-page--p5"
      logo="https://ucarecdn.com/2b70f1c5-bb14-476a-a2bc-d2bd8abb6f10/"
      onglet-1="Acceuil"
      tab-2="Mon parcours"
      tab-3="Blog"
      tab-4="CV" />
    <!-- Container 1 -->
    <ka-container code="container-1">
      <ka-text
        code="titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <span v-html="t('monParcours.container1.titre.value', `Mon Parcours`)" />
      </ka-text>
      <!-- Container -->
      <ka-container code="container">
        <!-- Container 2 -->
        <ka-container code="container-2">
          <ka-text
            code="titre-text"
            :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
            <span v-html="t('monParcours.container1.container.container2.titreText.value', `Professionel`)" />
          </ka-text>
          <!-- Container -->
          <ka-container code="container-3">
            <ka-image
              code="image"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                alt: `Image`
              }"
              value="https://ucarecdn.com/7d3aeeda-e239-4e67-ba2b-876032878c9e/" />
            <!-- Container -->
            <ka-container code="container-4">
              <ka-text
                code="description"
                :options="{ style: { color: appData.theme.fontFamily } }">
                <span v-html="t('monParcours.container1.container.container2.container3.container4.description.value', `Mon stage chez Kapix a été une expérience vraiment enrichissante. Travailler au sein de l'équipe de sécurité informatique m'a permis de plonger dans l'univers complexe de la protection des données et des systèmes. J'ai eu l'occasion de détecter et de corriger des vulnérabilités, ainsi que de mettre en place des mesures de prévention pour assurer la sécurité des informations sensibles.`)" />
              </ka-text>
              <ka-button
                code="en-savoir-plus"
                :options="{
                  ripple: true,
                  href: {
                    name: `Blog`,
                    query: { [`blog-selector`]: `Kapix` }
                  },
                  click: page.enSavoirPlusClick
                }">
                <span v-html="t('monParcours.container1.container.container2.container3.container4.enSavoirPlus.value', `En Savoir Plus  ➞`)" />
              </ka-button>
            </ka-container>
          </ka-container>
          <!-- Container -->
          <ka-container code="container-5">
            <ka-image
              code="image-1"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                alt: `Image`
              }"
              value="https://ucarecdn.com/6dc4ba89-38de-4530-97cc-a93a199a54b1/" />
            <ka-text
              code="description-text"
              :options="{ style: { color: appData.theme.fontFamily } }">
              <span v-html="t('monParcours.container1.container.container2.container5.descriptionText.value', `Mon stage au Centre Spatial Universitaire de Montpellier a été une expérience extraordinaire, travaillant aux côtés de scientifiques et d'ingénieurs chevronnés sur des projets de recherche spatiale passionnants.`)" />
            </ka-text>
          </ka-container>
          <!-- Container 1 -->
          <ka-container code="container-1-container">
            <ka-image
              code="image-2"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                alt: `Image`
              }"
              value="https://ucarecdn.com/65c5077f-7a15-499b-ab7d-340de901d36e/" />
            <ka-text
              code="description-1"
              :options="{ style: { color: appData.theme.fontFamily } }">
              <span v-html="t('monParcours.container1.container.container2.container1Container.description1.value', `Mon stage à la SNCF a été une expérience captivante, me permettant de découvrir le fonctionnement du secteur ferroviaire et d'apporter ma contribution à des projets concrets. J'ai apprécié l'importance accordée à la sécurité et la qualité des services.`)" />
            </ka-text>
          </ka-container>
          <!-- Container -->
          <ka-container code="container-6">
            <ka-image
              code="image-3"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                alt: `Image`
              }"
              value="https://ucarecdn.com/b4417de3-ecda-44df-86ef-f0dd5934550c/" />
            <ka-text
              code="description-2"
              :options="{ style: { color: appData.theme.fontFamily } }">
              <span v-html="t('monParcours.container1.container.container2.container6.description2.value', `Mon stage de BAFA a été une expérience enrichissante et formatrice, avec des moments de créativité et d'interactions stimulantes auprès des enfants.`)" />
            </ka-text>
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container
          code="container-3-container"
          inner>
          <ka-text
            code="titre-1"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <span v-html="t('monParcours.container1.container.container3Container.titre1.value', `Scolaires`)" />
          </ka-text>
          <!-- Container -->
          <ka-container code="container-7">
            <!-- Container -->
            <ka-container code="container-8">
              <ka-image
                code="image-4"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Image`
                }"
                value="https://ucarecdn.com/0d4851a8-cec9-4e0c-8c06-040412967aba/" />
              <ka-text
                code="sous-titre"
                :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
                <span v-html="t('monParcours.container1.container.container3Container.container7.container8.sousTitre.value', `Bachelor 3<br>Informatique`)" />
              </ka-text>
              <ka-text code="description-3">
                <span v-html="t('monParcours.container1.container.container3Container.container7.container8.description3.value', `Actuellement en B3 informatique, option cyber sécurité à Montpellier, mon objectif est de poursuivre mes études jusqu'au Master 2 en expert cybersécurité.`)" />
              </ka-text>
            </ka-container>
            <!-- Container -->
            <ka-container code="container-9">
              <ka-image
                code="image-5"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Image`
                }"
                value="https://ucarecdn.com/63c50f95-456e-4758-9bfa-149f61134470/" />
              <ka-text
                code="sous-titre-text"
                :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
                <span v-html="t('monParcours.container1.container.container3Container.container7.container9.sousTitreText.value', `BAC<br>Technologique`)" />
              </ka-text>
              <ka-text code="description-4">
                <span v-html="t('monParcours.container1.container.container3Container.container7.container9.description4.value', `J'ai suivi une filière technologique avec une option en Science de l'Informatique (SI) et j'ai réussi à obtenir mon Baccalauréat avec mention assez bien.`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { monParcours } from './store'
import { generateMeta, syncPageStore } from 'kapix-components-vue3'
import HautDePage from '~/components/HautDePage/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'MonParcours'
})
provide('$scoped', '--p5')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(monParcours())
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
