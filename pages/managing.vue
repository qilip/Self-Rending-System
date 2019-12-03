<template>
  <div>
    <div class="flex flex-row bg-blue-200 border-b border-blue-400">
      <h2 class="mx-8 self-center font-bold">
        매니저 메뉴
      </h2>
      <ul class="flex flex-row items-stretch">
        <li class="-mb-px mx-1 mt-2 border-l border-r border-t rounded-t border-blue-400 bg-white">
          <nuxt-link to="">
            <h2 class="px-4 py-2 font-semibold">품목 관리</h2>
          </nuxt-link>
        </li>
        <li class="mx-1 mt-2">
          <nuxt-link to="">
            <h2 class="px-4 py-2 font-semibold">사용자 관리</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="flex flex-row">
      <div class="shadow-lg rounded m-6 overflow-hidden">
        <nuxt-link to="">
          <img src="../static/image/rend.jpg"/>
          <div class="text-xl font-semibold p-4 text-center">
            품목 관리
          </div>
        </nuxt-link>
      </div>

      <div class="shadow-lg rounded m-6 overflow-hidden">
        <nuxt-link to="">
          <img src="../static/image/rend.jpg"/>
          <div class="text-xl font-semibold p-4 text-center">
            사용자 관리
          </div>
        </nuxt-link>
      </div>

      <div class="shadow-lg rounded m-6 overflow-hidden">
        <nuxt-link to="">
          <img src="../static/image/rend.jpg"/>
          <div class="text-xl font-semibold p-4 text-center">
            정책 관리
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
