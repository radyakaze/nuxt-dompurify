<template>
  <div>
    Nuxt module playground!

    <div
      v-sanitize-html="dirtyHtml"
      class="default"
    />

    <div
      v-sanitize-html:heading="dirtyHtml"
      class="heading-only"
    />
  </div>
</template>

<script setup lang="ts">
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
