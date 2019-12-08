<template>
  <div class="flex flex-col h-screen p-8 max-w-xl mx-auto">
    <div class="flex-initial text-left h-32 mb-6">
      <h1 class="font-bold text-5xl ml-8 mt-4">
        대여 로그인
      </h1>
      <h2 class="text-3xl ml-8">
        대여를 위해서는 로그인이 필요합니다
      </h2>
    </div>
    <div>
      <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6 max-w-lg">
        <p class="font-bold">
          학생증을 인식시켜주세요!
        </p>
        <p class="block sm:inline">
          인식이 불가능할 경우 아래 직접 입력란에 학번을 입력해 주세요.
        </p>
      </div>
      <div class="my-6 shadow rounded max-w-lg">
        <h2 class="font-semibold px-4 py-2 text-xl">
          학번 입력
        </h2>
        <input placeholder="학번" class="px-4 py-2 shadow-inner w-full">
      </div>
      <nuxt-link to="rending" class="no-underline">
        <button class="shadow rounded bg-blue-200 hover:bg-blue-400 p-2 w-full my-6 block max-w-lg">
          로그인
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
