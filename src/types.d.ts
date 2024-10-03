import type * as DOMPurify from 'isomorphic-dompurify'

interface Profiles {
  [key: string]: DOMPurify.Config
}

export interface ModuleOptions {
  profiles?: Profiles
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    dompurify: {
      profiles: Profiles
    }
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
