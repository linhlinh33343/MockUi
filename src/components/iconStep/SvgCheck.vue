<template>
  <svg
    class="icon"
    :class="[activeStep?'active':'']"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#DCDCDC" />
    <path
      d="M31 14.001L17 28.0004L10 21.001"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {

  name: "StatusIcon",
  props:{
    activeStep:{
      type: Boolean,
    }
  }

};
</script>

<style scoped>
.icon.active path {
  stroke: var(--colorIcon);
  fill: var(--color-fill);
}

.icon.active circle {
  stroke: var(--colorIcon);
  fill: var(--color-fill);
}
</style>
