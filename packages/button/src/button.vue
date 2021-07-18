<template>
  <div>
    <button @click="handleClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "UpButton",
  methods: {
    handleClick(evt) {
      evt.preventDefault();
      this.$emit("click", evt);
    },
  },
};
</script>

<style>
</style>
