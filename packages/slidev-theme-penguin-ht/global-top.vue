<script setup>
import { isDark } from '@slidev/client/logic/dark'
</script>

<template>
  <footer v-if="
    $slidev.themeConfigs.logo &&
    $slidev.nav.currentLayout !== 'end'
  " class="logo">
    <img v-if="isDark" :src="$slidev.themeConfigs.darkLogo" class="h-10 mr-4 z-10" />
    <img v-if="!isDark" :src="$slidev.themeConfigs.logo" class="h-10 mr-4 z-10" />
  </footer>
  <footer v-if="$slidev.nav.currentLayout !== 'end'" class="footer">
    © Powered by HTHaroldHT
  </footer>
</template>

<style>

.footer {
  font-size: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0.5rem;
  padding: 0.5rem;
}

.logo {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
}
</style>
