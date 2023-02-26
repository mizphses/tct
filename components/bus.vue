<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"></path>
   <path d="M16 5l1.5 7l4.5 0"></path>
   <path d="M2 10l15 0"></path>
   <path d="M7 5l0 5"></path>
   <path d="M12 5l0 5"></path>
</svg>
</template>

<script setup lang="ts">
interface Props {
  size: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "3rem",
});
</script>

<style scoped>
.cls-1, .cls-2 {
  fill: #0084ff;
}

.cls-2 {
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
  font-size: 112.18px;
  font-weight: 600;
}
</style>
