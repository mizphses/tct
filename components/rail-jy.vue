<template>
  <div>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" :width="size" :height="size">
      <path class="cls-1" d="m282.58,0H17.42C8.08,0,.5,7.58.5,16.92v265.16c0,9.34,7.58,16.92,16.92,16.92h265.16c9.34,0,16.92-7.58,16.92-16.92V16.92c0-9.34-7.58-16.92-16.92-16.92Zm-2.58,262.58c0,9.34-7.58,16.92-16.92,16.92H36.92c-9.34,0-16.92-7.58-16.92-16.92V36.42c0-9.34,7.58-16.92,16.92-16.92h226.16c9.34,0,16.92,7.58,16.92,16.92v226.16Z"/>
      <g>
        <path d="m98.98,104.47c2.03.77,4.15,1.16,6.28,1.16,5.79,0,8.98-2.51,8.98-11.01v-45.77h13.52v50.98c0,9.27-6.08,17.57-18.44,17.57-3.96,0-7.05-.39-10.33-1.25v-11.68Z"/>
        <path d="m182.8,116.25v-29.55h-27.04v29.55h-13.52V48.85h13.52v27.23h27.04v-27.23h13.52v67.4h-13.52Z"/>
      </g>
      <text class="cls-2" transform="translate(72.47 239.18)"><tspan x="0" y="0"><slot /></tspan></text>
    </svg>
  </div>
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
  fill: #8cc63f;
}

.cls-2 {
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
  font-size: 139.33px;
  font-weight: 600;
}
</style>