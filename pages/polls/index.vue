<template>
    <div class="col-span-4 sm:col-span-4 lg:col-span-4">
      <div class="w-full h-full flex flex-col py-5 px-2 rounded *:transition-all">
        <div>
          <h3 class="text-4xl text-center mb-5">Polls</h3>
        </div>
        <template v-if="loading.valueOf()">
          <PollsListItemLoading v-for="item in 7" :length="20" />
        </template>
        <template v-else>
        <PollsListItem
          v-for="poll in items"
          :key="poll.id"
          :image="poll.image"
          :question="poll.question"
          :votes="poll.votes"
          :id="poll.id"
        />
      </template>
  
        <div class="flex justify-between my-4 border-t border-t-gray-600 pt-4 *:transition-all">
          <button :disabled="!meta.prev" :class="`${meta.prev ? 'prev' : ' cursor-not-allowed' } blur-background  px-5 py-1`" @click="prev">&lt; Previous</button>
          <button :disabled="!meta.next" :class="`${meta.next ? 'next' : ' cursor-not-allowed' } blur-background  px-5 py-1`" @click="next">Next ></button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const route = useRoute();
  const router = useRouter();
  
  const page = computed(() => +route.query.page || 1);
  
  const items = ref([]);
  const loading = ref(false);
  const meta = ref({next: null, prev: null})
  
  const fetchDate = async () => {
    try {
      loading.value = true;
      const response = await $fetch(
        "https://gossipgirls.pythonanywhere.com/api/polls/?page=" + page.value
      );
  
      meta.value.next = response.next;
      meta.value.prev = response.previous;
      const polls = response.results.map((poll) => {
        const votes = poll?.choices?.reduce((v, p) => {
          return p.votes.length + v;
        }, 0);
  
        return {
          ...poll,
          votes,
        };
      });
  
      items.value = polls;
    } catch (err) {
      console.log({ err });
    } finally {
      loading.value = false;
    }
  };
  
  
  const next = () => {
    router.push({query: {page: page.value + 1}})
  }
  
  const prev = () => {
    router.push({query: {page: page.value - 1}})
  }
  
  
  watch(page, fetchDate);
  onMounted(() => {
    fetchDate();
  });
  
  definePageMeta({
    layout: "deafult",
  });
  useHead({
    title: "gossipgirls - polls",
  });
  </script>
  <style>
  .prev {
    background: #ffff001f;
    border-color: #ffff0047;
  }
  
  .prev:hover {
    background: #65654e1f
  }
  
  .next {
    background: #ffff001f;
    border-color: #ffff0047;
  }
  
  .next:hover {
    background: #65654e1f
  }
  /* .next {
    background: #0087ff1f;
    border-color: #3b30bd47;
  } */
  </style>
  