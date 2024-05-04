<template>
  <SidebarContainer>
    <SidebarItem color="text-blue-700" title="Welcome">
      Lorem ipslicabo aut velit! Reprehenderit temporibus ipsam vel veniam
      sequi.
    </SidebarItem>

    <SidebarItem color="text-orange-600" title="gossip">
      Lorem ipsumexplicabo aut velit! Reprehenderit temporibus ipsam vel veniam
      sequi.
    </SidebarItem>

    <SidebarItem color="text-yellow-500" title="Pics">
      Lorem ipsumplicabo aut velit! Reprehenderit tem
    </SidebarItem>

    <SidebarItem color="text-pink-500" title="Parties">
      Lorem ipsumcabo aut velit! Reprehenderit temporibus ipsam vel veniam
      sequi.
    </SidebarItem>

    <SidebarItem color="text-lime-600" title="Links" />
  </SidebarContainer>

  <div class="col-span-3 px-5">
    <div class="bg-white overflow-hidden rounded-md w-full h-full flex">
      <!-- height="150px" -->
      <!-- width="150px" -->
      <div>
        <NuxtImg src="/mainpage.jpeg" :modifiers="{ rotate: null }" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({ title: "gossipgirls", layout: "deafult" });
</script>
