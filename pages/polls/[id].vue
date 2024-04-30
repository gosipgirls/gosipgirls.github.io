<template>
  <div class="col-span-4 sm:col-span-4 lg:col-span-4">
    <div class="w-full h-full flex flex-col py-5 px-2 rounded *:transition-all">
      <div>
        <h3 class="text-4xl text-center mb-5">{{ item?.question }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "deafult",
});
const route = useRoute();
const router = useRouter();

const item = ref(null);
const loading = ref(false);
const meta = ref({ next: null, prev: null });

const fetchDate = async () => {
  try {
    loading.value = true;
    const response = await $fetch(
      "https://gossipgirls.pythonanywhere.com/api/polls/" + route.params.id
    );

    item.value = response;
  } catch (err) {
    console.log({ err });
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchDate();
});
</script>
