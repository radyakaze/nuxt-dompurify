import type { Config } from 'dompurify'

interface Profiles {
  [key: string]: Config
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
