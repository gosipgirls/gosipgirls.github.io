<template>
  <div class="col-span-4 sm:col-span-4 lg:col-span-4">
    <div class="w-full h-full flex justify-center items-center blur-background">
      <div class="min-w-[415px] w-[415px]">
        <h3 class="text-3xl mb-3">Signup</h3>
        <form class="flex flex-col gap-2" @submit.prevent="signup">
          <input
            class="p-2 rounded-md text-black"
            placeholder="email"
            v-model="email"
          />
          <input
            class="p-2 rounded-md text-black"
            placeholder="username"
            v-model="username"
          />
          <input
            class="p-2 rounded-md text-black"
            placeholder="password"
            v-model="password"
          />
          <div class="flex justify-between items-center gap-2">
            <div
              :class="`transition-all bg-green-700 flex-grow p-3 text-white rounded-md ${
                shouldSuccess.valueOf() ? 'opacity-100' : 'opacity-0'
              }`"
            >
              Successfully signed up, redirecting ...
            </div>
            <button
              class="transition-all p-2 rounded-md px-4 bg-yellow-100 text-black self-end hover:bg-yellow-200"
            >
              {{ loading ? "loading ..." : "sign up" }}
            </button>
          </div>
        </form>
        <ul class="" v-if="shouldError.valueOf() && erros.length > 0">
          <li class="text-red-500 list-disc list-inside" v-for="err in erros">
            {{ err }}
          </li>
        </ul>
        <!-- <div class="bg-green-700 p-3 text-white rounded-md mt-2 mb-1" v-if="shouldSuccess.valueOf()">
                    Successfully signed up
                </div> -->
        <div v-if="serverError?.valueOf().length > 0" class="text-red-500">
          {{ serverError.valueOf() }}
        </div>
        <p class="mt-4">
          do have an account ?
          <NuxtLink to="/login" class="text-blue-600">signin</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const email = ref("");
const username = ref("");
const password = ref("");
const loading = ref(false);

const shouldError = ref(false);
const erros = ref([]);
const serverError = ref("");

const shouldSuccess = ref(false);

const signup = async () => {
  shouldSuccess.value = false;
  shouldError.value = false;
  erros.value = [];
  serverError.value = null;
  if (!email.value.trim()) {
    erros.value.push("Email is Required");
  }
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
      "https://gossipgirls.pythonanywhere.com/api/users/",
      {
        method: "POST",
        body: {
          username: username.value,
          password: password.value,
          email: email.value,
        },
      }
    );
    shouldSuccess.value = true;

    setTimeout(() => {
      router.push("/login");
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
  title: "gossipgirls - signup",
});
</script>
