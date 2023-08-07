<template>
  <ka-container
    code="blog"
    :data="page.$info.blog"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <HautDePage
      instance-class="haut-de-page--p6"
      logo="https://ucarecdn.com/2b70f1c5-bb14-476a-a2bc-d2bd8abb6f10/"
      onglet-1="Acceuil"
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
        <span v-html="t('blog.container1.titre.value', `Blog`)" />
      </ka-text>
      <!-- Container -->
      <ka-container code="container">
        <!-- Container 2 -->
        <ka-container code="container-2">
          <ka-text
            code="titre-text"
            :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
            <span v-html="t('blog.container1.container.container2.titreText.value', `Experiences`)" />
          </ka-text>
          <!-- Container -->
          <ka-container
            code="container-3"
            :options="{
              click: page.container3Click,
              $state: { selected: page.$data.blogSelector === `Kapix` }
            }"
            inner>
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
              value="https://ucarecdn.com/0fb6aa0d-1f91-495c-b638-138e31e25973/" />
            <ka-text code="description">
              <span v-html="t('blog.container1.container.container2.container3.description.value', `Stage de 1 mois  en temps que ingenieur cyber securite, gestion infrastructure reseau et DevOps`)" />
            </ka-text>
            <ka-icon
              code="fleche"
              value="i-fa-solid:arrow-right" />
          </ka-container>
          <ka-separator code="separator" />
        </ka-container>
        <!-- Container 3 -->
        <ka-container
          code="container-3-container"
          :options="{
            hidden: $first([
              page.$data.blogSelector === `Rien` ? null : undefined,
              page.$data.blogSelector === `Kapix` ? false : undefined,
              null
            ])
          }"
          inner>
          <ka-text
            code="titre-1"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <span v-html="t('blog.container1.container.container3Container.titre1.value', `Rapport`)" />
          </ka-text>
          <!-- Container -->
          <ka-container code="container-4">
            <!-- Container -->
            <ka-container code="container-5">
              <ka-text
                code="sous-titre"
                :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
                <span v-html="t('blog.container1.container.container3Container.container4.container5.sousTitre.value', `Stage chez Kapix - Securité serveur`)" />
              </ka-text>
              <ka-text code="intro">
                <span v-html="t('blog.container1.container.container3Container.container4.container5.intro.value', `Voici mon expérience de stage chez Kapix en tant qu'ingenieur en cybersécurité. Kapix est une entreprise en plein essor spécialisée dans le développement d'un outil de développement No-Code. Mon rôle principal a été de sécuriser les serveurs de l'entreprise pour assurer la protection des données et garantir la confidentialité et l'intégrité des informations.`)" />
              </ka-text>
              <!-- Container -->
              <ka-container
                code="container-6"
                :options="{
                  click: page.container6Click,
                  $state: { selected: page.$data.weekSelector === `1` }
                }"
                :selected="{ click: page.container6ClickWhenSelected }">
                <ka-icon
                  code="icon"
                  :options="{ $inheritState: { selected: true } }"
                  value="i-fa-solid:angle-right" />
                <ka-text code="k-1-ere-semaine">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container6.k1EreSemaine.value', `1ere Semaine`)" />
                </ka-text>
              </ka-container>
              <!-- Container 6 -->
              <ka-container code="container-6-container">
                <ka-text
                  code="description-text"
                  :options="{
                    animationIn: `fadeInDown`,
                    hidden: page.$data.weekSelector === `1` ? false : null
                  }">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container6Container.descriptionText.value', `Au début de mon stage, j'ai été accueilli(e) chaleureusement par l'équipe de Kapix. Durant cette première semaine, j'ai eu l'occasion de me familiariser avec l'infrastructure des serveurs de l'entreprise.<br> <br>Tâches effectuées :<br> <br> - Familiarisation avec l'infrastructure reseau de Kapix.<br> - Recherche de solution de protection adapte a l'infrastructure.<br> - Configuration de mon poste de travail pour l'entreprise.<br> - Installation et configuration d'un nginx sur un serveur test.<br> - Mise en place d'un du backend derriere le reverse proxy.`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container
                code="container-7"
                :options="{
                  click: page.container7Click,
                  $state: { selected: page.$data.weekSelector === `2` }
                }"
                :selected="{ click: page.container7ClickWhenSelected }">
                <ka-icon
                  code="icon-1"
                  :options="{ $inheritState: { selected: true } }"
                  value="i-fa-solid:angle-right" />
                <ka-text code="k-2-eme-semaine">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container7.k2EmeSemaine.value', `2eme Semaine`)" />
                </ka-text>
              </ka-container>
              <!-- Container 7 -->
              <ka-container code="container-7-container">
                <ka-text
                  code="description-1"
                  :options="{
                    animationIn: `fadeInDown`,
                    hidden: page.$data.weekSelector === `2` ? false : null
                  }">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container7Container.description1.value', `Durant la deuxième semaine, j'ai commencé à mettre en place des mesures de sécurité pour renforcer la protection des serveurs de l'entreprise.<br> <br>Tâches effectuées :<br> <br> - Creation d'un Load Balancer sur nginx avec un deuxieme serveur de backend pour equilibrer la charge.<br> - Application d'un service de CORS pour securiser le traffic.<br> - Configuration de nginx pour limiter les attaque DDos.<br> - Simulation d'une attaque DDos.`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container
                code="container-8"
                :options="{
                  click: page.container8Click,
                  $state: { selected: page.$data.weekSelector === `3` }
                }"
                :selected="{ click: page.container8ClickWhenSelected }">
                <ka-icon
                  code="icon-2"
                  :options="{ $inheritState: { selected: true } }"
                  value="i-fa-solid:angle-right" />
                <ka-text code="k-3-eme-semaine">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container8.k3EmeSemaine.value', `3eme Semaine`)" />
                </ka-text>
              </ka-container>
              <!-- Container 7 -->
              <ka-container code="container-71">
                <ka-text
                  code="description-2"
                  :options="{
                    animationIn: `fadeInDown`,
                    hidden: page.$data.weekSelector === `3` ? false : null
                  }">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container71.description2.value', `Au cours de la troisième semaine, j'ai agrandit tout le reseau de test pour pouvoir l'appliquer sur les serveur de staging de Kapix.<br> <br>Tâches effectuées :<br> <br> - Creation de certificat pour passer le serveur en HTTPS.<br> - Mise en place du service GeoIP sur Nginxs de backend modifie une seul et meme base de donnes <br> - Application des regles de securite sur les serveurs de stagings<br> - Renseignement puis mise en place de l'outil Keycloak.<br> - Commencement des recherche sur l'outil Kubernetes.`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container
                code="container-9"
                :options="{
                  click: page.container9Click,
                  $state: { selected: page.$data.weekSelector === `4` }
                }"
                :selected="{ click: page.container9ClickWhenSelected }">
                <ka-icon
                  code="icon-3"
                  :options="{ $inheritState: { selected: true } }"
                  value="i-fa-solid:angle-right" />
                <ka-text code="k-4-eme-semaine">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container9.k4EmeSemaine.value', `4eme Semaine`)" />
                </ka-text>
              </ka-container>
              <!-- Container 7 -->
              <ka-container code="container-72">
                <ka-text
                  code="description-3"
                  :options="{
                    animationIn: `fadeInDown`,
                    hidden: page.$data.weekSelector === `4` ? false : null
                  }">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container72.description3.value', `Au cours de la quatrième semaine, j'ai tester la mise en place de logiciel pour la performance et la securite de l'application.<br> <br>Tâches effectuées :<br> <br> <br> - Mise en place d'un Load Balancer pour la database avec Pgpool-II.<br> - Recherche logiciel d'analyse de vunerabilite de code et infrastructure.<br> - Mise en place d'un cluster Kubernetes et deploiment d'une application pour apprendre et tester l'outil.<br> - Realisation d'une video explicative sur la mise en place et configuration complete d'un nginx sur un serveur web.`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container
                code="container-10"
                :options="{
                  click: page.container10Click,
                  $state: { selected: page.$data.weekSelector === `5` }
                }"
                :selected="{ click: page.container10ClickWhenSelected }">
                <ka-icon
                  code="icon-4"
                  :options="{ $inheritState: { selected: true } }"
                  value="i-fa-solid:angle-right" />
                <ka-text code="k-5-eme-semaine">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container10.k5EmeSemaine.value', `5eme Semaine`)" />
                </ka-text>
              </ka-container>
              <!-- Container 7 -->
              <ka-container code="container-73">
                <ka-text
                  code="description-4"
                  :options="{
                    animationIn: `fadeInDown`,
                    hidden: page.$data.weekSelector === `5` ? false : null
                  }">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container73.description4.value', `Au début de la cinquième semaine, je me suis concentre sur Kubernetes et tester 2 Cloud Provider specialiser dans cet outil : DigitalOcean et Scaleway .<br> <br>Tâches effectuées :<br> <br> - Ecriture d'un tuto complet pour pouvoir refaire toute les installation que j'ai effectue depuis le debut de mon stage.<br> - Apprentissage approfondit de Kubernetes grace a des video et article.<br> - Creation d'un cluster production ready pour comfirmer mes connaisance.<br> - Creation de templates pour le site Kapix`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container
                code="container-11"
                :options="{
                  click: page.container11Click,
                  $state: { selected: page.$data.weekSelector === `6` }
                }"
                :selected="{ click: page.container11ClickWhenSelected }">
                <ka-icon
                  code="icon-5"
                  :options="{ $inheritState: { selected: true } }"
                  value="i-fa-solid:angle-right" />
                <ka-text code="k-6-eme-semaine">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container11.k6EmeSemaine.value', `6eme Semaine`)" />
                </ka-text>
              </ka-container>
              <!-- Container 7 -->
              <ka-container code="container-74">
                <ka-text
                  code="description-5"
                  :options="{
                    animationIn: `fadeInDown`,
                    hidden: page.$data.weekSelector === `6` ? false : null
                  }">
                  <span v-html="t('blog.container1.container.container3Container.container4.container5.container74.description5.value', `Au cours de ma dernière semaine de stage, j'ai préparé un rapport complet sur les mesures de sécurité mises en place et les améliorations apportées aux serveurs et à l'outil No-Code.<br> <br>Tâches effectuées :<br> <br> - Rédaction d'un rapport détaillé sur les actions entreprises en matière de cybersécurité.<br> - Présentation orale devant l'équipe de direction pour partager les résultats et les recommandations.<br> - Remise du rapport aux responsables de l'entreprise pour une éventuelle mise en œuvre des recommandations.`)" />
                </ka-text>
              </ka-container>
              <ka-text
                code="sous-titre-text"
                :options="{ style: { fontFamily: appData.theme.fontFamily2 } }">
                <span v-html="t('blog.container1.container.container3Container.container4.container5.sousTitreText.value', `Conclusion`)" />
              </ka-text>
              <ka-text code="conclusion">
                <span v-html="t('blog.container1.container.container3Container.container4.container5.conclusion.value', `Ce stage chez Kapix m'a permis de développer des compétences essentielles en matière de cybersécurité des serveurs et de travailler en étroite collaboration avec une équipe de professionnels passionnés. J'ai acquis une compréhension approfondie des enjeux liés à la sécurité des données dans un environnement oriente web. Je suis reconnaissant(e) envers l'entreprise pour cette opportunité et je suis désormais convaincu(e) que la cybersécurité est un domaine dans lequel je souhaite continuer à évoluer professionnellement. Je tiens à remercier toute l'équipe de Kapix pour cette expérience enrichissante et formatrice.`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { generateMeta, syncPageStore } from 'kapix-components-vue3'
import { blog } from './store'
import HautDePage from '~/components/HautDePage/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Blog'
})
provide('$scoped', '--p6')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(blog())
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
