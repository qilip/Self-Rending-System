<template>
  <div class="max-h-screen flex flex-col">
    <div class="p-4 shadow flex flex-row justify-between items-center">
      <div class="font-bold text-lg flex flex-row items-center">
        <img src="../static/favicon-32x32.png" class="mr-2" />
        <nuxt-link to="/" class="no-underline text-black">
          Self Rending System
        </nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
h1, h2, h3, h4 {
  font-family: 'NanumSquare', sans-serif;
}
</style>
