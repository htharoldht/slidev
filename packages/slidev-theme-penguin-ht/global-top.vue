<script setup>
import { isDark } from '@slidev/client/logic/dark'
</script>

<template>
  <footer
    v-if="
      $slidev.themeConfigs.logo &&
      ['end'].indexOf($slidev.nav.currentLayout) === -1
    "
    class="absolute top-0 right-0 p-2"
  >
    <img
      v-if="isDark"
      :src="$slidev.themeConfigs.darkLogo"
      class="h-10 mr-4 z-10"
    />
    <img
      v-if="!isDark"
      :src="$slidev.themeConfigs.logo"
      class="h-10 mr-4 z-10"
    />
  </footer>
  <footer
    v-if="['end'].indexOf($slidev.nav.currentLayout) === -1"
    class="absolute bottom-0 right-2 p-2 footer"
  >
    © Powered by HTHaroldHT
  </footer>
</template>

<style>
.footer {
  font-size: 0.5rem;
}
</style>
