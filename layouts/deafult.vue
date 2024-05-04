<template>
  <div
    class="antialiased text-white dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base"
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
            class="w-full h-[200px] bg-[url('/logo.svg')] bg-no-repeat bg-center bg-[length:1000px] md:bg-[length:2000px]"
          ></div>
          <!-- <img src="/logo.png" />/ -->
        </h2>
      </div>
      <!-- Content -->
      <!-- lg:grid-cols-10 -->
      <div
        class="grid grid-cols-5 gap-1 max-w-[960px] lg:w-[960px] md:w-[768px] sm:min-w-[640px] px-1 shadow-2xl shadow-black bg-black bg-opacity-60 relative transition-all"
      >
        <SidebarContainer classes="pr-2 lg:hidden">
          <div
            class="flex flex-row justify-center gap-x-8 lg:flex-col w-full flex-wrap"
          >
            <NavItem
              title="home"
              to="/"
              img="/o/icons/home.JPG"
              imgStyle="bottom:-2px; max-width:129%"
            />
            <NavItem title="polls" to="/polls" img="/o/icons/polls.JPG" />
            <NavItem
              v-if="!isLoggedIn"
              title="login"
              to="/login"
              imgStyle="bottom:-2px; max-width:129%"
              img="/o/icons/login.jpg"
            />
            <template v-else="isLoggedIn">
              <NavItem
                @click="logout"
                title="logout"
                imgStyle="bottom:-2px;max-width:120%; left:-10px"
                img="/o/icons/login.jpg"
                imgClass="-scale-y-100"
              />
              <NavItem
                @click="() => {}"
                title="links"
                imgStyle="bottom:-25px;max-width:120%; left:-10px"
                img="/l.JPG"
                imgClass="-scale-y-100 rotate-180"
                :shouldNotRotate="true"
              />
              <NavItem
                @click="() => {}"
                title="pics"
                imgStyle="bottom:-22px;max-width:120%; left:-10px"
                img="/p.jpeg"
                imgClass="-scale-y-100 rotate-180"
                :shouldNotRotate="true"
              />
            </template>
          </div>
        </SidebarContainer>
        <slot />

        <SidebarContainer
          classes="pr-2 border-l border-l-2 border-l-black hidden lg:inline-grid"
        >
          <div
            class="flex flex-row justify-center lg:justify-start gap-x-8 lg:flex-col w-full"
          >
            <NavItem
              title="home"
              to="/"
              img="/o/icons/home.JPG"
              imgStyle="bottom:-2px; max-width:129%"
            />
            <NavItem title="polls" to="/polls" img="/o/icons/polls.JPG" />
            <NavItem
              v-if="!isLoggedIn"
              title="login"
              to="/login"
              imgStyle="bottom:-2px; max-width:129%"
              img="/o/icons/login.jpg"
            />
            <template v-else="isLoggedIn">
              <NavItem
                @click="logout"
                title="logout"
                imgStyle="bottom:-2px;max-width:120%; left:-10px"
                img="/o/icons/login.jpg"
                imgClass="-scale-y-100"
              />
              <NavItem
                @click="() => {}"
                title="links"
                imgStyle="bottom:-25px;max-width:120%; left:-10px"
                img="/l.JPG"
                imgClass="-scale-y-100 rotate-180"
                :shouldNotRotate="true"
              />
              <NavItem
                @click="() => {}"
                title="pics"
                imgStyle="bottom:-22px;max-width:120%; left:-10px"
                img="/p.jpeg"
                imgClass="-scale-y-100 rotate-180"
                :shouldNotRotate="true"
              />
            </template>
          </div>
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
    reloadNuxtApp();
    // window.location.reload()
    // router.back()
  };
</script>
