<template>
  <div
    class="flex flex-col gap-y-2 rounded-md my-2 border-2 px-3 border-slate-800 py-3 choice"
    @click="choose"
  >
    <div class="flex items-center gap-x-2 justify-between">
      <div class="flex items-center gap-x-2">
        <span
          :class="`w-5 h-5 border-2 border-white inline-block rounded-full choice-circle
          ${props.my_choice ? 'my_choice': ''}
          ${
            loading ? 'loading animate-pulse' : 'animate-none'
          } `"
        ></span
        ><span>{{ props.choice_text }}</span>
      </div>
      <!-- info -->
      <div class="flex gap-x-2">
        <count-up :end-val="props.votes?.length || 0" duration="2"></count-up>
        <span>votes</span>
        .
        <span class="flex gap-1 font-semibold">
          <count-up :end-val="(percentage as number)" duration="2"></count-up> %
        </span>
      </div>
    </div>
    <div class="w-full h-2 bg-gray-600 rounded-md relative overflow-hidden">
      <!-- was bg-blue-500 --->
      <!-- :style="`width:${percentage}%;`" -->
      <div
        style="width: 0%"
        ref="per"
        class="duration-500 transition-all absolute left-0 top-0 bg-yellow-200 h-full rounded-full"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
import { useUserStore } from "~/store";

const user = useUserStore();

const userID = computed(() => user.user.id);
const loading = ref(false);
const per: Ref<HTMLElement | null> = ref(null);

const emit = defineEmits<{
  choose: [id: number];
  dialog: [type: number];
}>();

const props = defineProps({
  choice_text: String,
  id: Number,
  votes: Array,
  percentage: {
    type: Number,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  my_choice: {
    type: Boolean,
    required: true
  },
  has_voted: {
    type: Number,
    required: true
  }
});

onMounted(() => {
  setTimeout(() => {
    const element = per.value;
    if (element) {
      element.style.width = props.percentage + "%";
    }
  }, 500);
});


watch(
  () => props.votes?.length as number,
  () => {
    loading.value = false;
  }
);

watch(
  () => props.percentage as number,
  () => {
    const element = per.value;
    if (element) {
      element.style.width = props.percentage + "%";
    }
  }
);

const choose = () => {
    if (!userID.value) {
    emit('dialog', 1)
    return
  }
    if(props.has_voted) {
        emit('dialog', 2)
        return
    } 
    loading.value = true;
  emit("choose", props.id as number);
};
</script>

<style>
.choice {
  cursor: pointer;
  transition: all 0.5s;
  background: transparent;
  backdrop-filter: blur(0px);
}
.choice:hover {
  background: rgba(4, 96, 234, 0.1);
  /* border: 1px solid #f0f8ff38; */
  /* border-radius: 12px; */
}
.choice-circle.my_choice,
.choice-circle.loading {
  background-color: rgb(254 240 138);
}
.choice:hover .choice-circle,
.choice:hover .choice-circle::before {
  background: rgb(254 240 138);
  /* background: rgb(59 130 246 / 0.9 ) */
}

.choice-circle {
  transition: all 0.6s;
  position: relative;
}
.choice-circle::before {
  transition: all 0.5s;
  display: block;
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: transparent;
}
</style>
