import type { DirectiveBinding } from 'vue'
import DOMPurify from 'dompurify'
import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(async ({ vueApp }) => {
  const { public: { dompurify: { profiles } } } = useRuntimeConfig()

  let purify: DOMPurify.DOMPurifyI

  if (import.meta.server) {
    const { JSDOM } = await import('jsdom')
    purify = DOMPurify(new JSDOM('').window)
  }
  else {
    purify = DOMPurify(window)
  }

  function sanitizeHtml(binding: DirectiveBinding) {
    if (binding.arg && profiles[binding.arg]) {
      return purify.sanitize(binding.value, profiles[binding.arg])
    }

    return purify.sanitize(binding.value)
  }

  vueApp.directive('sanitize-html', {
    created(el, binding) {
      el.innerHTML = sanitizeHtml(binding)
    },
    getSSRProps(binding) {
      return {
        innerHTML: sanitizeHtml(binding),
      }
    },
  })
})
