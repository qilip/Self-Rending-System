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
              물품 관리
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
        <li
          v-bind:class="{ 'bg-gray-200': currentTab == 3, 'shadow-inner': currentTab == 3 }"
          class="flex items-center"
        >
          <h2 class="px-4 py-2 font-semibold">
            <button v-on:click="currentTab = 3" class="font-semibold">
              기록 열람
            </button>
          </h2>
        </li>
      </ul>
    </div>

    <div>
      <div v-show="currentTab == 0" class="p-6">
        <div class="flex flex-wrap m-4">
          <div class="p-4 w-full md:max-w-xl">
            <h1 class="text-3xl font-bold mb-6">
              품목 관리
            </h1>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                품목 목록
              </menu-item-heading>
              <template v-for="desc in itemDescriptions">
                <hr>
                <menu-item-spacer />
                <hr>
                <menu-item-value v-bind:value="desc.name" name="이름" />
                <hr>
                <menu-item-value v-bind:value="desc.id" name="품목 번호" />
                <hr>
                <menu-item-value v-bind:value="desc.price + ' 원'" name="대여 보증금" />
                <hr>
                <menu-item-value v-bind:value="desc.items.join(', ')" name="물품 시리얼" />
              </template>
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                추가
              </menu-item-heading>
              <hr>
              <menu-item-spacer />
              <hr>
              <menu-item-input v-model="name" name="이름" placeholder="이름" />
              <hr>
              <menu-item-input v-model="price" name="가격" placeholder="대여 보증금" />
              <hr>
              <menu-item-button v-on:click.native="addItemDescription()" name="추가" />
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                삭제
              </menu-item-heading>
              <hr>
              <menu-item-spacer />
              <hr>
              <menu-item-input v-model="itemID" name="품목 번호" placeholder="id" />
              <hr>
              <menu-item-button v-on:click.native="deleteItemDescription()" name="삭제" />
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                수정
              </menu-item-heading>
              <hr>
              <menu-item-spacer />
              <hr>
              <menu-item-input v-model="itemDescriptionModifyForm.itemID" name="품목 번호" placeholder="id" />
              <hr>
              <menu-item-input v-model="itemDescriptionModifyForm.name" name="이름" placeholder="이름" />
              <hr>
              <menu-item-input v-model="itemDescriptionModifyForm.price" name="가격" placeholder="대여 보증금" />
              <hr>
              <menu-item-button v-on:click.native="modifyItemDescription()" name="수정" />
            </menu-block>
          </div>

          <div class="p-4 w-full md:max-w-xl">
            <h1 class="text-3xl font-bold mb-6">
              물품 관리
            </h1>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                물품 목록
              </menu-item-heading>
              <template v-for="item in items">
                <hr>
                <MenuItemSpacer />
                <hr>
                <MenuItemValue v-bind:value="item.serialNumber" name="시리얼 번호" />
                <hr>
                <MenuItemValue v-bind:value="item.status" name="상태" />
                <hr>
                <MenuItemValue v-bind:value="item.itemId" name="품목 번호" />
                <hr>
                <MenuItemValue v-bind:value="item.customerId" name="빌린 사람" />
              </template>
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                물품 추가
              </menu-item-heading>
              <hr>
              <MenuItemSpacer />
              <hr>
              <MenuItemInput v-model="itemID" name="품목 번호" placeholder="id" />
              <hr>
              <MenuItemButton v-on:click.native="addItem()" name="추가" />
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                물품 삭제
              </menu-item-heading>
              <hr>
              <MenuItemSpacer />
              <hr>
              <MenuItemInput v-model="serialNumber" name="시리얼 번호" placeholder="id" />
              <hr>
              <MenuItemButton v-on:click.native="deleteItem()" name="삭제" />
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                물품 수정
              </menu-item-heading>
              <hr>
              <MenuItemSpacer />
              <hr>
              <MenuItemInput v-model="itemModifyForm.serialNumber" name="시리얼 번호" placeholder="id" />
              <hr>
              <div class="flex flex-row">
                <div class="flex-1 px-4 py-2">
                  상태
                </div>
                <select v-model="itemModifyForm.status" size="1" class="flex-1 block px-4 py-2 shadow-inner">
                  <option value="available">
                    available
                  </option>
                  <option value="rented">
                    rented
                  </option>
                  <option value="pending">
                    pending
                  </option>
                </select>
              </div>
              <hr>
              <MenuItemInput v-model="itemModifyForm.customerId" name="빌린 사람" placeholder="customer id" />
              <hr>
              <MenuItemButton v-on:click.native="modifyItem()" name="수정" />
            </menu-block>

            <menu-block class="my-6 max-w-xl">
              <menu-item-heading>
                물품 반납 확인
              </menu-item-heading>
              <template v-for="item in items.filter(item => item.status === 'pending')">
                <hr>
                <MenuItemSpacer />
                <hr>
                <MenuItemValue v-bind:value="findDescription(item).name" name="이름" />
                <hr>
                <MenuItemValue v-bind:value="item.serialNumber" name="시리얼 번호" />
                <hr>
                <MenuItemValue v-bind:value="item.customerId" name="빌린 사람" />
                <hr>
                <MenuItemButton v-on:click.native="acceptReturn(item)" name="확인" />
              </template>
              <template v-if="items.filter(item => item.staus === 'pending')">
                <hr>
                <MenuItemSpacer />
                <hr>
                <div class="px-4 py-2">
                  현재 물품 대기 중인 물품이 없습니다.
                </div>
              </template>
            </menu-block>
          </div>
        </div>
      </div>

      <div v-show="currentTab == 1" class="p-6">
        <h1 class="text-3xl font-bold mb-6">
          사용자 관리
        </h1>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            사용자 목록
          </menu-item-heading>
          <template v-for="customer in customers">
            <hr>
            <MenuItemSpacer />
            <hr>
            <MenuItemValue v-bind:value="customer.studentId" name="학번" />
            <hr>
            <MenuItemValue v-bind:value="customer.credit" name="보증금" />
          </template>
        </menu-block>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            사용자 추가
          </menu-item-heading>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemInput v-model="customerAddForm.studentId" name="학번" placeholder="student id" />
          <hr>
          <MenuItemInput v-model="customerAddForm.credit" name="보증금" placeholder="credit" />
          <hr>
          <MenuItemButton v-on:click.native="addCustomer()" name="추가" />
        </menu-block>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            사용자 삭제
          </menu-item-heading>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemInput v-model="customerDeleteForm.studentId" name="학번" placeholder="student id" />
          <hr>
          <MenuItemButton v-on:click.native="deleteCustomer()" name="삭제" />
        </menu-block>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            사용자 수정
          </menu-item-heading>
          <hr>
          <MenuItemSpacer />
          <hr>
          <MenuItemInput v-model="customerModifyForm.studentId" name="학번" placeholder="student id" />
          <hr>
          <MenuItemInput v-model="customerModifyForm.credit" name="보증금" placeholder="액수" />
          <hr>
          <MenuItemButton v-on:click.native="modifyCustomer()" name="수정" />
        </menu-block>
      </div>

      <div v-show="currentTab == 2" class="p-6">
        <h1 class="text-3xl font-bold mb-6">
          정책 관리
        </h1>
      </div>

      <div v-show="currentTab == 3" class="p-6">
        <h1 class="text-3xl font-bold mb-6">
          기록 열람
        </h1>

        <menu-block class="my-6 max-w-xl">
          <menu-item-heading>
            기록
          </menu-item-heading>
          <template v-for="record in records">
            <hr>
            <MenuItemSpacer />
            <hr>
            <MenuItemValue v-bind:value="record.__t" name="종류" />
            <hr>
            <MenuItemValue v-bind:value="record.Date" name="날짜" />
            <hr>
            <MenuItemValue v-bind:value="record.CustomerId" name="고객" />
            <template v-if="record.__t == 'RentRecord'">
              <hr>
              <MenuItemValue v-bind:value="record.SerialNumber" name="빌린 물품" />
            </template>
            <template v-if="record.__t == 'ReturnRecord'">
              <hr>
              <MenuItemValue v-bind:value="record.SerialNumber" name="반납한 물품" />
            </template>
          </template>
        </menu-block>
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
      name: '',
      price: 0,

      itemID: 0,
      serialNumber: 0,

      itemDescriptionModifyForm: {
        itemID: 0,
        name: '',
        price: 0
      },

      itemModifyForm: {
        serialNumber: 0,
        status: '',
        customerId: ''
      },

      customerAddForm: {
        studentId: '',
        credit: 0
      },
      customerDeleteForm: {
        studentId: ''
      },
      customerModifyForm: {
        studentId: '',
        credit: 0
      },

      currentTab: 0
    }
  },
  async asyncData ({ $axios }) {
    const itemDescriptions = await $axios.$get('/api/items/descriptions')
    const items = await $axios.$get('/api/items')
    const customers = await $axios.$get('/api/customers')
    const records = await $axios.$get('/api/records')

    return {
      itemDescriptions,
      items,
      customers,
      records
    }
  },
  methods: {
    findDescription (item) {
      return this.itemDescriptions.find(desc => desc.id === item.itemId)
    },
    addItemDescription () {
      this.$axios.post('/api/items/descriptions/new', {
        name: this.name,
        price: this.price
      }).then((res) => {
        alert('추가되었습니다.')
      }).catch((err) => {
        alert(err)
      })
      alert('name : ' + this.name + ', price : ' + this.price)
    },
    deleteItemDescription () {
      this.$axios.delete('/api/items/descriptions/' + this.itemID).then((res) => {
        alert('삭제되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    modifyItemDescription () {
      const form = this.itemDescriptionModifyForm
      this.$axios.patch('/api/items/descriptions/' + form.itemID, form).then((res) => {
        alert('수정되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    addItem () {
      this.$axios.post('/api/items/new', {
        itemId: Number(this.itemID)
      }).then((res) => {
        alert('추가되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    deleteItem () {
      alert('serialNumber : ' + this.serialNumber)
      this.$axios.delete('/api/items/' + this.serialNumber).then((res) => {
        alert('삭제되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    modifyItem () {
      const form = this.itemModifyForm
      this.$axios.patch('/api/items/' + form.serialNumber, form).then((res) => {
        alert('수정되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    addCustomer () {
      this.$axios.post('/api/customers/new', this.customerAddForm).then((res) => {
        alert('추가되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    deleteCustomer () {
      this.$axios.delete('/api/customers/' + this.customerDeleteForm.studentId).then((res) => {
        alert('삭제되었습니다')
      }).catch((err) => {
        alert(err)
      })
    },
    modifyCustomer () {
      this.$axios.patch(
        '/api/customers/' + this.customerModifyForm.studentId,
        this.customerModifyForm).then((res) => {
        alert('수정되었습니다.')
      }).catch((err) => {
        alert(err)
      })
    },
    acceptReturn (item) {
      const description = this.findDescription(item)
      alert(description.name)

      this.$axios.get('/api/customers/' + item.customerId).then((res) => {
        alert('보증금 : ' + res.data.credit)

        return res.data.credit
      }).then((credit) => {
        return this.$axios.patch('/api/customers/' + item.customerId, {
          credit: credit + description.price
        })
      }).then((res) => {
        return this.$axios.patch('/api/items/' + item.serialNumber, {
          status: 'available'
        })
      }).then((res) => {
        alert('success')
      }).catch((err) => {
        alert(err)
      })
    }
  }
}
</script>

<style>
</style>
