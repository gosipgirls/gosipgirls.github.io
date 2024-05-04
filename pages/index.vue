<template>
  <SidebarContainer>
    <SidebarItem color="text-blue-700" title="Welcome">
      to gossip girls <br />The site ABOUT the dietitians,<br />
      For the dietitians and by the dietitians!
    </SidebarItem>

    <SidebarItem color="text-orange-600" title="Gossip">
      <a
        href="mailto:gossipgirls@gossipgirls.site"
        class="underline text-blue-500"
        >Click here</a
      >
      and gossip!
    </SidebarItem>

    <SidebarItem color="text-yellow-500" title="Pics">
      See what the gossip girls of the dietitians are wearing.
    </SidebarItem>

    <SidebarItem color="text-pink-500" title="Recipes">
      Your recipe was probably lost in the mail!
    </SidebarItem>

    <!-- <SidebarItem color="text-lime-600" title="Links" /> -->
  </SidebarContainer>

  <div class="lg:col-span-3 sm:col-span-5 col-span-5 px-5">
    <div class="bg-white overflow-hidden rounded-md w-full flex">
      <!-- height="150px" -->
      <!-- width="150px" -->
      <div class="py-2">
        <p class="text-center text-black text-2xl pb-3 pt-2">
          Spotted: the gossip girls of the dietitians
        </p>
        <img src="/mainpage.jpeg" :modifiers="{ rotate: null }" />
        <p class="text-black px-3 pt-3 text-xl">
          Our reality show highlights the value of Diversity and the beauty of
          the differences as it's the one true thing we all have in common!
          Thanks to Dr/Mohamed Rabie for challenging us to think critically, his
          guidance and support throughout this project. One of the 13 is the
          gossip girl and who am I? That's a secret we'll never tell. Stay tuned
          for the emails I'll be sending.
        </p>
        <p class="text-right text-cyan-600 font-semibold px-4">
          xo xo GOSSIP GIRL
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({ title: "gossipgirls", layout: "deafult" });
</script>
