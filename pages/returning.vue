<template>
  <div class="p-8 mx-auto max-w-xl">
    <div>
      <h1 class="text-4xl font-semibold my-6">
        반납
      </h1>
    </div>

    <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded my-6">
      <p class="font-bold">
        물품에 있는 바코드를 인식시켜주세요!
      </p>
      <p class="block sm:inline">
        인식이 불가능할 경우 아래 직접 입력란에 바코드와 같이 있는 코드를 입력해 주세요.
      </p>
    </div>

    <div class="shadow rounded my-6 overflow-hidden">
      <h2 class="px-4 py-2 font-semibold text-xl">
        항목 입력
        <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal">⚠ 데모용</span>
      </h2>
      <hr>
      <input placeholder="시리얼 번호" class="px-4 py-2 shadow-inner w-full">
      <hr>
      <button class="px-4 py-2 w-full bg-gray-200 hover:bg-gray-400">
        입력
      </button>
    </div>

    <div class="shadow rounded my-6">
      <h2 class="px-4 py-2 font-semibold text-xl">
        반납 목록
      </h2>
      <hr>
      <template v-for="(item, index) in returned_items">
        <div class="flex flex-row">
          <div class="px-4 py-2 flex-1">
            {{ item.name }}
          </div>
          <div class="px-4 py-2 text-right flex-1 bg-gray-100 shadow-inner">
            {{ item.price }} 원
          </div>
        </div>
        <hr v-if="index != returned_items.length - 1">
      </template>
      <hr>
      <hr class="h-2 shadow-inner">
      <hr>
      <div class="flex flex-row">
        <h2 class="px-4 py-2 text-xl font-semibold flex-1">
          총 합
        </h2>
        <div class="px-4 py-2 text-right bg-gray-100 text-right flex-1 shadow-inner">
          3,000 원
        </div>
      </div>
    </div>

    <div class="shadow rounded my-6 overflow-hidden">
      <div class="flex flex-row">
        <h2 class="px-4 py-2 font-semibold text-xl flex-1">
          현재 보증금
        </h2>
        <div class="bg-gray-100 shadow-inner px-4 py-2 flex-1 text-right">
          {{ current_credit }} 원
        </div>
      </div>
      <hr>
      <button class="w-full px-4 py-2 bg-blue-200 hover:bg-blue-400">
        완료
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current_credit: 10000,
      returned_items: [
        {
          name: '계산기',
          price: 1000
        },
        {
          name: '장우산',
          price: 2000
        }
      ]
    }
  }
}
</script>

<style>

</style>
