<template>
  <div class="p-8 mx-auto max-w-xl">
    <div>
      <h1 class="text-4xl font-semibold my-6">
        반납
      </h1>
    </div>

    <menu-block class="my-6">
      <menu-item-heading>
        물품 목록
        <span class="mx-2 rounded p-2 bg-red-600 text-white text-sm font-normal">⚠ 데모용</span>
      </menu-item-heading>
      <template v-for="item in items">
        <hr>
        <MenuItemSpacer />
        <hr>
        <MenuItemValue name="시리얼 번호" v-bind:value="item.serialNumber" />
        <hr>
        <MenuItemValue name="상태" v-bind:value="item.status" />
        <hr>
        <MenuItemValue name="이름" v-bind:value="findDescription(item).name" />
        <hr>
        <MenuItemValue name="가격" v-bind:value="findDescription(item).price + ' 원'" />
      </template>
    </menu-block>

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
      <MenuItemValue name="반환 될 보증금" v-bind:value="priceSum + ' 원'" />
      <hr>
      <MenuItemButton v-on:click.native="requestReturn()" name="반납하기" />
    </menu-block>
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

      addedItems: [],

      priceSum: 0
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
  watch: {
    addedItems () {
      this.priceSum = this.addedItems
        .map(item => this.findDescription(item).price)
        .reduce((accum, value) => accum + value)
    }
  },
  methods: {
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
        alert('해당하는 물품이 없습니다.')
        console.log(err)
      })
    },
    addItem (item) {
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
      // TODO
    }
  }
}
</script>

<style>

</style>
