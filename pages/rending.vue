<template>
  <div>
    <div>
      <h1 class="text-left font-bold text-5xl ml-8 mt-4">
        대여
      </h1>
      <h2 class="text-left text-3xl ml-8 mb-8">
        물품 선택
      </h2>
    </div>
    <div class="flex flex-wrap p-4">
      <div class="p-4 w-full lg:w-1/3">
        <div class="shadow rounded overflow-hidden">
          <h2 class="px-4 py-2 text-xl font-semibold">
            물품 목록
            <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal inline-block">⚠ 데모용</span>
          </h2>
          <hr>
          <select name="item-to-rent" size="6" class="w-full block">
            <option v-for="item in items" v-bind:value="item.id" class="px-4 py-2">
              {{ item.name }}, 보증금 {{ numberWithCommas(item.price) }} 원
            </option>
          </select>
          <hr>
          <button class="bg-gray-200 hover:bg-gray-400 p-2 w-full block">
            추가
          </button>
        </div>
      </div>

      <div class="p-4 w-full lg:w-1/3">
        <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-8">
          <p class="font-bold">
            물품에 있는 바코드를 인식시켜주세요!
          </p>
          <p class="block sm:inline">
            인식이 불가능할 경우 아래 직접 입력란에 바코드와 같이 있는 코드를 입력해 주세요.
          </p>
        </div>
        <div class="shadow rounded overflow-hidden">
          <h2 class="px-4 py-2 text-xl font-semibold">
            물품 코드 직접 입력
            <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal inline-block">⚠ 데모용</span>
          </h2>
          <hr>
          <input placeholder="시리얼 번호" class="px-4 py-2 w-full">
          <button class="bg-gray-200 w-full p-2 hover:bg-gray-400 block">
            입력
          </button>
        </div>
      </div>

      <div class="p-4 w-full lg:w-1/3">
        <div class="shadow rounded overflow-hidden">
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
                {{ numberWithCommas(item.price) }} 원
              </div>
              <button class="bg-red-300 px-4 py-2 hover:bg-red-400 block">
                제거
              </button>
            </div>
            <hr v-if="index != added_items.length - 1">
          </template>
          <hr>
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

          <button class="bg-blue-200 hover:bg-blue-400 p-2 w-full block flex-1">
            대여 요청하기
          </button>
        </div>
      </div>
    </div>
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
      items: [],
      added_items: [
        {
          id: 0,
          name: '장우산',
          price: 2000
        },
        {
          id: 1,
          name: '계산기',
          price: 3000
        },
        {
          id: 1,
          name: '계산기',
          price: 3000
        }
      ]
    }
  },
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.$get(`/api/items/descriptions`)
    return {
      items: data
    }
  },
  methods: {
    numberWithCommas
  }
}
</script>

<style>
</style>
