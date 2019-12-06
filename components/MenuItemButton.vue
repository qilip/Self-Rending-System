<template>
  <button class="block px-4 py-2 bg-gray-200 hover:bg-gray-400 w-full">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
