<template>
  <div class="list-info">
    <div v-for="list in field.listInfo" :key="list">
      <div
        class="listInfo-item"
        v-if="list.type === 'infomation'"
        :class="[list.margin_item ? 'marginTrue' : '']"
      >
        <label class="infomation-label">{{ list.infoTitle }}</label>
        <div
          v-for="item in list.content"
          :key="item"
          class="infomation-content"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
      <div
        class="listInfo-item"
        v-if="list.type === 'fixation'"
        :class="[list.margin_item ? 'marginTrue' : '']"
      >
        <label class="infomation-label">{{ list.infoTitle }}</label>
        <div class="item-fixation">
          <div
            v-for="(item, index) in list.content"
            :key="item"
            class="fixation-content"
          >
            <span class="fixation-number">{{ index + 1 }}</span>
            <div class="fixation-item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="listInfo-item" v-if="list.type === 'requiredInput'">
        <div class="form-group" v-for="item in list.content" :key="item">
          <span class="requiredTitle">必須</span>
          <div class="form-control" v-if="item.value == 'checkbox'">
            <input
              class="input-checkbox"
              :id="item"
              :type="item.value"
              v-model="checked"
              :value="list.name"
              ref="myInput"
            />
            <label class="label-checkbox" :for="item">{{ item.name }}</label>
          </div>
          <span class="error">{{ list.message }}</span>
        </div>
      </div>
      <div
        class="listInfo-item"
        v-if="list.type === 'formInput'"
        :class="[list.margin_item ? 'marginTrue' : '']"
      >
        <label class="infomation-label">{{ list.infoTitle }}</label>
        <label class="infomation-guide" v-if="list.guide != ''">{{
          list.guide
        }}</label>
        <div
          class="form-group"
          v-for="item in list.content"
          :key="item"
          :class="[item.error ? 'error' : '', item.disabled ? 'disable' : '']"
        >
          <span class="requiredTitle" v-if="item.required"
            ><span v-if="item.subrequired" class="sub-required">どちらか</span
            >必須</span
          >
          <span class="reqiredHeading" v-if="item.requiredTitle">{{
            item.requiredTitle
          }}</span>
          <span class="subheading" v-if="item.subheading != ''">{{
            item.subheading
          }}</span>
          <div
            class="form-control"
            v-if="item.type == 'text'"
            :class="[item.error ? 'error' : '']"
            :disabled="item.disabled"
          >
            <input
              class="text-input"
              type="text"
              :placeholder="item.placeholder"
              :value="item.value"
              @input="setValueInput($event, item.name)"
              :disabled="item.disabled"
            />
          </div>
          <div
            class="form-control list-radio"
            v-if="item.type == 'radio'"
            :class="[item.error ? 'error' : '']"
          >
            <div
              class="item-radio"
              v-for="radioItem in item.contentInput"
              :key="radioItem"
            >
              <input
                :id="radioItem.name"
                class="radio-input"
                type="radio"
                :name="item.name"
                @change="setValueInput($event, radioItem.name)"
                :value="true"
              />
              <label class="label-checkbox" :for="radioItem.name">{{
                radioItem.title
              }}</label>
            </div>
          </div>
          <div class="birdth-control" v-if="item.type == 'birdthDay'">
            <div
              class="item-birdth"
              v-for="itemBirdth in item.contentInput"
              :key="itemBirdth"
            >
              <div
                class="birdth-input form-control"
                :class="[item.error ? 'error' : '']"
              >
                <input
                  type="number"
                  :placeholder="itemBirdth.placeholder"
                  @input="setValueInput($event, itemBirdth.name)"
                  :value="itemBirdth.value"
                />
              </div>
              <span class="birdth-and">{{ itemBirdth.and }}</span>
            </div>
          </div>
          <div
            class="form-control form-date"
            :class="[item.error ? 'error' : '']"
            v-if="item.type == 'date'"
            :disabled="item.disabled"
          >
            <input
              :id="item.name"
              :value="item.value"
              class="text-input"
              :type="item.type"
              placeholder=""
              @change="setValueInput($event, item.name)"
              :disabled="item.disabled"
            />
          </div>
          <div
            class="form-control select-control"
            :class="[item.error ? 'error' : '']"
            v-if="item.type == 'select'"
            :disabled="item.disabled"
          >
            <select
              class="select-form"
              :id="item.name"
              :value="item.value"
              name=""
              @change="setValueInput($event, item.name)"
              :disabled="item.disabled"
            >
              <option class="" disabled selected hidden value="">
                選択してください
              </option>
              <option
                class=""
                v-for="option in item.options"
                :key="option.id"
                :value="option.name"
              >
                {{ option.name }}
              </option>
            </select>
          </div>

          <div v-if="item.type == 'createForm'">
            <div class="createForm-control">
              <img
                class="createForm-icon"
                src="../assets/createIcon.svg"
                alt=""
              /><button class="createForm-link" @click="createItem(list.name)">
                学歴を追加する
              </button>
            </div>
          </div>
          <div v-if="item.type == 'file'">
            <div v-if="item.type" class="info-img">
              <div :class="[item.value != '' ? 'infomation-img' : '']">
                <img
                  class="img-default"
                  v-if="item.value == '' && item.img"
                  src="../assets/imgPerson.svg"
                  alt=""
                />
                <img
                  v-if="item.value"
                  class="infomation-link"
                  :src="item.value"
                  alt=""
                />
              </div>
              <label
                class="form-group form-inputFile"
                :class="[item.error ? 'error' : '']"
                :disabled="item.disabled"
              >
                <div><img src="../assets/Cloud.svg" alt="" /></div>
                <div class="inputFile-title">
                  <p>ファイルをドラッグ&ドロップ</p>
                  <p>ファイルをドロップするか</p>
                  <p>ファイルを参照する</p>
                </div>
                <input
                  hidden
                  :type="item.type"
                  @change="setValueInput($event, item.name, item.type)"
                  :disabled="item.disabled"
                />
              </label>
            </div>
          </div>
          <div class="form-control" v-if="item.type == 'checkbox'">
            <input
              class="input-checkbox"
              id="check"
              type="checkbox"
              :value="item.value"
              v-model="item.value"
              @change="setCheckBox($event, list.name)"
            />
            <label class="label-checkbox" for="check"
              >{{ item.placeholder }}
            </label>
          </div>
          <div
            class="search-group"
            :class="[item.error ? 'error' : '']"
            v-if="item.type == 'search'"
            :disabled="item.disabled"
          >
            <div
              class="form-control search-control"
              :class="[item.error ? 'error' : '']"
            >
              <label :for="item.name" class="search-icon"
                ><img
                  src="../assets/searchIcon.svg"
                  alt=""
                  :disabled="item.disabled"
              /></label>
              <input
                :id="item.name"
                type="text"
                class="search-input"
                :placeholder="item.placeholder"
                @input="
                  changeSearch($event, item.name, list.name),
                    setValueInput($event, item.name, item.type, list.name)
                "
                :disabled="item.disabled"
                :value="item.value"
              />
            </div>
            <div
              class="search-result"
              v-if="
                item.type == 'search' && valueSearch != '' && item.toggleSearch
              "
            >
              <div
                class="item-search-result"
                v-for="itemSearch in filteredProducts"
                :key="itemSearch"
                @click="
                  chosseSearch(itemSearch.name, item.name, item.type, list.name)
                "
              >
                {{ itemSearch.name }}
              </div>
            </div>
          </div>
          <div class="birdth-control" v-if="item.type == 'address'">
            <div
              class="item-birdth"
              v-for="itemBirdth in item.contentInput"
              :key="itemBirdth"
            >
              <div class="birdth-input">
                <input
                  class="form-control"
                  :class="[item.error ? 'error' : '']"
                  :type="itemBirdth.type"
                  :placeholder="itemBirdth.placeholder"
                  v-if="itemBirdth.type === 'text'"
                />
                <button
                  class="form-control btn-input"
                  v-if="itemBirdth.type === 'button'"
                  :type="itemBirdth.type"
                >
                  {{ itemBirdth.title }}
                </button>
              </div>
              <span class="birdth-and">{{ itemBirdth.and }}</span>
            </div>
          </div>
          <span class="error">{{ item.message }}</span>
        </div>
      </div>
      <div v-if="list.type === 'confirmInfo'">
        <div class="confirm-group" v-if="list.checkApp">
          <h1 class="confirm-title">
            入社手続きの申請ありがとうございました。
          </h1>
          <div class="confirm-icon">
            <img src="../assets/confirmIcon.svg" alt="" />
          </div>
          <div class="sub-confirm-title">
            <p>申請がありがとうございました</p>
            <p>入社手続きの承認をお待ちください。</p>
          </div>
          <button class="confirm-btn">申請した内容を見る</button>
        </div>
        <div v-if="list.checkConfirm">
          <div class="confirm-model-group">
            <h2 class="model-title">入社手続きの申請をします</h2>
            <div class="model-warning">
              <div class="model-warning-title">
                <img src="../assets/warningModelIcon.svg" alt="" />
                <span>ご確認ください</span>
              </div>
              <div class="model-warning-content">
                <p>入力ありがとうございました。</p>
                <p>登録した内容を確認する場合は「戻る」を選択してください</p>
                <p>手続きを申請する場合は「申請する」を選択してください。</p>
              </div>
            </div>
            <div class="model-btn">
              <button class="btn" @click="confirmInfomation()">戻る</button>
              <button class="btn" @click="nextStep()">申請する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListInfoVue",
  data() {
    return {
      valueCheckbox: false,
      valueSearch: "",
    };
  },
  props: {
    field: {
      type: Object,
    },
  },
  computed: {
    ...mapState(["searchArray", "searchChosseValue", "toggleSearch"]),

    checked: {
      set(value) {
        let name = this.$refs.myInput[0].value;
        this.$store.dispatch("changeInput", { name, value });
      },
    },

    checkCheckbox: {
      set(value) {
        this.valueCheckbox = value;
      },
    },
    filteredProducts() {
      return this.searchArray.filter((p) => {
        return (
          p.name.toLowerCase().indexOf(this.valueSearch.toLowerCase()) != -1
        );
      });
    },
  },
  methods: {
    setValueInputFile(e, name) {
      var url = URL.createObjectURL(e.target.files[0]);
      this.$store.dispatch("changeInputFile", { name, url });
      // this.$emit('nameInputFile',name)
    },
    setValueInput(e, name, type, parrentInput) {
      if (type === "file") {
        var url = URL.createObjectURL(e.target.files[0]);
        this.$store.dispatch("changeInputForm", { name, value: url });
      } else {
        this.$store.dispatch("changeInputForm", {
          name,
          value: e.target.value,
          parrentInput,
        });
      }
    },
    setCheckBox(e, name) {
      this.$store.dispatch("changeCheckBox", { name, value: e.target.value });
    },
    changeSearch(e, name, nameParrent) {
      this.valueSearch = e.target.value;
      this.$store.dispatch("changeSearch", {
        name: name,
        value: e.target.value,
        nameParrent,
      });
    },

    chosseSearch(value, name, type, nameParrent) {
      this.$store.dispatch("chosseSearch", {
        name,
        value: value,
        type,
        nameParrent,
      });
      this.valueSearch = "";
    },
    createItem(nameParrent) {
      this.$store.dispatch("createItem", { nameParrent });
    },
    confirmInfomation() {
      this.$store.dispatch("prevStep");
    },
    nextStep() {
      this.$store.dispatch("nextStep");
    },
  },
  watch: {
    // searchArray(){
    //    console.log(this.searchArray);
    // }
  },
};
</script>

