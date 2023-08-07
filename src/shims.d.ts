declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type Nullable<T> = T | null | undefined
declare type KeyValuePair<V = any> = {
  [key: string]: V
}
declare type KeyPair = KeyValuePair<string>
declare type PartialEntity<T> = Nullable<Partial<T>>
declare type PartialEntities<T> = Nullable<Array<Partial<T>>>
declare type TwitterCard = 'summary' | 'summary_large_image' | 'app' | 'player'

declare namespace Kapix {

  declare type IGradientColor = string | { Angle?: number; Colors: string[] }

  declare type ListData<T = any> = {
    items?: Nullable<Array<T>>
    scrollTop?: Nullable<number>
    scrollLeft?: Nullable<number>
    loading?: Nullable<boolean>
    quickSearch?: Nullable<string>
    total: number
    addItem?: (item: PartialEntity<T>) => void
    removeItem?: (item: PartialEntity<T>) => boolean
  }

  declare interface IOption {
    value: Nullable<string>
    label: Nullable<string>
  }

  declare namespace Entity {
    declare interface IUser {
      id: unknown
      email: string
      userName: string
      imageUrl: string
      emailConfirmed: boolean
      state: Nullable<null | `premium` | `blocked` | `banned` | `waiting`>
    }
    declare interface IApplication {
      name: string
      owner: string
      title: string
      icon: string
      version: string
      copyright: string
    }
    declare interface IPage {
      name: string
      title: string
      description: string
      slug: string
      guard: null | `welcome` | undefined | `protected` | `home` | `403` | undefined | `login` | `404`
    }
    declare interface IOption {
      Id: number
      label: string
      value: string
    }
  }
}