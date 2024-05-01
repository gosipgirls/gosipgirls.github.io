<template>
  <div class="col-span-4 sm:col-span-4 lg:col-span-4">
    <div class="w-full h-full flex flex-col py-5 px-2 rounded *:transition-all">
      <div>
        <h3 class="text-4xl text-center mb-5">{{ item?.question }}</h3>
      </div>
      <div class="flex justify-center" v-if="item?.image">
        <div class="overflow-hidden image-container">
          <img :src="item?.image" width="300px" height="140px" />
        </div>
      </div>
      <div>
        <PollsChoice
          @dialog="
            (type) => {
              dialogType = type;
              setIsOpen(true);
            }
          "
          v-for="choice in item?.choices"
          :has_voted="has_voted"
          :id="choice.id"
          :key="choice.id"
          :choice_text="choice.choice_text"
          :votes="choice.votes"
          :percentage="choice.percentage"
          :loading="choice.loading"
          :my_choice="choice.my_choice"
          @choose="(id) => choose(id)"
        />
        <!-- <div
          v-for="choice in item?.choices"
          :key="choice.id"
          class="flex  flex-col gap-y-2 rounded-md my-2 border-2 px-3 border-slate-800 py-3 choice"
        >
          <div class="flex items-center gap-x-2">
            <span
              class="w-5 h-5 border-2 border-white inline-block rounded-full choice-circle"
            ></span
            ><span>{{ choice.choice_text }}</span>
            <count-up :end-val="5" duration="2" ></count-up>
          </div>
          <div class="w-full h-2 bg-gray-600 rounded-md relative overflow-hidden">
            was bg-blue-500 
            <div class="absolute left-0 top-0 w-1/2 bg-yellow-200 h-full rounded-full "></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <!-- The actual dialog panel -->
      <DialogPanel class="w-full max-w-sm rounded bg-white p-5">
        <DialogTitle
          class="text-xl font-semibold mb-2"
          v-if="dialogType.valueOf() === 1"
          >Login Required</DialogTitle
        >
        <DialogTitle
          class="text-xl font-semibold mb-2"
          v-if="dialogType.valueOf() === 2"
          >Already Voted</DialogTitle
        >

        <DialogDescription class="mb-4" v-if="dialogType.valueOf() === 2">
          You've already cast your vote on this poll. Thank you for your
          participation!
        </DialogDescription>
        <DialogDescription class="mb-4" v-if="dialogType.valueOf() === 1">
          Please
          <a
            href="#"
            @click.prevent="
              setIsOpen(false);
              $router.push('/login');
            "
            class="text-blue-600 hover:text-blue-500"
            >log in</a
          >
          or
          <a
            href="#"
            @click.prevent="
              setIsOpen(false);
              $router.push('/signup');
            "
            class="text-blue-600 hover:text-blue-500"
            >sign up</a
          >
          to vote on this poll.
        </DialogDescription>

        <!--
        You can render additional buttons to dismiss your dialog by setting your
        `isOpen` state to `false`.
      -->
        <!-- <button @click="setIsOpen(false); $router.push('/login')">Login</button> -->
        <button
          @click="setIsOpen(false)"
          class="text-red-500 hover:text-red-700 float-right font-semibold"
        >
          close
        </button>
        <!-- ... -->
      </DialogPanel>
    </div>
  </Dialog>
</template>
<script setup>
import { ref } from "vue";
import { Dialog, DialogTitle, DialogDescription } from "@headlessui/vue";

const isOpen = ref(false);
const dialogType = ref(0);

function setIsOpen(value) {
  isOpen.value = value;
}
definePageMeta({
  layout: "deafult",
});

// definePageMeta({ title: "gossipgirls"  });

import { useUserStore } from "~/store";

const user = useUserStore();

const userID = computed(() => user.user.id);

const route = useRoute();
const router = useRouter();

const item = ref(null);
const has_voted = ref(false);
const loading = ref(false);

const fetchDate = async () => {
  try {
    loading.value = true;
    const response = await $fetch(
      "https://gossipgirls.pythonanywhere.com/api/polls/" + route.params.id
    );

    const totalVotes = response.choices.reduce(
      (total, choice) => total + choice.votes.length,
      0
    );

    response.choices = response.choices.map((choice) => {
      const voted_by_me = choice.votes.find(
        (vote) => vote.voted_by === userID.value
      );
      if (voted_by_me) {
        has_voted.value = true;
      }
      return {
        my_choice: voted_by_me,
        loading: false,
        ...choice,
        percentage: (choice.votes.length / totalVotes) * 100,
      };
    });

    document.querySelector("title").innerText =
      "gossipgirls - " + response.question;

    item.value = response;
  } catch (err) {
    console.log({ err });
  } finally {
    loading.value = false;
  }
};

const choose = async (id) => {
  await $fetch(
    "https://gossipgirls.pythonanywhere.com/api/polls/" +
      route.params.id +
      "/choices/" +
      id +
      "/vote",
    {
      method: "POST",
      body: {
        voted_by: userID.value,
      },
    }
  );

  await fetchDate();
};

onMounted(() => {
  fetchDate();
});
</script>
<style>
.image-container {
  /* box-shadow: 0px 0px 0px 1px #fef08a99; */
  box-shadow: 0px 0px 0px 1px rgb(30 41 59);
  background: #8d96f36b;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  /* border: 1px solid #f0f8ff38; */
}
</style>
