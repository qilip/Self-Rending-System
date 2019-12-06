<template>
  <div>
    <hr>
    <div class="flex flex-row shadow">
      <div class="bg-white flex px-8 py-2">
        <h2 class="self-center font-semibold text-xl">
          매니저 메뉴
        </h2>
      </div>
      <ul class="flex-1 flex flex-row items-stretch bg-gray-100 whitespace-no-wrap overflow-x-auto">
        <li
          v-bind:class="{ 'bg-gray-200': currentTab == 0, 'shadow-inner': currentTab == 0 }"
          class="flex items-center"
        >
          <h2 class="px-4 py-2">
            <button v-on:click="currentTab = 0" class="font-semibold">
              품목 관리
            </button>
          </h2>
        </li>
        <li
          v-bind:class="{ 'bg-gray-200': currentTab == 1, 'shadow-inner': currentTab == 1 }"
          class="flex items-center"
        >
          <h2 class="px-4 py-2 font-semibold">
            <button v-on:click="currentTab = 1" class="font-semibold">
              사용자 관리
            </button>
          </h2>
        </li>
        <li
          v-bind:class="{ 'bg-gray-200': currentTab == 2, 'shadow-inner': currentTab == 2 }"
          class="flex items-center"
        >
          <h2 class="px-4 py-2 font-semibold">
            <button v-on:click="currentTab = 2" class="font-semibold">
              정책 관리
            </button>
          </h2>
        </li>
      </ul>
    </div>

    <div>
      <div v-show="currentTab == 0" class="p-6">
        <h1 class="text-5xl font-bold mb-6">
          품목 관리
        </h1>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            물품 목록
          </menu-item-heading>
          <template v-for="item in items">
            <hr>
            <MenuItemSpacer />
            <hr>
            <MenuItemValue v-bind:value="item.name" name="이름" />
            <hr>
            <MenuItemValue v-bind:value="item.serialNumber" name="시리얼 번호" />
            <hr>
            <MenuItemValue v-bind:value="item.status" name="상태" />
          </template>
        </menu-block>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            물품 추가
          </menu-item-heading>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemInput name="검색" placeholder="이름" orientation="vertical" />
          <template v-for="desc in itemDescriptions">
            <div v-on:click="test()" class="cursor-pointer relative">
              <hr>
              <MenuItemValue v-bind:value="desc.name" name="이름" />
              <hr>
              <MenuItemValue v-bind:value="desc.price" name="가격" />
              <div class="absolute inset-0 w-full h-full hover:bg-gray-500 hover:inner-shadow opacity-25 hover:pointer-events-none" />
            </div>
            <hr>
            <MenuItemSpacer />
          </template>
          <hr>
          <MenuItemButton v-on:click.native="test()" name="추가" />
        </menu-block>
      </div>

      <div v-show="currentTab == 1" class="p-6">
        <h1 class="text-5xl font-bold mb-6">
          사용자 관리
        </h1>
      </div>

      <div v-show="currentTab == 2" class="p-6">
        <h1 class="text-5xl font-bold mb-6">
          정책 관리
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBlock from '../components/MenuBlock.vue'
import MenuItemHeading from '../components/MenuItemHeading.vue'
import MenuItemInput from '../components/MenuItemInput.vue'
import MenuItemValue from '../components/MenuItemValue.vue'
import MenuItemSpacer from '../components/MenuItemSpacer.vue'
import MenuItemButton from '../components/MenuItemButton.vue'

export default {
  components: {
    MenuBlock,
    MenuItemHeading,
    MenuItemInput,
    MenuItemValue,
    MenuItemSpacer,
    MenuItemButton
  },
  data () {
    return {
      currentTab: 0,
      itemDescriptions: [
        {
          name: '단우산',
          price: 1000
        },
        {
          name: '장우산',
          price: 2000
        }
      ],
      items: [
        {
          name: '계산기',
          serialNumber: 'dd32c653-0d7e-45e6-b9a4-ee7a0f6fa42f',
          status: 'available'
        },
        {
          name: '계산기',
          serialNumber: 'ab4315a3-6972-4a22-8a17-eda6e114830a',
          status: 'rented'
        },
        {
          name: '행사용 텐트',
          serialNumber: '10677320-fb02-415c-9c23-b092e233393a',
          status: 'pending'
        }
      ]
    }
  },
  methods: {
    test () {
      console.log('test')
    }
  }
}
</script>

<style>
</style>
