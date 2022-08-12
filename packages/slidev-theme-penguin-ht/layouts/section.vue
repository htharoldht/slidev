<template>
  <div class="slidev-layout section w-full h-full grid">
    <div class="my-auto text-center">
      <slot />
    </div>
  </div>
</template>

<style>
.my-auto {
  transform: translateY(-10%);
}
</style>
