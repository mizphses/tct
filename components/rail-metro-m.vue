<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="3rem" height="3rem">
  <g>
    <path class="cls-1" d="m150,0C67.16,0,0,67.16,0,150s67.16,150,150,150,150-67.16,150-150S232.84,0,150,0Zm0,250.25c-55.37,0-100.25-44.88-100.25-100.25s44.88-100.25,100.25-100.25,100.25,44.88,100.25,100.25-44.88,100.25-100.25,100.25Z"/>
    <path d="m119.98,114.77l7.9-46.54h11.97l9.32,24.81,9.26-24.81h11.97l7.9,46.54h-12.04l-4.01-26.79-10.99,26.79h-4.81l-10.43-26.79-4.01,26.79h-12.04Z"/>
  </g>
  <text class="cls-2" transform="translate(87.21 217.05)"><tspan x="0" y="0"><slot /></tspan></text>
</svg>
</template>

<style>
  .cls-1 {
    fill: red;
  }

  .cls-2 {
    font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
    font-size: 110px;
    font-weight: 700;
  }
</style>