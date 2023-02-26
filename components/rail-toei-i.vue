<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" :width="size" :height="size">
  <g>
    <path class="cls-1" d="m150,0C67.16,0,0,67.16,0,150s67.16,150,150,150,150-67.16,150-150S232.84,0,150,0Zm0,250.25c-55.37,0-100.25-44.88-100.25-100.25s44.88-100.25,100.25-100.25,100.25,44.88,100.25,100.25-44.88,100.25-100.25,100.25Z"/>
    <path d="m137.88,106.87h6v-33.6h-6v-10.26h24.23v10.26h-6v33.6h6v10.26h-24.23v-10.26Z"/>
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
  fill: #184c8b;
}

.cls-2 {
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
  font-size: 110px;
  font-weight: 700;
}
</style>