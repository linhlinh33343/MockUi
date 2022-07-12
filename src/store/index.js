import { createStore } from "vuex";

const store = createStore({
  state: {
    currentStep: 2,
    checkSuccessForm1: false,

    fieldSteps: [
      // step 1
      [
        // field
        {
          idStep: 1,
          title: "雇用契約について",
          listInfo: [
            // list
            // {
            //   type: "infomation",
            //   infoTitle: "雇用契約期間の定め",
            //   success: false,
            //   content: [
            //     // item
            //     { name: "", value: "契約期間の定め：なし" }
            //   ],
            //   margin_item: false,
            // },
            // {
            //   type: "infomation",
            //   infoTitle: "勤務地",
            //   success: false,
            //   content: [
            //     {
            //       name: "事業所名",
            //       value: "テキストテキストテキストテキストテキストテキスト",
            //     },
            //     {
            //       name: "事業所在地",
            //       value: "テキストテキストテキストテキストテキストテキスト",
            //     },
            //     {
            //       name: "仕事内容",
            //       value: "テキストテキストテキストテキストテキストテキスト",
            //     },
            //   ],
            //   margin_item: false,
            // },
            // {
            //   type: "infomation",
            //   infoTitle: "勤務条件",
            //   success: false,
            //   content: [
            //     { name: "勤務区分", value: "固定勤務" },
            //     {
            //       name: "勤務開始時間 09:00 勤務終了時間:18:00 休憩時間: 120分",
            //       value:
            //         "勤務開始時間: 09:00 勤務終了時間:18:00 休憩時間: 120分",
            //     },
            //     {
            //       name: "所定労働時間 (1日) : 8時間 所定労働時間 (1週間平均) : 40時間",
            //       value:
            //         "所定労働時間 (1日) : 8時間 所定労働時間 (1週間平均) : 40時間",
            //     },
            //   ],
            //   margin_item: false,
            // },
            // {
            //   type: "infomation",
            //   infoTitle: "報酬条件",
            //   success: false,
            //   content: [
            //     { name: "等級", value: "1等級" },
            //     {
            //       name: "",
            //       value:
            //         "基本給: 200,000円 年齢給: 200,000円 職能給: 200,000円",
            //     },
            //     {
            //       name: "",
            //       value:
            //         "調整給: 200,000円 調整給1: 200,000円 調整給2: 200,000円",
            //     },
            //   ],
            //   margin_item: true,
            // },
            // {
            //   type: "infomation",
            //   infoTitle: "手当",
            //   success: false,
            //   content: [
            //     { name: "", value: "ライフプラン手当: 200,000円" },
            //     {
            //       name: "",
            //       value:
            //         "役職手当: 200,000円 役職手当2: 200,000円 役職手当3: 200,000円",
            //     },
            //     {
            //       name: "",
            //       value:
            //         "資格手当: 200,000円 住宅地域手当: 200,000円 管理薬剤師手当: 200,000円",
            //     },
            //     {
            //       name: "",
            //       value:
            //         "職務手当：200,000円 職務手当2：200,000円 職務手当3：200,000円",
            //     },
            //     {
            //       name: "",
            //       value:
            //         "ブロック手当：200,000円 フィールドマネジャー手当：200,000円 ",
            //     },
            //     {
            //       name: "",
            //       value: "単身赴任手当：200,000円 社員区分手当：200,000円 ",
            //     },
            //     { name: "合計支給額", value: "200,000円" },
            //   ],
            //   margin_item: false,
            // },
            // {
            //   type: "infomation",
            //   infoTitle: "賃金の締日・支払日",
            //   success: false,
            //   content: [{name:'',value:"賃金締日：毎月末日 賃金支払日：当月25日"}],
            //   margin_item: false,
            // },
            // {
            //   type: "infomation",
            //   infoTitle: "制度",
            //   success: false,
            //   content: [
            //     { name: "", value: "昇給：あり 賞与：あり 退職金：あり" },
            //     {
            //       name: "",
            //       value:
            //         "健康保険：加入する 厚生年金保険：加入する 雇用保険：加入する",
            //     },
            //     {
            //       name: "",
            //       value: "定年制：あり 再雇用制度：ある 契約の更新：あり",
            //     },
            //   ],
            //   margin_item: false,
            // },
            // {
            //   type: "fixation",
            //   infoTitle: "誓約書",
            //   success: false,
            //   content: [
            //     '私は アイングループ (以下 「 会社 」 という。) の就業規則等の諸規則・諸規定を遵守し、誠実に職務に従事いたします。',
            //     '履歴書およびその他の提出書類の記載事項は事実に相違ありません。',
            //     '貴社の社員としての体面を汚すような行為はいたしません。',
            //     '会社 の業務 に関連して知りえた個人情報、企業情報 (取引先・患者様・お客様 に関する情報、人事・財務・関連会社・紛争に関する情報、その他会社が秘密として指定する情報を含む。) 、については、在職中はもとよりのこと、会社退職後であっても会社の許可なくして自ら使用し、又は第三者に',
            //     '会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・資料・帳簿等 (フロッピー、ＭＯその他記録媒体の如何を問わない。) は、情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、会社退職時には、これら総てを会社に返還いたします。',
            //     '職務中に知り得た第三者の個人情報につき、その情報管理者の承諾なくして自ら使用し、又は第三者に開示・漏洩いたしません。',
            //     '故意または重大な過失により貴社に損害を及ぼしたときは、その損害について賠償の責任を負います。'
            //   ],

            //   margin_item: true,
            // },
            {
              type: "requiredInput",
              infoTitle: "",
              name: "form1_requiredInput",
              success: false,
              value: false,
              content: [
                {
                  name: "同意する場合はチェックをしてください",
                  value: "checkbox",
                },
              ],
              validate() {
                if (!this.value) {
                  this.error = true;
                  this.message = "The field is required!";
                  return;
                } else {
                  this.error = false;
                  this.message = "";
                }
              },
              error: true,
              message: "",
              margin_item: false,
            },
          ],
        },
      ],
      // step 2
      [
        {
          idStep: 2,
          title: "入社手続きの登録をお願いいたします",
          listInfo: [
            // {

            //   type:"singerInfo",
            //   infoTitle: "顔写真の登録",
            //   guide:'システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。',
            //   name:'form2_singerInfo1',
            //   img:'../assets/imgPerson.svg',
            //   required:'',
            //   success: false,
            //   value:'',
            //   typeInput:"file",
            //   nameInput:'',
            //   validate(){
            //     if (this.value==='') {
            //       this.error = true;
            //       this.message = "The field is required!";
            //       return;
            //     } else {
            //       this.error = false;
            //       this.message = "";
            //     }
            //   },
            //   error: false,
            //   message: "",
            //   margin_item: false,
            // },
            // {

            //   type:"singerInfo",
            //   infoTitle: "本人確認書類",
            //   guide:'',
            //   required:'必須',
            //   requiredContent:'運転免許証両面もしくは住民票を添付してください',
            //   name:'form2_singerInfo2',
            //   success: false,
            //   value:'',
            //   typeInput:"file",
            //   nameInput:'',
            //   validate(){
            //     if (this.value==='') {
            //       this.error = true;
            //       this.message = "The field is required!";
            //       return;
            //     } else {
            //       this.error = false;
            //       this.message = "";
            //     }
            //   },
            //   error: false,
            //   message: "",
            //   margin_item: false,
            // },
            {
              type: "formInput",
              infoTitle: "基本情報登録",
              guide:
                "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
              name: "form2_singerInfo3",
              success: false,
              value: "",
              content: [
                {
                  value: "",
                  name: "input1",
                  required: true,
                  requiredTitle: "姓",
                  type: "text",
                  success:false,
                  placeholder: "入力してください",
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
                },
                {
                  value: "",
                  name: "input2",
                  required: true,
                  requiredTitle: "名",
                  type: "text",
                  placeholder: "入力してください",
                  success:false,
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
                },
                {
                  value: "",
                  name: "input3",
                  required: true,
                  requiredTitle: "セイ",
                  type: "text",
                  placeholder: "入力してください",
                  success:false,
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
                },
                {
                  value: "",
                  name: "input4",
                  required: true,
                  requiredTitle: "メイ",
                  type: "text",
                  placeholder: "入力してください",
                  success:false,
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
                },
                {
                  value: "",
                  name: "input5",
                  required: true,
                  requiredTitle: "姓 (ローマ字) ",
                  type: "text",
                  placeholder: "入力してください",
                  success:false,
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
                },
                {
                  value: "",
                  name: "input6",
                  required: true,
                  requiredTitle: "名 (ローマ字) ",
                  type: "text",
                  placeholder: "入力してください",
                  success:false,
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
                },
               {
                  value: "",
                  name: "input7",
                  required: true,
                  requiredTitle: "性別",
                  type: "radio",
                  contentInput: {
                    radio1: {
                      name: "radio1",
                      title: "男性",
                    },
                    radio2: {
                      name: "radio2",
                      title: "女性",
                    },
                  },
                  placeholder: "",
                success:false,
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
                },
                {
                  value: "",
                  name: "input8",
                  required: true,
                  requiredTitle: "生年月日",
                  type: "birdthDay",
                  contentInput: {
                    yearInput: {
                      name: "yearInput",
                      type: "text",
                      placeholder: "西暦 (半角)",
                      and: "年",
                    },
                    monthInput: {
                      name: "monthInput",
                      type: "text",
                      placeholder: "半角",
                      and: "月",
                    },
                    dayInput: {
                      name: "dayInput",
                      type: "text",
                      placeholder: "半角",
                      and: "月",
                    },
                  },
                  placeholder: "",
                  success:false,
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
                },
                {
                  value: "",
                  name: "input9",
                  required: false,
                  requiredTitle: "姓",
                  subheading: "生年月日を入力すると表示されます",
                  type: "",
                  placeholder: "",
                  success:false,
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
                },
                {
                  value: "",
                  name: "input10",
                  required: false,
                  requiredTitle: "ビジネスネーム",
                  subheading: "旧姓を利用する等の場合に入力をしてください。",
                  type: "text",
                  placeholder: "入力してください",
                  success:false,
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
                },
              ],

              validate() {
                if (this.value.length < 0) {
                  this.error = true;
                  this.message = "The field is required!";
                  return;
                } else {
                  this.error = false;
                  this.message = "";
                }
              },
              error: true,
              message: "",
              margin_item: false,
            },
            // {
            //   type:"formInput",
            //   infoTitle: "最終学歴",
            //   guide:'最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。',
            //   name:'form2_singerInfo4',
            //   value:'',
            //   content:{
            //     input1:{
            //       value:'',
            //       name:'input1',
            //       required:false,
            //       requiredTitle: '学歴1',
            //       subheading:'',
            //       type: "",
            //       placeholder:'',
            //     },
            //     input2:{
            //       value:'',
            //       name:'input2',
            //       required:true,
            //       requiredTitle: '入学年月日',
            //       type: "date",
            //       placeholder:'',
            //     }
            //   },
            //   success: false,
            //   validate(){
            //     if (this.value.length<0) {
            //       this.error = true;
            //       this.message = "The field is required!";
            //       return;
            //     } else {
            //       this.error = false;
            //       this.message = "";
            //     }
            //   },
            //   error: false,
            //   message: "",
            //   margin_item: false,
            // }
          ],
        },
      ],
      // step 3
      [
        {
          idStep: 3,
          title: "入社手続きの確認をお願いいたします",
          check: {
            // idCheck: idStep,
            // logo:'../assets/check.svg'
          },
        },
      ],
      // step 4
      [
        {
          idStep: 4,
          title: "入社手続きの申請ありがとうございました。",
          check: {
            // idCheck: idStep,
            // logo:'../assets/checkWrite.svg'
          },
        },
      ],
      // step 5
      [
        {
          idStep: 5,
          title: "雇用契約について",
          check: {
            // idCheck: idStep,
            // logo:'../assets/check.svg'
          },
        },
      ],
    ],
  },
  getters: {
    getListfields: (state) => state.fieldSteps,
    getListfieldsLength: (state) => state.fieldSteps.length,
    getListfield: (state) => state.fieldSteps[state.currentStep - 1],
  },
  actions: {
    prevStep({ commit }) {
      commit("PREV_STEP");
    },
    changeInput({ commit }, data) {
      commit("CHANGE_INPUT", data);
    },
    increaseStep({ commit }) {
      commit("INCREASE_STEP");
    },
    changeInputFile({ commit }, data) {
      commit("CHANGE_INPUT_FILE", data);
    },
    changeInputForm({ commit }, data) {
      commit("CHANGE_INPUT_FORM", data);
    },
  },

  mutations: {
    PREV_STEP(state) {
      state.currentStep--;
    },
    CHANGE_INPUT(state, data) {
      let success = true;
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
          if (item.name === data.name) {
            item.success = success;
          }
        });
      });
    },
    CHANGE_INPUT_FILE(state, data) {
      let success = true;
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.name == data.name) {
            item.value = data.url;
            item.validate();
          }
        });
      });
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.name === data.name) {
            item.success = success;
          }
        });
      });
    },
    CHANGE_INPUT_FORM(state, data) {
      
      let success = true;
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          item.content.forEach(el=>{
            if (el.name==data.name){
              el.value = data.value;
              el.validate();
            }
          })
           
        });
      });
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          if (item.content.name) {
            if(item.content.value!==''){
              item.content.success = success;
            }
            
          }
        });
      });
    },
    INCREASE_STEP(state) {
      // state.fieldSteps[state.currentStep - 1].forEach((element) => {
      //   element.listInfo.forEach((item) => {
      //     if (item.success === false) {
      //       item.validate();
      //     }
      //   });
      // });

      // state.fieldSteps[state.currentStep - 1].forEach((element) => {
      //   let count = element.listInfo.length;
      //   element.listInfo.forEach((item) => {
      //     if (item.success === true) {
      //       count--;
      //     }
      //     if (count == 0) {
      //       state.currentStep++;
      //     }
      //   });
      // });
      state.fieldSteps[state.currentStep - 1].forEach((element) => {
        element.listInfo.forEach((item) => {
          
            item.content.forEach(el=>{
              if (el.success === false&&el.required==true){
                 el.validate()
              }
            })
        });
      });
    },
  },
});

export default store;
