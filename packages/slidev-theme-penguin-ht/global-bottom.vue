<template>
  <footer v-if="['end', 'none'].indexOf($slidev.nav.currentLayout) === -1">
    <CornerCurves class="absolute top-0 left-0 transform rotate-90" />
    <Zigzags v-if="
      [
        'cover',
        'end',
        'none',
        'iframe-right',
        'image-right',
        'dynamic-image',
      ].indexOf($slidev.nav.currentLayout) === -1 &&
      $slidev.themeConfigs.decoration !== false
    " class="absolute top-20 -right-30" />
  </footer>
</template>
