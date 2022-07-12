<template>
  <div class="button-accept" @click="increaseStep()">
    <span class="button-title">入社手続きの入力に進む</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ButtonVue",
  props: {
    nameFile: {
      type: String,
    },
  },
  computed: {
    ...mapState(["currentStep"]),
  },
  methods: {
    increaseStep() {
      this.$store.dispatch("increaseStep", {
        name: this.nameFile,
        currentStep: this.currentStep,
      });
    },
  },

  watch: {
    // nameFile(){
    //     console.log('thay doi name',this.nameFile);
    // }
  },
};
</script>

<style>
.button-accept {
  color: var(--color-fill);
  margin-top: 16px;
  padding: 12px;
  border: 2px solid var(--color-fill);
  border-radius: 4px;
  transition: 0.4s ease;
  cursor: pointer;
}
.button-title {
  font-size: 16px;
  font-weight: 500;
}
.button-accept:hover {
  color: white;
  border: 2px solid var(--colorIcon);
  background-color: var(--colorIcon);
}
</style>
