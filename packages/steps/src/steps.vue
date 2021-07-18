<template>
  <div class="up-steps">
    <div class="up-steps-line"></div>
    <div
      class="up-step"
      v-for="index in count"
      :key="index"
      :style="{ color: active >= index ? activeColor : defaultColor }"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
import "./steps.css";
export default {
  name: "UpSteps",
  props: {
    count: {
      type: Number,
      default: 3,
    },
    active: {
      type: Number,
      default: 0,
    },
    activeColor: {
      type: String,
      default: 'red',
    },
    defaultColor: {
      type: String,
      default: 'grey',
    },
  },
};
</script>

<style>
</style>