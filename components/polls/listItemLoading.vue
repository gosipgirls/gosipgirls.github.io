<template>
    <div
    class="animate-pulse flex justify-between cursor-pointer hover:bg-opacity-10 bg-white p-4 my-2 bg-opacity-5 backdrop-blur-lg border-gray-400 border-[1px] rounded-md"
    >
    <span class="font-semibold relative before:w-full before:bg-slate-200 before:h-full before:absolute before:rounded-md"
      >{{"x".repeat(props.length || 10)}}</span
    >
    <div class="flex justify-between items-center relative before:w-full before:bg-slate-400 before:h-full before:absolute before:rounded-md">
      <span>2 votes</span>
    </div>
    </div>
    </template>
    <script setup>
        const props = defineProps({
            length: Number
        })
    </script>
  
    