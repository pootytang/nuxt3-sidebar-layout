<script setup>
import { useUxStore } from "~~/stores/uxStore";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const uxstore = useUxStore();
</script>

<template>
  <li
    class="text-gray-300 text-sm hover:bg-light-white rounded-md mt-2 flex items-center gap-x-4 cursor-pointer p-2"
    :class="[props.item.spacing ? 'mt-9' : 'mt-2']"
  >
    <span class="text-2xl block float-left">
      <Icon :name="props.item.icon" />
    </span>
    <span
      class="text-base font-medium flex-1 duration-500"
      :class="{ 'scale-0': !uxstore.sidebar.isOpen }"
    >
      {{ props.item.title }}
    </span>
    <!-- Chevron -->
    <Icon
      name="bi:chevron-down"
      v-if="props.item.submenu && uxstore.sidebar.isOpen"
      @click="uxstore.toggleSubmenu"
      :class="{ 'rotate-180': uxstore.sidebar.isSubmenuOpen }"
    />
    <!-- End Chevron -->
  </li>
</template>

<style lang="scss" scoped></style>
