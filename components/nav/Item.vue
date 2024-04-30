<template>
  <div
    @click="$router.push(props.to)"
    class="cursor-pointer rounded-full w-32 h-32 transition-all hover:bg-opacity-75 bg-opacity-100 bg-[#c6bd49] py-1 my-5 ml-auto flex flex-col justify-between items-center"
  >
    <div :class="`w-20 h-20  rounded-full overflow-hidden bg-black` ">
      <img :src="props.img"/>
    </div>
    <span class="text-black text-lg pb-3 font-bold">{{ props.title }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  to: {
    type: String,
  },
  img: {
    tpye: String
  }
});
</script>
