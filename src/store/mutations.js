import { v4 as uuidv4 } from "uuid";

export default {
  PREV_STEP(state) {
    state.currentStep--;
  },
  CHANGE_INPUT(state, data) {
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.type === "requiredInput") {
          if (item.name == data.name) {
            item.value = data.value;
            item.validate();
          }
        }
      });
    });
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.type === "requiredInput") {
          if (item.value == false) {
            item.success = false;
          } else {
            item.success = true;
          }
        }
      });
    });
  },
  CHANGE_INPUT_FILE(state, data) {
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.type === "singerInfo") {
          if (item.name == data.name) {
            item.value = data.url;
            item.validate();
          }
        }
      });
    });
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.type === "singerInfo") {
          if (item.value == "") {
            item.success = false;
          } else {
            item.success = true;
          }
        }
      });
    });
  },
  CHANGE_INPUT_FORM(state, data) {
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.type === "formInput") {
          item.content.forEach((el) => {
            if (el.type == "text") {
              if (el.name == data.name) {
                el.value = data.value;
                el.validate();
              }
            }
            if (el.type === "radio") {
              el.contentInput.forEach((radioInput) => {
                radioInput.value = false;
                if (radioInput.name == data.name) {
                  el.value = true;
                  radioInput.value = true;
                  el.validate();
                }
              });
            }
            if (el.type === "birdthDay") {
              el.contentInput.forEach((birthDay) => {
                if (birthDay.name == data.name) {
                  birthDay.value = data.value;
                  el.validate();
                }
              });
            }

            if (el.type === "date") {
              if (el.name == data.name) {
                el.value = data.value;
                console.log(el.value);
                el.validate();
              }
            }
            if (el.type === "select") {
              if (el.name == data.name) {
                el.value = data.value;
                el.validate();
              }
            }
            if (el.type === "file") {
              if (el.name == data.name) {
                el.value = data.value;
                el.validate();
              }
            }
          });
        }
        if (item.name == data.parrentInput && item.type === "formInput") {
          item.content.forEach((el) => {
            if (el.type == "search") {
              if (el.name == data.name) {
                el.toggleSearch = true;
                console.log("data", data.value);
                el.value = data.value;
                console.log(el.value);
                el.validate();
              }
            }
          });
        }
      });
    });
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.type === "formInput") {
          item.content.forEach((el) => {
            if (
              el.type == "text" &&
              el.required == true &&
              el.disabled == false
            ) {
              if (el.value == "") {
                el.success = false;
              } else {
                el.success = true;
              }
            }
            if (
              el.type === "radio" &&
              el.required == true &&
              el.disabled == false
            ) {
              if (el.value == true) {
                el.success = true;
              } else {
                el.success = false;
              }
            }
            if (
              el.type === "birdthDay" &&
              el.required == true &&
              el.disabled == false
            ) {
              let check = el.contentInput.every(
                (birdthDay) => birdthDay.value != ""
              );
              if (check) {
                el.value = true;
                el.success = true;
              } else {
                el.success = true;
              }
            }
            if (
              el.type == "date" &&
              el.required == true &&
              el.disabled == false
            ) {
              if (el.value != "") {
                el.success = true;
              } else {
                el.success = false;
              }
            }
            if (
              el.type === "select" &&
              el.required == true &&
              el.disabled == false
            ) {
              if (el.value == "") {
                el.success = false;
              } else {
                el.success = true;
              }
            }
            if (
              el.type === "file" &&
              el.required == true &&
              el.disabled == false
            ) {
              if (el.value != "") {
                el.success = true;
              } else {
                el.success = false;
              }
            }
          });
        }
        if (item.name == data.parrentInput && item.type === "formInput") {
          item.content.forEach((el) => {
            if (
              el.type == "search" &&
              el.required == true &&
              el.disabled == false
            ) {
              if (el.name == data.name) {
                if (el.value == "") {
                  el.success = false;
                } else {
                  el.success = true;
                }
              }
            }
          });
        }
      });
    });
  },
  CHANGE_CHECK_BOX(state, data) {
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.name == data.name) {
          item.content.forEach((el) => {
            if (data.value === "true") {
              if (el.name != "inputcheckbox") {
                el.disabled = false;
                if (el.required == true) {
                  el.success = false;
                }
              }
            } else {
              if (el.name != "inputcheckbox") {
                el.disabled = true;
                if (el.required == true) {
                  el.success = true;
                }
              }
            }
          });
        }
      });
    });
  },
  CHANGE_SEARCH_FORM(state, data) {
    if (state.count == 0) {
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.name == data.nameParrent) {
            item.content.forEach((el) => {
              if (el.name == data.name) {
                el.inputSearch.forEach((p) => {
                  state.searchArray.push(p);
                });
              }
              state.count++;
            });
          }
        });
      });
    }
  },
  CHOSSE_SEARCH_FORM(state, data) {
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.name == data.nameParrent) {
          item.content.forEach((el) => {
            if (el.type == data.type) {
              if (el.name == data.name) {
                el.value = data.value;
                state.searchChosseValue = data.value;
                el.validate();
                el.toggleSearch = false;
              }
            }
          });
        }
      });
    });
  },
  CREATE_ITEM(state, data) {
    state.fieldSteps[state.currentStep - 1].forEach((element) => {
      element.listInfo.forEach((item) => {
        if (item.name == data.nameParrent) {
          item.content.push({
            value: "",
            name: uuidv4(),
            required: true,
            requiredTitle: "姓",
            type: "text",
            success: false,
            placeholder: "入力してください",
            disabled: false,
            validate() {
              if (this.value === "") {
                this.error = true;
                this.message = "The field is required!";
                return;
              } else {
                this.error = false;
                this.message = "";
              }
            },
            error: false,
            message: "",
            margin_item: false,
          });
        }
      });
    });
  },
  NEXT_STEP(state) {
    state.currentStep++;
  },

  INCREASE_STEP(state, data) {
    if (data.currentStep == state.currentStep) {
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.type === "requiredInput") {
            if (item.success === false) {
              item.validate();
            }
          }
        });
      });
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.type === "requiredInput") {
            if (item.success === true) {
              state.currentStep++;
            }
          }
        });
      });
    }

    if (data.currentStep == state.currentStep) {
      if (
        state.fieldSteps[state.currentStep - 1].every((element) => {
          return element.listInfo.every((item) => {
            if (item.type === "formInput") {
              return item.content.every((el) => el.success == true);
            }
          });
        })
      ) {
        state.currentStep++;
      }

      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.type === "formInput") {
            item.content.forEach((el) => {
              if (
                el.success === false &&
                el.required == true &&
                el.disabled != true
              ) {
                el.validate();
              }
            });
          }
        });
      });
    }
  },
};
