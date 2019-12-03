<template>
  <div class="p-8 w-full max-w-lg mx-auto">
    <h1 class="font-bold text-5xl my-6 ml-6">
      보증금 충전
    </h1>

    <div class="my-6 shadow rounded">
      <h2 class="font-semibold text-xl px-4 py-2">
        카드 정보 입력
      </h2>
      <hr>
      <div class="flex">
        <div class="px-4 py-2 flex-1">
          카드 번호
        </div>
        <input placeholder="카드 번호" class="flex-1 bg-gray-100 shadow-inner px-4 py-2">
      </div>
      <hr>
      <div class="flex">
        <div class="px-4 py-2 flex-1">
          만료 날짜
        </div>
        <input placeholder="MM/DD" class="flex-1 bg-gray-100 shadow-inner px-4 py-2">
      </div>
      <hr>
      <div class="flex">
        <div class="px-4 py-2 flex-1">
          CVC
        </div>
        <input placeholder="cvc" class="flex-1 bg-gray-100 shadow-inner px-4 py-2">
      </div>
    </div>

    <div class="shadow rounded my-6">
      <h2 class="font-semibold text-xl px-4 py-2">
        충전 금액
      </h2>
      <hr>
      <input placeholder="금액" class="w-full bg-gray-100 shadow-inner px-4 py-2">
    </div>

    <button class="block shadow rounded my-6 bg-blue-200 w-full px-4 py-2">
      충전 하기
    </button>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
