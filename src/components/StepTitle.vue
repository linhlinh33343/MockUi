<template>
  <div>
    <div v-for="field in getListfield" :key="field">
      <div class="stepList">
        <div class="prevStep" @click="prevStep()" v-if="currentStep != 1">
          <img src="../assets/arrowLeft.svg" alt="" />
          <span>雇用契約に戻る</span>
        </div>
        <span class="step-title">{{ field.title }}</span>
        <div class="step-icon">
          <div class="step-icon__item" @change="test()" v-for="length in getListfieldsLength" :key="length" :class="[length <= currentStep ? 'active' : '']">
            <SvgWrite v-if="length % 2 === 0" :activeStep="length <= currentStep" />
            <SvgCheckVue v-else :activeStep="length <= currentStep" />
          </div>
        </div>
        <div class="step-date">
          <img src="../assets/calendarIcon.svg" alt="" />
          <span>2021/09/01までご登録ください</span>
        </div>
      </div>
      <WarningSub />
      <ListInfo :field="field" />
      <SupportVue />
      <ButtonVue  />
    </div>
  </div>
</template>
<script>
import SvgCheckVue from "./iconStep/SvgCheck.vue";
import SvgWrite from "./iconStep/SvgWrite.vue";
import WarningSub from "./WarningStep/WarningSubmit.vue";
import ListInfo from "./ListInfo.vue";
import SupportVue from "./WarningStep/SupportStep.vue";
import ButtonVue from "./ButtonSub.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "StepTitleVue",
  data(){
    return {
       
    }
  },
  components: {
    SvgCheckVue,
    SvgWrite,
    WarningSub,
    ListInfo,
    SupportVue,
    ButtonVue,
  },

  computed: {
    ...mapState(["currentStep"]),
    ...mapGetters(["getListfield", "getListfields", "getListfieldsLength"]),
  },
  methods: {
    prevStep() {
      this.$store.dispatch("prevStep");
    },
    // nameInputFile(name){
   
    //   this.nameFile=name;
    // },
    // nameInputForm(name){
    //   this.nameitemForm=name;
    //   console.log(this.nameitemForm);
    // }
  },
  watch: {},
};
</script>

<style>
.stepList {
  margin-bottom: 20px;
}
.prevStep {
  margin-bottom: 8px;
}
.step-title {
  font-size: 24px;
  display: flex;
  margin-bottom: 24px;
}
.step-icon {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.step-icon__item {
  position: relative;
}
.step-icon__item:not(:first-child)::after {
  position: absolute;
  content: "";
  height: 3px;
  width: calc((var(--widthWrapper) / 5) + 20px);
  background-color: #dcdcdc;
  top: 50%;
  transform: translate(-50%);
  left: -100%;
  z-index: -1;
}

.step-icon__item.active:not(:first-child)::after {
  background-color: var(--color-fill);
}
.step-date {
  display: flex;
  justify-content: start;
  align-items: center;
}
.step-date img {
  margin-right: 10px;
}
</style>
