# Nuxt DOMPurify

A Nuxt 3 module that integrates DOMPurify for sanitizing HTML content. This module helps protect your application from XSS attacks by sanitizing any potentially dangerous HTML inputs.

## Installation

Install the module via Yarn:

```bash
yarn add -D @radya/nuxt-dompurify
```

## Usage

Add the module to your Nuxt config file:

```javascript
export default defineNuxtConfig({
  modules: ['@radya/nuxt-dompurify'],
})
```

### Example

You can use the directive `v-sanitize-html` to sanitize HTML content in your templates:

```vue
<template>
  <div v-sanitize-html="dirtyHtml" />
</template>

<script setup>
const dirtyHtml = `
<div>
  <h1>Welcome to My Website</h1>
  <h3>This is H3 heading</h3>
  <p>This is a <strong>simple</strong> paragraph.</p>
  <img src="image.jpg" onerror="alert('Hacked!')" />
  <a href="https://example.com" onclick="stealCookies()">Click me!</a>
  <script>alert('This is an XSS attack!')</` + `script>
</div>`
</script>
```

This will sanitize the `unsafe_html` variable, ensuring it is safe to render in the DOM.

## Profiles

This module also supports **profiles** to allow different DOMPurify configurations for specific use cases. You can define profiles in your `nuxt.config.ts` like this:

```ts
export default defineNuxtConfig({
  modules: ['@radya/nuxt-dompurify'],
  dompurify: {
    profiles: {
      profileName: {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      }
    }
  },
})
```

### Using Profiles

To use a specific profile, you can pass the profile name as an argument to the `v-sanitize-html` directive:

```vue
<template>
  <div v-sanitize-html:profileName="dirtyHTML" />
</template>

<script setup>
const dirtyHtml = `
<div>
  <h1>Welcome to My Website</h1>
  <h3>This is H3 heading</h3>
  <p>This is a <strong>simple</strong> paragraph.</p>
  <img src="image.jpg" onerror="alert('Hacked!')" />
  <a href="https://example.com" onclick="stealCookies()">Click me!</a>
  <script>alert('This is an XSS attack!')</` + `script>
</div>`
</script>
```

## Contributing

We welcome contributions to `Nuxt DOMPurify`. Please follow these steps to get started:

1. **Enable Corepack**: Ensure Corepack is enabled by running:
   ```bash
   corepack enable
   ```

2. **Install Dependencies**: Install all necessary dependencies by running:
   ```bash
   yarn install
   ```

3. **Generate Type Stubs**: Run the following command to generate type stubs:
   ```bash
   yarn dev:prepare
   ```

4. **Start Development Mode**: Use the following command to start the playground in development mode:
   ```bash
   yarn dev
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
