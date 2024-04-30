<template>
  <div
    class="antialiased  text-white dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base"
  >
    <div
      class="flex-1 flex flex-col py-4 before:bg-opacity-55 before:bg-black before:fixed before:w-full before:h-full before:left-0 before:top-0 before:pointer-events-none"
    >
      <!-- before:bg-opacity-55 before:bg-black before:absolute before:w-full before:h-full before:left-0 before:top-0 -->
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <h2
          class="w-full relative sm:text-5xl font-semibold text-center h-[200px]"
        >
          <div
            class="w-full h-[200px] bg-[url('/logo.svg')] bg-no-repeat bg-center bg-[length:2000px]"
          ></div>
          <!-- <img src="/logo.png" />/ -->
        </h2>
      </div>
      <!-- Content -->
      <!-- lg:grid-cols-10 -->
      <div
        class="grid grid-cols-5 gap-1  max-w-[960px] w-[960px] px-1 shadow-2xl shadow-black bg-black bg-opacity-60 relative transition-all"
      >
        <slot />

        <SidebarContainer classes="pr-2 border-l border-l-2 border-l-black">
          <NavItem title="home" to="/" img="/image1.jpg" />
          <NavItem title="polls" to="/polls" img="/image2.jpg" />
          <NavItem
            v-if="!isLoggedIn"
            title="login"
            to="/login"
            img="/image3.jpg"
          />
          <div
            v-if="isLoggedIn"
            @click="logout"
            class="cursor-pointer rounded-full w-32 h-32 transition-all hover:bg-opacity-75 bg-opacity-100 bg-[#c6bd49] py-1 my-5 ml-auto flex flex-col justify-between items-center"
          >
            <div :class="`w-20 h-20  rounded-full overflow-hidden bg-black`">
              <img src="/logout.avif" class="h-full object-cover" />
            </div>
            <span class="text-black text-lg pb-3 font-bold">Logout</span>
          </div>
          <!-- <NavItem title="pics" to="/pics" img="/image3.jpg"/> -->
          <!-- <NavItem title="links" to="/links" img="/image4.jpg"/> -->
        </SidebarContainer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store";
definePageMeta({ title: "gossipgirls" });

const router = useRouter();
const user = useUserStore();

const isLoggedIn = computed(() => user.isLoggedIn);

const logout = () => {
  user.logout();
  router.replace("/");
};
</script>
