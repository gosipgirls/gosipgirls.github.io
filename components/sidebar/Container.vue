<template>
  <div
    :class="`col-span-1 sm:col-span-1 lg:col-span-1 text-white relative items-center justify-center ${props.classes}`"
  >
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  classes : { 
    type: String
  }
})
</script>