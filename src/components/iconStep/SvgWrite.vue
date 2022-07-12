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
      d="M16 30.9998H10C9.73478 30.9998 9.48043 30.8945 9.29289 30.707C9.10536 30.5194 9 30.2651 9 29.9998V24.4141C9 24.2827 9.02587 24.1527 9.07612 24.0314C9.12638 23.9101 9.20004 23.7998 9.29289 23.707L24.2929 8.70695C24.4804 8.51942 24.7348 8.41406 25 8.41406C25.2652 8.41406 25.5196 8.51942 25.7071 8.70695L31.2929 14.2927C31.4804 14.4803 31.5858 14.7346 31.5858 14.9998C31.5858 15.2651 31.4804 15.5194 31.2929 15.707L16 30.9998Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 12L28 19"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.9999 30.9999H15.9999L9.06348 24.0635"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "SvgWriteIcon",
  props:{
    activeStep:{
      type: Boolean,
    }
  }
};
</script>

<style>
.icon.active path {
  stroke: var(--colorIcon);
  fill: var(--color-fill);
}

.icon.active circle {
  stroke: var(--colorIcon);
  fill: var(--color-fill);
}
</style>
