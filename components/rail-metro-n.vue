<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" :width="size" :height="size">
  <g>
    <path class="cls-1" d="m150,0C67.16,0,0,67.16,0,150s67.16,150,150,150,150-67.16,150-150S232.84,0,150,0Zm0,250.25c-55.37,0-100.25-44.88-100.25-100.25s44.88-100.25,100.25-100.25,100.25,44.88,100.25,100.25-44.88,100.25-100.25,100.25Z"/>
    <path d="m125.91,114.77v-46.54h12.1l22.34,28.45v-28.45h12.04v46.54h-12.04l-22.34-28.45v28.45h-12.1Z"/>
  </g>
  <text class="cls-2" transform="translate(87.21 217.05)"><tspan x="0" y="0"><slot /></tspan></text>
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
  .cls-1 {
    fill: #00a99d;
  }

  .cls-2 {
    font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
    font-size: 110px;
    font-weight: 700;
  }
</style>