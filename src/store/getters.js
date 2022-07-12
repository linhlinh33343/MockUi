export default {
    getListfields: (state) => state.fieldSteps,
    getListfieldsLength: (state) => state.fieldSteps.length,
    getListfield: (state) => state.fieldSteps[state.currentStep - 1],
  }