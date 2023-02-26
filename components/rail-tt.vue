<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" :width="size" :height="size">
    <path class="cls-1" d="m230.2-.5H70.8C31.97-.5.5,30.97.5,69.8v159.4c0,38.83,31.47,70.3,70.3,70.3h159.4c38.83,0,70.3-31.47,70.3-70.3V69.8C300.5,30.97,269.03-.5,230.2-.5Zm50.8,276.04H20V24.46h261v251.08Z"/>
  <g>
    <path d="m110.37,120v-58.55h-19.91v-10.95h53.77v10.95h-19.91v58.55h-13.94Z"/>
    <path d="m175.69,120v-58.55h-19.91v-10.95h53.77v10.95h-19.91v58.55h-13.94Z"/>
  </g>
  <text class="cls-2" transform="translate(66.26 246.55)"><tspan x="0" y="0"><slot /></tspan></text>
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
    fill: #006837;
  }

  .cls-2 {
    font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
    font-size: 147.44px;
    font-weight: 600;
    fill: #000;
  }
</style>