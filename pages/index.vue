<template>
  <div class="flex flex-col h-screen">
    <div class="flex-initial text-left h-32">
      <h1 class="font-bold text-5xl ml-8 mt-4">
        환영합니다
      </h1>
      <h2 class="text-3xl ml-8">
        원하는 메뉴를 선택해주세요
      </h2>
    </div>

    <div class="flex-1 justify-center item-center overflow-auto">
      <div class="flex self-center text-center justify-center items-center mx-auto">
        <div class="flex-1 self-center max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl m-4">
          <nuxt-link to="/rentAuth">
            <img class="w-full" src="/image/rend.jpg" alt="Rending goods">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                대여
              </div>
              <p class="text-gray-700 text-base">
                원하는 물품을 대여할 수 있습니다.
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="flex-1 self-center max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl m-4">
          <nuxt-link to="/returning">
            <img class="w-full" src="/image/return.jpg" alt="Rending goods">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                반납
              </div>
              <p class="text-gray-700 text-base">
                사용한 물품을 반납할 수 있습니다.
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="flex-col self-center max-w-sm w-full">
          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl m-4">
            <nuxt-link to="/payment">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  보증금 충전
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl m-4">
            <nuxt-link to="refunding">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  보증금 반납
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl m-4">
            <nuxt-link to="managing">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  관리자 메뉴
                </div>
              </div>
            </nuxt-link>
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
