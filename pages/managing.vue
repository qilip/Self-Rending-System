<template>
  <div>
    <hr>
    <div class="flex flex-row shadow">
      <div class="bg-white flex px-8 py-2">
        <h2 class="self-center font-semibold text-xl">
          매니저 메뉴
        </h2>
      </div>
      <ul class="flex-1 flex flex-row items-stretch bg-gray-100">
        <li class="bg-gray-200 flex items-center shadow-inner">
          <h2 class="px-4 py-2 font-semibold">
            <nuxt-link to="">
              품목 관리
            </nuxt-link>
          </h2>
        </li>
        <li class="flex items-center">
          <h2 class="px-4 py-2 font-semibold">
            <nuxt-link to="">
              사용자 관리
            </nuxt-link>
          </h2>
        </li>
        <li class="flex items-center">
          <h2 class="px-4 py-2 font-semibold">
            <nuxt-link to="">
              정책 관리
            </nuxt-link>
          </h2>
        </li>
      </ul>
    </div>

    <div class="flex flex-row">
      test
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
