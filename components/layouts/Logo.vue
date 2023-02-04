<script setup>
import { useUxStore } from "~~/stores/uxStore";
const store = useUxStore();
</script>

<template>
  <div>
    <Icon
      name="bi:arrow-left-short"
      @click="store.toggleSidebar"
      class="bg-white text-dark-purpble text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer"
      :class="{ 'rotate-180': !store.sidebar.isOpen }"
    />
    <div class="inline-flex">
      <img
        class="bg-amber-300 w-10 h-8 rounded cursor-pointer block float-left mr-2 duration-500"
        src="/PaydUpLogo.png"
        alt="logo"
        :class="{ 'rotate-[360deg]': store.sidebar.isOpen }"
      />
      <h1
        class="origin-left font-medium text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-pink-500 to-purple-500 duration-500"
        :class="{ 'scale-0': !store.sidebar.isOpen }"
      >
        Paydup
      </h1>
    </div>
  </div>
</template>