<style>
.form-group.disable .requiredTitle {
  background-color: #999999;
}
.form-group.disable {
  opacity: 0.5;
}
.form-group.disable input:disabled label {
  margin-bottom: 0;
}
.label-checkbox {
  display: inline-block;
  font-size: 14px;

  margin: 0;
}
.list-info {
  margin-top: 16px;
}
.listInfo-item {
  width: 100%;
  background-color: var(--backGround-primary);
  margin-bottom: 16px;
  text-align: start;
  padding: 16px;
}
label.infomation-label {
  font-size: 18px;
}
.infomation-content {
  padding: 8px;
  background-color: white;
  font-size: 14px;
  margin: 8px 0;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 1px #00000014;
}
.listInfo-item.marginTrue {
  margin-bottom: 0;
  padding: 16px 16px 1px 16px;
}
.requiredTitle {
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 1px 9px;
  border-radius: 3px;
}
.form-control {
  margin-top: 8px;
  background-color: white;
  padding: 8px 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid transparent;
  box-shadow: 0px 0px 2px 1px #00000014;
}
.input-checkbox {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
}
.label-checkbox {
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 0;
}
.form-control.error {
  border: 1px solid #e74343;
}
.form-control.error ::placeholder {
  color: #f04e4e;
  opacity: 1;
}
.error {
  font-size: 14px;
  color: #f04e4e;
}
span.fixation-number {
  margin-right: 10px;
}
.fixation-content {
  display: flex;
  font-size: 14px;
  border-radius: 2px;
}
.item-fixation {
  padding: 8px;
  background-color: white;
  box-shadow: 0px 0px 2px 1px #00000014;
}
.fixation-item {
  font-weight: 500;
  font-size: 14px;
}
label.infomation-guide {
  font-size: 14px;
  margin-top: 8px;
}
.infomation-img {
  text-align: center;
  margin-bottom: 20px;
}
.form-group {
  margin-top: 20px;
}
label.form-group.form-inputFile {
  box-shadow: 0px 0px 2px 1px #00000014;
  background-color: white;
  padding: 12px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-top: 4px;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
}
label.form-group.form-inputFile.error {
  border: 1px solid red;
}
.inputFile-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px;
}
.inputFile-title p {
  margin: 0;
}
.inputFile-title p:first-child {
  font-weight: 600;
}
img.infomation-link {
  width: 40%;
}
.required-content {
  font-size: 14px;
}
.requiredTitle {
  margin-right: 8px;
}
span.reqiredHeading {
  font-size: 14px;
}
input.text-input {
  width: 100%;
  padding: 3px;
  border: none;
  outline: none;
}
.form-control.list-radio.error {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.radio-input {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
}
.item-radio:not(:first-child) {
  border-left: 1px solid rgb(211, 183, 183);
}
.item-birdth {
  display: flex;
  justify-content: center;
  align-items: center;
}
.birdth-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.birdth-input input {
  width: 100%;
  border: none;
  outline: none;
}
.birdth-and {
  margin: 0 8px;
}
.birdth-input.form-control {
  margin: 0;
}
label.infomation-label {
  display: block;
}
span.subheading {
  display: block;
  font-size: 13px;
}
input::placeholder {
  font: 14px sans-serif;
}
input[type="date"]:before {
  color: lightgray;
  content: attr(placeholder);
}
.form-date input::-webkit-calendar-picker-indicator {
  background-image: url("../assets/dateIcon.svg");
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.form-date {
  width: 30%;
}
.form-date input.text-input {
  font-size: 14px;
  padding: 0;
}
select.form-select {
  width: 100%;
  cursor: pointer;
  padding: 5px 5px 5px 0;
  border: none;
  font-size: 14px;
  outline: none;
}
.search-icon {
  cursor: pointer;
}
select.form-select option::before {
  width: 100%;
}
.createForm-control {
  display: flex;
  justify-content: start;
  align-items: center;
}

img.createForm-icon {
  cursor: pointer;
  margin-right: 2px;
}
.search-input {
  padding: 3px;
  outline: none;
  border: none;
  width: 100%;
  font-size: 14px;
}
.search-icon {
  transform: translateY(15%);
}
.search-control {
  /* position: relative; */
}
.search-result {
  background-color: white;
  transition: 0.5s ease;
  transform: translateY(3px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 0px 2px 1px #00000014;
  cursor: pointer;
}
.item-search-result {
  padding: 5px 0px 2.5px 16px;
}
.item-search-result:not(:last-child) {
  border-bottom: 0.5px solid #eddfdf;
  cursor: pointer;
}
.item-search-result:hover {
  background-color: rgb(238, 211, 215);
}
option:first-child {
  color: #c7c6c6;
  font-size: 14px;
}
.btn-input {
  border-radius: 25px;
  background-color: #7979c5;
  width: 110px;
  color: white;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
}
.btn-input:hover {
  opacity: 0.8;
}
span.sub-required {
  background-color: white;
  color: red;
  padding: 0px 5px;
  margin-right: 10px;
}
img.img-default {
  margin-bottom: 10px;
}
.info-img {
  text-align: center;
}
button.createForm-link {
  border: none;
  outline: none;
  cursor: pointer;
  color: #5ba7d6;
}
.confirm-group {
  width: 714px;
  margin-top: 150px;
}
.confirm-title {
  font-size: 32px;
  font-weight: 500;
}
.confirm-icon {
  margin-top: 20px;
}
.sub-confirm-title {
  margin: 33px;
}
.sub-confirm-title p {
  margin: 0;
  font-weight: 500;
}
button.confirm-btn {
  padding: 5px 10px;
  border: 1px solid #007bc3;
  border-radius: 5px;
  color: #007bc3;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}
button.confirm-btn:hover {
  opacity: 0.7;
}
.confirm-model-group {
  box-shadow: 0px 0px 2px 1px #00000014;

  padding: 30px 45px;
}
h2.model-title {
  font-size: 24px;
  text-align: start;
}
.model-warning {
  background-color: #f1f2f7;
  padding: 10px 20px;
}
.model-warning-title {
  display: flex;
  justify-content: start;
  align-items: center;
}
.model-warning-title span {
  font-size: 18px;
  margin-left: 10px;
  font-weight: 600;
}
.model-warning-content {
  margin-top: 4px;
}
.model-warning-content p {
  margin: 0;
  text-align: start;
  font-size: 14px;
}
.model-btn {
  margin-top: 24px;
  text-align: end;
}
.btn {
  border: 1px solid #6563ff;
  width: 125px;
}
.model-btn button:nth-child(1) {
  background-color: white;

  color: #6563ff;
  font-size: 16px;
  margin-right: 10px;
}
.model-btn button:nth-child(2) {
  background-color: #6563ff;

  color: white;
  font-size: 16px;
  margin-right: 10px;
}
.form-control.select-control {
  padding: 0;
  overflow: hidden;
}
.select-form {
  width: 100%;
  border: none;
  outline: none;
  padding: 14px;
}
</style>
