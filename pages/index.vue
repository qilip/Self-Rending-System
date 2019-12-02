<template>
  <div class="text-center">
    <div>
      <h1 class="text-5xl m-4">
        Self Rending System
      </h1>
      <h2 class="text-3xl m-4">
        물품 대여 시스템
      </h2>
      <div class="flex justify-center items-center mx-auto">
        <nuxt-link to="/rending">
          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-8">
            <img class="w-full" src="/image/rend.jpg" alt="Rending goods">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                대여
              </div>
              <p class="text-gray-700 text-base">
                원하는 물품을 대여할 수 있습니다.
              </p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/returning">
          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-8">
            <img class="w-full" src="/image/return.jpg" alt="Rending goods">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                반납
              </div>
              <p class="text-gray-700 text-base">
                사용한 물품을 반납할 수 있습니다.
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="flex max-w-4xl justify-center items-center mx-auto">
        <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-8">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              보증금 충전
            </div>
          </div>
        </div>
        <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-8">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              보증금 반납
            </div>
          </div>
        </div>
        <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-8">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              관리자 메뉴
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  methods: {
    /*
    async hello () {
      const r = await this.$axios.get('/api')
      alert(r.data)
    }
    */
  }
}
</script>

<style>

</style>
