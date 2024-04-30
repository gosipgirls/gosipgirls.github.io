<template>
  <div class="py-2 px-5">
    <h2 :class="`${props.color} text-2xl`">{{ props.title }}</h2>
    <p>
      <slot />
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
