<template>
  <div class="col-span-4 sm:col-span-4 lg:col-span-4">
    <div class="w-full h-full flex justify-center items-center blur-background">
      <div class="min-w-[415px] w-[415px]">
        <h3 class="text-3xl mb-3">Login</h3>
        <form class="flex flex-col gap-2" @submit.prevent="signin">
          <input
            v-model="username"
            class="p-2 rounded-md text-black"
            placeholder="username"
          />
          <input
            v-model="password"
            class="p-2 rounded-md text-black"
            placeholder="password"
          />

          <div class="flex justify-between items-center gap-2">
            <div
              :class="`transition-all bg-green-700 flex-grow p-3 text-white rounded-md ${
                shouldSuccess.valueOf() ? 'opacity-100' : 'opacity-0'
              }`"
            >
              Successfully signed in, redirecting ...
            </div>
            <button
              class="transition-all p-2 rounded-md px-4 bg-yellow-100 text-black self-end hover:bg-yellow-200"
            >
              {{ loading.valueOf() ? 'loading ...' : 'sign in' }}
            </button>
          </div>
        </form>
        <ul class="" v-if="shouldError.valueOf() && erros.length > 0">
          <li class="text-red-500 list-disc list-inside" v-for="err in erros">
            {{ err }}
          </li>
        </ul>
        <div v-if="serverError?.valueOf().length > 0" class="text-red-500">
          {{ serverError.valueOf() }}
        </div>
        <!-- <div class="bg-green-700 p-3 text-white" v-if="shouldSuccess.valueOf()">
                    Successfully signed up
                </div> -->
        <p class="mt-4">
          don't have account.
          <NuxtLink to="/signup" class="text-blue-600">signup</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store";
const router = useRouter()
const user = useUserStore();
const username = ref("");
const password = ref("");
const loading = ref(false);

const shouldError = ref(false);
const erros = ref([]);
const serverError = ref("");

const shouldSuccess = ref(false);

const signin = async () => {
  shouldSuccess.value = false;
  shouldError.value = false;
  erros.value = [];
  serverError.value = null;
  if (!username.value.trim()) {
    erros.value.push("Username is Required");
  }

  if (!password.value.trim()) {
    erros.value.push("Password is Required");
  }

  if (erros.value.length > 0) {
    shouldError.value = true;
    return;
  }
  try {
    loading.value = true;
    const data = await $fetch(
      "https://gossipgirls.pythonanywhere.com/api/login/",
      {
        method: "POST",
        body: {
          username: username.value,
          password: password.value,
        },
      }
    );
    shouldSuccess.value = true;

    const { token, usrname, id } = data;
    user.setUser(usrname, token, id);

    setTimeout(() => {
      router.push("/");
    }, 1000);
  } catch (err) {
    if (typeof err.statusCode === "undefined") {
      shouldError.value = true;
      serverError.value = err.cause.message;
    } else {
      if (err.statusCode >= 400 && err.statusCode < 500) {
        shouldError.value = true;
        erros.value = Object.values(err.data).flat();
      }
    }
    console.log({ err });
  } finally {
    loading.value = false;
  }
};
definePageMeta({
  layout: "deafult",
});
useHead({
  title: "gossipgirls - login",
});
</script>
