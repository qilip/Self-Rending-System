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
    <input v-bind:placeholder="placeholder" class="flex-1 shadow-inner px-4 py-2">
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
    orientation: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>
