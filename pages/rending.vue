<template>
  <div class="flex-1 p-4">
    <h1 class="text-4xl my-6 font-bold max-w-lg">
      대여
    </h1>

    <div class="my-6 shadow rounded overflow-hidden max-w-lg">
      <h2 class="px-4 py-2 text-xl font-semibold">
        물품 입력
        <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal">⚠ 데모용</span>
      </h2>
      <hr>
      <input placeholder="시리얼 번호" class="px-4 py-2 w-full">
      <button class="bg-gray-200 w-full p-2 hover:bg-gray-400 block">
        입력
      </button>
    </div>

    <div class="my-6 shadow rounded overflow-hidden max-w-lg">
      <h2 class="px-4 py-2 text-xl font-semibold">
        물품 목록
        <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal">⚠ 데모용</span>
      </h2>
      <hr>
      <select name="item-to-rent" size="4" class="w-full block">
        <option v-for="item in items" v-bind:value="item.id" class="px-4 py-2">
          {{ item.name }}, 보증금 {{ numberWithCommas(item.credit) }} 원
        </option>
      </select>
      <hr>
      <button class="bg-gray-200 hover:bg-gray-400 p-2 w-full block">
        추가
      </button>
    </div>

    <div class="my-6 shadow rounded overflow-hidden max-w-lg">
      <h2 class="px-4 py-2 font-semibold text-xl">
        대여 대기 목록
      </h2>
      <hr v-if="added_items.length">
      <template v-for="(item, index) in added_items">
        <div class="flex items-stretch">
          <div class="px-4 py-2 flex-1">
            {{ item.name }}
          </div>
          <div class="shadow-inner px-4 py-2 bg-gray-100 flex-auto text-right">
            {{ numberWithCommas(item.credit) }} 원
          </div>
          <button class="bg-red-300 px-4 py-2 hover:bg-red-400 block">
            제거
          </button>
        </div>
        <hr v-if="index != added_items.length - 1">
      </template>
    </div>

    <div class="my-6 shadow rounded overflow-hidden max-w-lg">
      <div class="flex items-stretch">
        <h2 class="px-4 py-2 text-xl font-semibold flex-1">
          현재 보증금
        </h2>
        <div class="shadow-inner bg-gray-100 text-right px-4 py-2 flex-1">
          {{ numberWithCommas(current_credit) }} 원
        </div>
      </div>
      <hr>
      <div class="flex items-stretch">
        <h2 class="px-4 py-2 text-xl font-semibold flex-1">
          총 합
        </h2>
        <div class="shadow-inner bg-gray-100 text-right px-4 py-2 flex-1">
          {{ numberWithCommas(8000) }} 원
        </div>
      </div>
      <hr>
      <div class="flex items-stretch">
        <h2 class="px-4 py-2 text-xl font-semibold flex-1">
          대여 후 보증금 잔액
        </h2>
        <div class="shadow-inner bg-gray-100 text-right px-4 py-2 flex-1">
          {{ numberWithCommas(2000) }} 원
        </div>
      </div>
    </div>

    <button class="shadow rounded bg-blue-200 hover:bg-blue-400 p-2 w-full my-6 block max-w-lg">
      대여 요청하기
    </button>
  </div>
</template>

<script>
function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default {
  data () {
    return {
      current_credit: 10000,
      items: [
        {
          id: 0,
          name: '장우산',
          credit: 2000
        },
        {
          id: 1,
          name: '계산기',
          credit: 3000
        },
        {
          id: 2,
          name: '단우산',
          credit: 1000
        },
        {
          id: 3,
          name: '돗자리',
          credit: 2000
        },
        {
          id: 4,
          name: '행사용 텐트',
          credit: 10000
        }
      ],
      added_items: [
        {
          id: 0,
          name: '장우산',
          credit: 2000
        },
        {
          id: 1,
          name: '계산기',
          credit: 3000
        },
        {
          id: 1,
          name: '계산기',
          credit: 3000
        }
      ]
    }
  },
  methods: {
    numberWithCommas
  }
}
</script>

<style>
h1, h2, h3, h4 {
  font-family: 'NanumSquare', sans-serif;
}
</style>
