export default {
  prevStep({ commit }) {
    commit("PREV_STEP");
  },
  changeInput({ commit }, data) {
    commit("CHANGE_INPUT", data);
  },
  increaseStep({ commit }, data) {
    commit("INCREASE_STEP", data);
  },
  changeInputFile({ commit }, data) {
    commit("CHANGE_INPUT_FILE", data);
  },
  changeInputForm({ commit }, data) {
    commit("CHANGE_INPUT_FORM", data);
  },
  changeCheckBox({ commit }, data) {
    commit("CHANGE_CHECK_BOX", data);
  },
  changeSearch({ commit }, data) {
    commit("CHANGE_SEARCH_FORM", data);
  },
  chosseSearch({ commit }, data) {
    commit("CHOSSE_SEARCH_FORM", data);
  },
  createItem({ commit }, data) {
    commit("CREATE_ITEM", data);
  },
  nextStep({ commit }) {
    commit("NEXT_STEP");
  },
};
