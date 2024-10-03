import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { JSDOM } from 'jsdom'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/profiles', import.meta.url)),
  })

  it('should purify html', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html: string = await $fetch('/')

    const dom = new JSDOM(html)

    expect(dom.window.document.getElementById('test')?.innerHTML).toMatchSnapshot()
  })

  it('should purify html with heading profile that does not exist', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html: string = await $fetch('/heading')

    const dom = new JSDOM(html)

    expect(dom.window.document.getElementById('test')?.innerHTML).toMatchSnapshot()
  })
})
