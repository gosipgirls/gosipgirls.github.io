<template>
<div
@click="$router.push('/polls/'+poll.id)"
class="flex justify-between cursor-pointer hover:bg-opacity-10 bg-white p-4 my-2 bg-opacity-5 backdrop-blur-lg border-gray-400 border-[1px] rounded-md"
>
<span class="font-semibold"
  >{{ poll.question }}</span
>
<div class="flex justify-between items-center">
    <template v-if="poll.image">
  <img src="/image.png" class="brightness-200" width="25" />
  <span>∙</span>
</template>
  <span>{{poll.votes}} votes</span>
</div>
</div>
</template>
<script setup>
  const poll = defineProps({
    image: String,
    question: String,
    votes : Number,
    id: Number
  })
</script>
