<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 gap-8" :class="{ 'gap-16': $attrs.reverse }">
      <div class="pr-16" :class="{ 'order-1 text-right': $attrs.reverse }">
        <slot name="default" />
      </div>
      <figure class="flex flex-col">
        <img
          :src="$attrs.media"
          class="rounded-lg shadow-lg object-cover z-10 mt-10"
        />
        <figcaption class="mt-2 text-xs w-full">
          {{ $attrs.caption }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>
