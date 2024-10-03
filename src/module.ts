import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@radya/nuxt-dompurify',
    configKey: 'dompurify',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if (options.profiles) {
      nuxt.options.runtimeConfig.public.dompurify = {
        profiles: options.profiles,
      }
    }

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
