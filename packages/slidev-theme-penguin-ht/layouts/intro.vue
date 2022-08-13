<template>
  <div class="slidev-layout intro grid h-full">
    <div class="flex flex-col justify-center text-center my-auto mytop">
      <slot />
    </div>
  </div>
</template>

<style>
.mytop {
  transform: translateY(-10%);
}
</style>