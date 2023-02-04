<script setup>
import { useUxStore } from "~~/stores/uxStore";

const uxstore = useUxStore();
</script>

<template>
  <div class="flex">
    <!-- SIDEBAR CONTENT -->
    <div
      class="bg-dark-purple h-screen p-5 pt-8 w-72 relative"
      :class="[uxstore.sidebar.isOpen ? 'w-72' : 'w-20', 'duration-500 relative']"
    >
      <!-- LOGO -->
      <layoutsLogo />
      <!-- END LOGO -->

      <!-- MENU ITEMS -->
      <ul class="pt-2">
        <template v-for="(item, index) in uxstore.sidebar.menuItems" :key="index">
          <layoutsMenuItem :item="item" />
          <!-- SUBMENU ITEMS -->
          <ul
            v-if="item.submenu && uxstore.sidebar.isSubmenuOpen && uxstore.sidebar.isOpen"
          >
            <layoutsSubmenuItem
              v-for="(subItem, subIndex) in item.submenuItems"
              :key="subIndex"
              :subItem="subItem"
              class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
            />
          </ul>
          <!-- END SUBMENU ITEMS -->
        </template>
      </ul>
      <!-- END MENU ITEMS -->
    </div>
    <!-- END SIDEBAR CONTENT -->

    <!-- CONTENT -->
    <div class="p-7 text-2xl font-semibold">
      <slot />
    </div>
    <!-- END CONTENT -->
  </div>
</template>

<style lang="scss" scoped></style>
