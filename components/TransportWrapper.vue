<template>
  <div class="transport-wrap">
    <div class="transport" @click="toggleInfo">
      <div class="transport-provider">
        <p>
          <component :is="linecode" :size="componentSize">{{ stnum }}</component>
        </p>
        <div>
          <p class="railway">{{ line }}</p>
          <p class="station_name">{{ station }}</p>
        </div>
      </div>
      <div class="transport_info">
        <p class="time">次は<span class="time-num">3</span>分後</p>
        <component :is="viewInfo ? IconChevronUp : IconChevronDown" size="2rem" />
      </div>
    </div>
    <div v-if="viewInfo">
      <hr />
      <div class="no_gtfs" v-if="noGtfs">
        <h4 style="display:flex;"><IconAlertTriangle /> 注意</h4>
        <p>運行会社からGTFSデータの提供がないため, 遅延情報やリアルタイム情報の提供ができません。</p>
      </div>
      <h3 class="heading_info" v-else>運行情報</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { IconChevronDown, IconChevronUp, IconAlertTriangle } from '@tabler/icons-vue'

interface Props {
  linecode: string;
  stnum: string;
  line: string;
  station: string;
  noGtfs?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  linecode: "rail-tt",
  stnum: "04",
  line: "多摩都市モノレール",
  station: "中央大学・明星大学駅",
  noGtfs: false,
});

const linecode = resolveComponent(props.linecode);

const { width, height } = useWindowSize()

const componentSize = computed(() => {
  if (width.value < 768) {
    return "1.8rem"
  } else {
    return "3rem"
  }
})

const viewInfo = ref(false);

const toggleInfo = () => {
  viewInfo.value = !viewInfo.value;
}
</script>

<style lang="scss" scoped>
.transport-wrap {
  background-color: #ffffff;
  padding: 1rem 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
  }
  .transport {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    p {
      margin: 0;
    }
    .transport-provider{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      @media (max-width: 768px) {
        gap: 0.2rem;
      }
    }
    .railway {
      font-size: 1.5rem;
      font-weight: 700;
      @media (max-width: 768px) {
        font-family: 'lgt-cond', sans-serif;
        letter-spacing: -0.15em;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .station_name {
      font-size: 1rem;
      @media (max-width: 768px) {
        font-family: 'lgt-cond', sans-serif;
        font-weight: 400;
        letter-spacing: -0.15em;
        font-size: 0.7rem;
      }
    }
    .transport_info{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.3rem;
      @media (max-width: 768px) {
        gap: 0.1rem;
      }
      .time{
        font-size: 1rem;
        font-weight: 700;

        @media (max-width: 768px) {
          font-size: 0.7rem;
        }
        .time-num{
          font-size: 1.4rem;
          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
  .heading_info{
    font-size: 1.5rem;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .no_gtfs{
    background-color: #d7f8f4;
    border: 1px solid #c6daf5;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    h4{
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0.5rem 0;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      svg{
        margin-right: 0.5rem;
      }
    }
    p{
      font-size: 1rem;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
}
</style>