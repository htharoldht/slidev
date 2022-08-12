<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 gap-8" :class="{ 'gap-16': $attrs.reverse }">
      <div class="pr-16" :class="{ 'order-1 text-right': $attrs.reverse }">
        <slot name="default" />
      </div>
      <div class="">
        <TheConsole class="rounded-lg shadow-lg object-cover mt-10">
          <slot name="window"></slot>
        </TheConsole>
      </div>
    </div>
  </div>
</template>
