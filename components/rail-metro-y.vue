<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="3rem" height="3rem">
  <g>
    <path class="cls-1" d="m150,0C67.16,0,0,67.16,0,150s67.16,150,150,150,150-67.16,150-150S232.84,0,150,0Zm0,250.25c-55.37,0-100.25-44.88-100.25-100.25s44.88-100.25,100.25-100.25,100.25,44.88,100.25,100.25-44.88,100.25-100.25,100.25Z"/>
    <path d="m142.94,92.42l-16.97-24.19h14.44l8.64,12.71,8.58-12.71h14.44l-17.04,24.19v22.34h-12.1v-22.34Z"/>
  </g>
  <text class="cls-2" transform="translate(87.21 217.05)"><tspan x="0" y="0"><slot /></tspan></text>
</svg>
</template>

<style>
.cls-1 {
  fill: #c69c6d;
}

.cls-2 {
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
  font-size: 110px;
  font-weight: 700;
}
</style>