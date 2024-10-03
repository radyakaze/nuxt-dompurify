// I dont know why but this is needed to make the types work
// can't do "import type { Config } from 'dompurify'" because it doesn't work
interface Config {
  ADD_ATTR?: string[] | undefined
  ADD_DATA_URI_TAGS?: string[] | undefined
  ADD_TAGS?: string[] | undefined
  ADD_URI_SAFE_ATTR?: string[] | undefined
  ALLOW_ARIA_ATTR?: boolean | undefined
  ALLOW_DATA_ATTR?: boolean | undefined
  ALLOW_UNKNOWN_PROTOCOLS?: boolean | undefined
  ALLOW_SELF_CLOSE_IN_ATTR?: boolean | undefined
  ALLOWED_ATTR?: string[] | undefined
  ALLOWED_TAGS?: string[] | undefined
  ALLOWED_NAMESPACES?: string[] | undefined
  ALLOWED_URI_REGEXP?: RegExp | undefined
  FORBID_ATTR?: string[] | undefined
  FORBID_CONTENTS?: string[] | undefined
  FORBID_TAGS?: string[] | undefined
  FORCE_BODY?: boolean | undefined
  IN_PLACE?: boolean | undefined
  KEEP_CONTENT?: boolean | undefined
  /**
   * change the default namespace from HTML to something different
   */
  NAMESPACE?: string | undefined
  PARSER_MEDIA_TYPE?: string | undefined
  RETURN_DOM_FRAGMENT?: boolean | undefined
  /**
   * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
   * might cause XSS from attacks hidden in closed shadowroots in case the browser
   * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
   */
  RETURN_DOM_IMPORT?: boolean | undefined
  RETURN_DOM?: boolean | undefined
  RETURN_TRUSTED_TYPE?: boolean | undefined
  SAFE_FOR_TEMPLATES?: boolean | undefined
  SANITIZE_DOM?: boolean | undefined
  /** @default false */
  SANITIZE_NAMED_PROPS?: boolean | undefined
  USE_PROFILES?:
    | false
    | {
      mathMl?: boolean | undefined
      svg?: boolean | undefined
      svgFilters?: boolean | undefined
      html?: boolean | undefined
    }
    | undefined
  WHOLE_DOCUMENT?: boolean | undefined
  CUSTOM_ELEMENT_HANDLING?: {
    tagNameCheck?: RegExp | ((tagName: string) => boolean) | null | undefined
    attributeNameCheck?: RegExp | ((lcName: string) => boolean) | null | undefined
    allowCustomizedBuiltInElements?: boolean | undefined
  }
}

interface Profiles {
  [key: string]: Config
}

export interface ModuleOptions {
  profiles?: Profiles
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    dompurify: {
      profiles?: Profiles
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
