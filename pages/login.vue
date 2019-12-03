<template>
  <div class="flex justify-center items-center mx-auto">
    <div class="flex flex-col">
      <div class="font-bold text-xl m-2">
        Login Page
      </div>

      <input
        v-model="id"
        class="m-2 field"
        placeholder="id"
      >
      <input
        v-model="password"
        class="m-2 field"
        placeholder="password"
      >
      <button @click="test" class="m-2">
        login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    // test () {
    //   console.log(this.id + ', ' + this.password)
    // }
  }
}
</script>

<style scoped>
.field {
  @apply border-solid border-2 border-gray-600 rounded-lg p-2
}
</style>
