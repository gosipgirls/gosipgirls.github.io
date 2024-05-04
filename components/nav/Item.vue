<template>
  <div
    @click="props.to ? $router.push(props.to) : $emit('click')"
    class="cursor-pointer rounded-full w-32 h-32 transition-all hover:bg-opacity-75 bg-opacity-100 bg-[#c6bd49] py-1 my-5 lg:ml-auto sm:ml-0 ml-0 flex flex-col justify-between items-center"
  >
    <div
      :class="`w-20 h-20  rounded-full overflow-hidden bg-[#c6bd41] relative`"
    >
      <img
        :src="props.img"
        width="200px"
        height="200px"
        :class="`absolute ${props.imgClass ? props.imgClass : ''} ${
          props.shouldNotRotate ? '' : 'rotate-90'
        } `"
        :style="`${props.imgStyle ? props.imgStyle : ''}`"
      />
      <!-- <img :src="props.img"/> sizes="100vw sm:50vw md:400px" -->
    </div>
    <span class="text-black text-lg pb-3 font-bold">{{ props.title }}</span>
  </div>
</template>
<script setup>
  const emits = defineEmits(["click"]);
  const props = defineProps({
    title: {
      type: String,
    },
    to: {
      type: String,
    },
    img: {
      tpye: String,
    },
    imgClass: {
      tpye: String,
    },
    imgStyle: {
      type: String,
    },
    shouldNotRotate: {
      type: Boolean,
    },
  });
</script>
