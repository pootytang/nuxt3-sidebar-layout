<script setup>
import { useUxStore } from "~~/stores/uxStore";

const uxstore = useUxStore();
</script>

<template>
  <div class="flex">
    <div
      class="bg-dark-purple h-screen p-5 pt-8 w-72 relative"
      :class="[uxstore.sidebar.isOpen ? 'w-72' : 'w-20', 'duration-500 relative']"
    >
      <Icon
        name="bi:arrow-left-short"
        @click="uxstore.toggleSidebar"
        class="bg-white text-dark-purpble text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer"
        :class="{ 'rotate-180': !uxstore.sidebar.isOpen }"
      />
      <div class="inline-flex">
        <img
          class="bg-amber-300 w-10 h-8 rounded cursor-pointer block float-left mr-2 duration-500"
          src="/PaydUpLogo.png"
          alt="logo"
          :class="{ 'rotate-[360deg]': uxstore.sidebar.isOpen }"
        />
        <h1
          class="origin-left font-medium text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-pink-500 to-purple-500 duration-500"
          :class="{ 'scale-0': !uxstore.sidebar.isOpen }"
        >
          Paydup
        </h1>
      </div>

      <!-- MENU ITEMS -->
      <ul class="pt-2">
        <template v-for="(item, index) in uxstore.sidebar.menuItems" :key="index">
          <li
            class="text-gray-300 text-sm hover:bg-light-white rounded-md mt-2 flex items-center gap-x-4 cursor-pointer p-2"
            :class="[item.spacing ? 'mt-9' : 'mt-2']"
          >
            <span class="text-2xl block float-left">
              <Icon :name="item.icon" />
            </span>
            <span
              class="text-base font-medium flex-1 duration-500"
              :class="{ 'scale-0': !uxstore.sidebar.isOpen }"
            >
              {{ item.title }}
            </span>
            <!-- Chevron -->
            <Icon
              name="bi:chevron-down"
              v-if="item.submenu && uxstore.sidebar.isOpen"
              @click="uxstore.toggleSubmenu"
              :class="{ 'rotate-180': uxstore.sidebar.isSubmenuOpen }"
            />
            <!-- End Chevron -->
          </li>
          <!-- SUBMENU ITEMS -->
          <ul
            v-if="item.submenu && uxstore.sidebar.isSubmenuOpen && uxstore.sidebar.isOpen"
          >
            <li
              v-for="(subItem, subIndex) in item.submenuItems"
              :key="subIndex"
              class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
            >
              {{ subItem.title }}
            </li>
          </ul>
          <!-- END SUBMENU ITEMS -->
        </template>
      </ul>
      <!-- END MENU ITEMS -->
    </div>

    <div class="p-7 text-2xl font-semibold">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
