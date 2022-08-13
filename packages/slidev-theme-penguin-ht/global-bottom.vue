<template>
  <footer v-if="['end', 'none'].indexOf($slidev.nav.currentLayout) === -1">
    <CornerCurves class="corner" />
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
    " class="watermark" />
  </footer>
</template>

<style>
.corner {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(90deg);
}

.watermark {
  position: absolute;
  top: 5rem;
  right: -7.5rem;
}
</style>