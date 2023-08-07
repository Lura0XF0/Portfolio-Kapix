<template>
  <ka-container
    code="portfolio"
    :data="page.$info.portfolio"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <HautDePage
      instance-class="haut-de-page--p0"
      logo="https://ucarecdn.com/2b70f1c5-bb14-476a-a2bc-d2bd8abb6f10/"
      onglet-1="Accueil"
      tab-2="Mon parcours"
      tab-3="Blog"
      tab-4="CV" />
    <!-- Container 1 -->
    <ka-container
      code="container-1"
      inner>
      <ka-text
        code="titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <span v-html="t('portfolio.container1.titre.value', `PORTFOLIO`)" />
      </ka-text>
      <ka-text code="nom-prenom">
        <span v-html="t('portfolio.container1.nomPrenom.value', `Maxime Lubrano`)" />
      </ka-text>
    </ka-container>
    <!-- Container 2 -->
    <ka-container
      code="container-2"
      inner>
      <ka-text
        code="titre-text"
        :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
        <span v-html="t('portfolio.container2.titreText.value', `<strong>Mes Competences Principales</strong>`)" />
      </ka-text>
      <ka-text code="description">
        <span v-html="t('portfolio.container2.description.value', `Voici les compétences sur lesquelles je serai apte à mettre en œuvre ou développer`)" />
      </ka-text>
      <!-- Competence -->
      <ka-container code="competence">
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
          value="https://ucarecdn.com/79eca7da-fb8c-4855-98bb-7a158bc744ea/" />
        <ka-text
          code="description-text"
          :options="{ style: { color: appData.theme.fontFamily } }">
          <span v-html="t('portfolio.container2.competence.descriptionText.value', `Doté(e) d'une formation en cyber informatique, je maîtrise un large éventail de compétences allant de l'analyse de vulnérabilités et le test d'intrusion, jusqu'à la mise en place de mesures de protection avancées, en passant par la programmation sécurisée et la gestion proactive des risques numériques`)" />
        </ka-text>
      </ka-container>
      <!-- Competence -->
      <ka-container code="competence-container">
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
          value="https://ucarecdn.com/5fcfde0e-dc6f-42d9-bcc0-536e2e9d4e48/" />
        <ka-text
          code="description-1"
          :options="{ style: { color: appData.theme.fontFamily } }">
          <span v-html="t('portfolio.container2.competenceContainer.description1.value', `Malgré mon orientation initiale en cyber informatique, j'ai développé des compétences remarquables en infrastructure réseau grâce à des experiences travail ou à mon désir d'explorer de nouveaux horizons, me permettant ainsi de concevoir et de mettre en œuvre des architectures réseau (Nginx, GeoIP, PotegreSQL, Keykloak) pour soutenir des environnements informatiques exigeants.`)" />
        </ka-text>
      </ka-container>
      <!-- Competence -->
      <ka-container code="competence-1">
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
          value="https://ucarecdn.com/33b960ce-f75c-455d-8d0f-1983571ff81b/" />
        <ka-text
          code="description-2"
          :options="{ style: { color: appData.theme.fontFamily } }">
          <span v-html="t('portfolio.container2.competence1.description2.value', `J'ai aussi acquis des compétences en DevOps en me lançant dans des projets innovants, automatisant les déploiements (Kubernetes), optimisant les processus de développement et favorisant une collaboration efficace entre les équipes (Docker), démontrant ainsi ma capacité à exceller dans le domaine du DevOps malgré son éloignement de ma spécialité.`)" />
        </ka-text>
      </ka-container>
    </ka-container>
    <!-- Container 3 -->
    <ka-container
      code="container-3"
      inner>
      <ka-text
        code="titre-1"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <span v-html="t('portfolio.container3.titre1.value', `<strong>Mes Competences Secondaires</strong>`)" />
      </ka-text>
      <!-- Container -->
      <ka-container code="container">
        <!-- Container -->
        <ka-container code="container-4">
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
            value="https://ucarecdn.com/294c067c-1718-4ca1-a4db-6bb33994446f/" />
          <ka-text
            code="titre-2"
            :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
            <span v-html="t('portfolio.container3.container.container4.titre2.value', `Hardware`)" />
          </ka-text>
          <ka-text code="description-3">
            <span v-html="t('portfolio.container3.container.container4.description3.value', `Fort en hardware depuis mon enfance, mes compétences me permettent de jouer un rôle essentiel dans n'importe quel environnement de travail en assurant une gestion efficace du matériel, des systèmes optimisés et des solutions innovantes,`)" />
          </ka-text>
        </ka-container>
        <!-- Container -->
        <ka-container code="container-5">
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
            value="https://ucarecdn.com/15cd26e9-2fe0-40d9-b98f-c16247817ff3/" />
          <ka-text
            code="titre-3"
            :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
            <span v-html="t('portfolio.container3.container.container5.titre3.value', `Code`)" />
          </ka-text>
          <ka-text code="description-4">
            <span v-html="t('portfolio.container3.container.container5.description4.value', `En tant que développeur de niveau intermédiaire, mes compétences en programmation offrent une base solide pour résoudre des problèmes et créer des fonctionnalités essentielles pour le travail. <br>Mes language de code que je manie le plus sont : <br>Python, Bash, Go , C`)" />
          </ka-text>
        </ka-container>
        <!-- Container -->
        <ka-container code="container-6">
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
            value="https://ucarecdn.com/61abd9e3-5218-4b57-8322-af1d9e08d0df/" />
          <ka-text
            code="titre-4"
            :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
            <span v-html="t('portfolio.container3.container.container6.titre4.value', `Linux`)" />
          </ka-text>
          <ka-text code="description-5">
            <span v-html="t('portfolio.container3.container.container6.description5.value', `En tant qu'utilisateur de la suite Linux, mes compétences approfondies dans la gestion du système, l'administration de serveurs et l'utilisation des outils en ligne de commande me permettent de fournir un support technique, d'optimiser les performances et de garantir la stabilité des infrastructures informatiques de l'entreprise.`)" />
          </ka-text>
        </ka-container>
      </ka-container>
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { portfolio } from './Index/store'
import { generateMeta, syncPageStore } from 'kapix-components-vue3'
import HautDePage from '~/components/HautDePage/index.vue'
import { appDataStore } from '~/stores'
import './Index/style.scss'
import './Index/style.custom.scss'

defineOptions({
  name: 'HomePage'
})
provide('$scoped', '--p0')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(portfolio())
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
