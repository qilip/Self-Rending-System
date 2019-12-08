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
        <menu-block class="mb-6">
          <menu-item-heading>
            학번 입력
            <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal inline-block">⚠ 데모용</span>
          </menu-item-heading>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemInput v-model="customerID" name="학번" placeholder="student id" />
          <hr>
          <MenuItemButton v-on:click.native="customerLookup()" name="조회" />
        </menu-block>

        <div class="shadow rounded overflow-hidden">
          <h2 class="px-4 py-2 text-xl font-semibold">
            물품 목록
            <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal inline-block">⚠ 데모용</span>
          </h2>
          <hr>
          <select v-model="selectedItemIndex" name="item-to-rent" size="6" class="w-full block">
            <option v-for="(item, index) in items" v-bind:value="index" class="px-4 py-2">
              {{ itemDescriptions.find(desc => desc.id == item.itemId).name }},
              {{ itemDescriptions.find(desc => desc.id == item.itemId).price }} 원,
              {{ item.status }},
              시리얼 번호: {{ item.serialNumber }}
            </option>
          </select>
          <hr>
          <button
            v-on:click="addItem(items[selectedItemIndex])"
            class="bg-gray-200 hover:bg-gray-400 p-2 w-full block"
          >
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
          <input v-model="serialNumber" placeholder="시리얼 번호" class="px-4 py-2 w-full">
          <button v-on:click="addSerialNumber(serialNumber)" class="bg-gray-200 w-full p-2 hover:bg-gray-400 block">
            입력
          </button>
        </div>
      </div>

      <div class="p-4 w-full lg:w-1/3">
        <div class="shadow rounded overflow-hidden">
          <h2 class="px-4 py-2 font-semibold text-xl">
            대여 대기 목록
          </h2>
          <template v-for="(item, index) in addedItems">
            <hr>
            <div class="flex items-stretch">
              <div class="px-4 py-2 flex-1">
                {{ itemDescriptions.find(desc => desc.id == item.itemId).name }}
              </div>
              <div class="px-4 py-2 shadow-inner bg-gray-100">
                {{ item.serialNumber }}
              </div>
              <div class="shadow-inner px-4 py-2 bg-gray-100 flex-auto text-right">
                {{ itemDescriptions.find(desc => desc.id == item.itemId).price }} 원
              </div>
              <button
                v-on:click="deleteItem(index)"
                class="bg-red-300 px-4 py-2 hover:bg-red-400 block"
              >
                제거
              </button>
            </div>
          </template>
          <hr>
          <MenuItemSpacer />
          <hr>
          <div class="flex items-stretch">
            <h2 class="px-4 py-2 text-xl font-semibold flex-1">
              현재 보증금
            </h2>
            <div class="shadow-inner bg-gray-100 text-right px-4 py-2 flex-1">
              {{ numberWithCommas(currentCredit) }} 원
            </div>
          </div>
          <hr>
          <div class="flex items-stretch">
            <h2 class="px-4 py-2 text-xl font-semibold flex-1">
              총 합
            </h2>
            <div class="shadow-inner bg-gray-100 text-right px-4 py-2 flex-1">
              {{ numberWithCommas(priceSum) }} 원
            </div>
          </div>
          <hr>
          <div class="flex items-stretch">
            <h2 class="px-4 py-2 text-xl font-semibold flex-1">
              대여 후 보증금 잔액
            </h2>
            <div
              v-bind:class="{ 'bg-red-200': resultCredit < 0 }"
              class="shadow-inner bg-gray-100 text-right px-4 py-2 flex-1"
            >
              {{ numberWithCommas(resultCredit) }} 원
            </div>
          </div>
          <hr>
          <button
            v-on:click="requestRental()"
            class="bg-blue-200 hover:bg-blue-400 p-2 w-full block flex-1"
          >
            대여 요청하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBlock from '../components/MenuBlock.vue'
import MenuItemHeading from '../components/MenuItemHeading.vue'
import MenuItemInput from '../components/MenuItemInput.vue'
import MenuItemButton from '../components/MenuItemButton.vue'
import MenuItemSpacer from '../components/MenuItemSpacer.vue'

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default {
  components: {
    MenuBlock,
    MenuItemHeading,
    MenuItemInput,
    MenuItemButton,
    MenuItemSpacer
  },
  data () {
    return {
      selectedItemIndex: 0,
      serialNumber: 0,

      customerID: '',
      addedItems: [],

      currentCredit: 0,
      priceSum: 0,
      resultCredit: 0
    }
  },
  watch: {
    currentCredit (val) {
      this.resultCredit = this.currentCredit - this.priceSum
    },
    priceSum (val) {
      this.resultCredit = this.currentCredit - this.priceSum
    },
    addedItems (val) {
      this.priceSum = this.addedItems
        .map(item => this.itemDescriptions.find(desc => desc.id === item.itemId).price)
        .reduce((accum, value) => accum + value, 0)
    }
  },
  async asyncData ({ params, $axios }) {
    const items = await $axios.$get(`/api/items`)
    const itemDescriptions = await $axios.$get('/api/items/descriptions')
    return {
      items,
      itemDescriptions
    }
  },
  methods: {
    numberWithCommas,
    customerLookup () {
      this.$axios.get('/api/customers/' + this.customerID).then((res) => {
        this.currentCredit = res.data.credit
      }).catch((err) => {
        alert('해당하는 학생이 없습니다.' + err)
      })
    },
    addItem (item) {
      if (!item) {
        return
      }
      if (this.addedItems.find(i => i === item)) {
        alert('이미 선택된 물품입니다.')
        return
      }
      if (item.status !== 'available') {
        alert('대여 불가능한 물품입니다.')
        return
      }
      this.addedItems.push(item)
    },
    addSerialNumber (serialNumber) {
      if (!serialNumber) {
        return
      }
      const result = this.items.find(item => item.serialNumber === Number(serialNumber))
      this.addItem(result)
    },
    deleteItem (index) {
      this.addedItems.splice(index, 1)
    },
    requestRental () {
      if (!this.customerID) {
        alert('학번을 입력해 주세요.')
        return
      }
      if (this.resultCredit < 0) {
        alert('보증금이 부족합니다.')
        return
      }

      this.$axios.post('/api/rent', {
        customerID: this.customerID,
        serialNumbers: this.addedItems.map(item => item.serialNumber)
      }).then((res) => {
        alert('success')
        this.$router.push({
          path: '/'
        })
      }).catch((err) => {
        alert(err)
      })
    }
  }
}
</script>

<style>
</style>
