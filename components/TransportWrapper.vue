<template>
  <div class="transport">
    <div class="transport-provider">
      <p>
        <component :is="linecode" />
      </p>
      <div>
        <p class="railway">{{ line }}</p>
        <p class="station_name">{{ station }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  linecode: string;
  stnum: string;
  line: string;
  station: string;
}

const props = withDefaults(defineProps<Props>(), {
  linecode: "RailTt",
  stnum: "04",
  line: "多摩都市モノレール",
  station: "中央大学・明星大学駅",
});

</script>

<style lang="scss">
.transport {
  background-color: #feffc8;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  p {
    margin: 0;
  }
  .transport-provider{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }
  .railway {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .station_name {
    font-size: 0.9rem;
    font-weight: 500;
  }
}
</style>