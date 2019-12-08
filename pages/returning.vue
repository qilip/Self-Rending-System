<template>
  <div>
    <div>
      <h1 class="text-left font-bold text-5xl ml-8 mt-4">
        반납
      </h1>
    </div>
    <div class="flex flex-wrap p-4 p-8 mx-auto">
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
        <menu-block class="my-6">
          <menu-item-heading>
            대여한 물품
            <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal">⚠ 데모용</span>
          </menu-item-heading>
          <template v-for="item in items" v-if="item.customerId == customerID && item.status =='rented'">
            <hr>
            <MenuItemSpacer />
            <hr>
            <MenuItemValue v-bind:value="findDescription(item).name" name="이름" />
            <hr>
            <MenuItemValue v-bind:value="item.serialNumber" name="시리얼 번호" />
            <hr>
            <MenuItemValue v-bind:value="findDescription(item).price + ' 원'" name="대여 보증금" />
          </template>
        </menu-block>
      </div>

      <div class="p-4 w-full lg:w-1/3">
        <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded my-6">
          <p class="font-bold">
            물품에 있는 바코드를 인식시켜주세요!
          </p>
          <p class="block sm:inline">
            인식이 불가능할 경우 아래 직접 입력란에 바코드와 같이 있는 코드를 입력해 주세요.
          </p>
        </div>
        <menu-block class="my-6">
          <menu-item-heading>
            항목 입력
            <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal">⚠ 데모용</span>
          </menu-item-heading>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemInput v-model="serialNumber" name="시리얼 번호" placeholder="serial number" />
          <hr>
          <MenuItemButton v-on:click.native="addSerialNumber(serialNumber)" name="입력" />
        </menu-block>
      </div>

      <div class="p-4 w-full lg:w-1/3">
        <menu-block class="my-6">
          <menu-item-heading>
            반납 목록
          </menu-item-heading>
          <template v-if="addedItems.length">
            <hr>
            <MenuItemSpacer />
          </template>
          <template v-for="item in addedItems">
            <hr>
            <MenuItemValue
              v-bind:name="findDescription(item).name"
              v-bind:value="findDescription(item).price + ' 원'"
            />
          </template>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemValue v-bind:value="priceSum + ' 원'" name="반환 될 보증금" />
          <hr>
          <MenuItemButton v-on:click.native="requestReturn()" name="반납하기" />
        </menu-block>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBlock from '../components/MenuBlock.vue'
import MenuItemValue from '../components/MenuItemValue.vue'
import MenuItemHeading from '../components/MenuItemHeading.vue'
import MenuItemSpacer from '../components/MenuItemSpacer.vue'
import MenuItemInput from '../components/MenuItemInput.vue'
import MenuItemButton from '../components/MenuItemButton.vue'

export default {
  components: {
    MenuBlock,
    MenuItemValue,
    MenuItemHeading,
    MenuItemSpacer,
    MenuItemInput,
    MenuItemButton
  },
  data () {
    return {
      serialNumber: 0,

      customerID: '',
      addedItems: [],

      priceSum: 0
    }
  },
  watch: {
    addedItems () {
      this.priceSum = this.addedItems
        .map(item => this.findDescription(item).price)
        .reduce((accum, value) => accum + value)
    }
  },
  async asyncData ({ $axios }) {
    const items = await $axios.$get('/api/items')
    const itemDescriptions = await $axios.$get('/api/items/descriptions')
    return {
      items,
      itemDescriptions
    }
  },
  methods: {
    customerLookup () {
      this.$axios.get('/api/customers/' + this.customerID).then((res) => {
        this.currentCredit = res.data.credit
      }).catch((err) => {
        alert('해당하는 학생이 없습니다.' + err)
      })
    },
    findDescription (item) {
      return this.itemDescriptions.find(desc => desc.id === item.itemId)
    },
    addSerialNumber (serialNumber) {
      if (!serialNumber) {
        return
      }

      this.$axios.get('/api/items/' + serialNumber).then((res) => {
        this.addItem(res.data)
      }).catch((err) => {
        alert('해당하는 물품이 없습니다.' + err)
      })
    },
    addItem (item) {
      if (item.status === 'pending') {
        alert('반납 처리가 진행중인 물품입니다.')
        return
      }
      if (item.status !== 'rented') {
        alert('빌린 물품이 아닙니다.')
        return
      }
      if (this.addedItems.find(i => i.serialNumber === item.serialNumber)) {
        alert('이미 해당 항목이 있습니다.')
        return
      }

      this.addedItems.push(item)
    },
    requestReturn () {
      this.$axios.post('/api/return', {
        serialNumbers: this.addedItems.map(item => item.serialNumber)
      }).then((res) => {
        alert('반납되었습니다.')
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
