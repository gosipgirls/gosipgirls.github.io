<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

</template>
<script setup>

    useHead({
      bodyAttrs: {
        class: "bg-[url('/background.jpg')] bg-cover"
      }
    })

</script>
