<template>
  <div
    v-bind:class="{
      'flex-row': orientation == 'horizontal',
      'flex-col': orientation == 'vertical'
    }"
    class="flex"
  >
    <div class="flex-1 px-4 py-2">
      {{ name }}
    </div>
    <input
      v-bind:placeholder="placeholder"
      v-model="data"
      class="flex-1 shadow-inner px-4 py-2"
    >
  </div>
</template>

<script>
export default {
  name: 'MenuItemInput',
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    orientation: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {
      data: this.value
    }
  },
  watch: {
    data (val) {
      this.$emit('input', val)
    }
  }
}
</script>
