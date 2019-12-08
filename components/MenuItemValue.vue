<template>
  <div class="flex">
    <div class="flex-1 px-4 py-2 self-center">
      {{ name }}
    </div>
    <div class="flex-1 px-4 py-2 shadow-inner bg-gray-100 whitespace-no-wrap overflow-x-auto text-right">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItemValue',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
