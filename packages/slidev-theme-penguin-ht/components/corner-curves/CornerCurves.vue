<script setup lang="ts">
import CurveBig from './assets/curve-big.svg?component'
import CurveSmall from './assets/curve-small.svg?component'
</script>
<template>
  <div>
    <div class="relative">
      <CurveBig class="absolute bottom-0" />
      <CurveSmall class="absolute bottom-0 left-40 opacity-40" />
    </div>
  </div>
</template>
