<template>
  <div
    :class="`col-span-5 sm:col-span-5 lg:col-span-1 text-white relative  justify-center ${
      props.classes ? props.classes : ''
    }`"
  >
    <slot />
  </div>
</template>
<script setup>
  const props = defineProps({
    classes: {
      type: String,
    },
  });
</script>
