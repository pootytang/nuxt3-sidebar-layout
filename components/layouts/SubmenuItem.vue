<script setup>
const props = defineProps({
  subItem: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li
    class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
  >
    {{ props.subItem.title }}
  </li>
</template>
