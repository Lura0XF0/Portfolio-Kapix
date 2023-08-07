import type { ViteSSGContext } from 'kapix-vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface SeoPageProps {
  seo?: boolean
}

