<template>
  <div class="slidev-layout intro grid h-full">
    <div class="flex flex-col justify-center text-center mytop">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.intro {
  .mytop {
    transform: translateY(-10%);
  }
  h1 {
    @apply text-6xl leading-20 font-sans font-extrabold;
  }

  h1 + p {
    @apply opacity-60 -mt-4 text-2xl;
  }

  a {
    @apply text-secondary-400 hover:text-secondary-500 dark:(text-white hover:text-gray-200);
  }
}
</style>
