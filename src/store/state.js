import { v4 as uuidv4 } from "uuid";
export default {
  currentStep: 1,
  searchArray: [],
  searchChosseValue: "",
  count: 0,
  fieldSteps: [
    // step 1
    [
      // field
      {
        idStep: 1,
        title: "雇用契約について",
        listInfo: [
          // list
          {
            type: "infomation",
            infoTitle: "雇用契約期間の定め",
            success: false,
            content: [
              // item
              { name: "", value: "契約期間の定め：なし" },
            ],
            margin_item: false,
          },
          {
            type: "infomation",
            infoTitle: "勤務地",
            success: false,
            content: [
              {
                name: "事業所名",
                value: "テキストテキストテキストテキストテキストテキスト",
              },
              {
                name: "事業所在地",
                value: "テキストテキストテキストテキストテキストテキスト",
              },
              {
                name: "仕事内容",
                value: "テキストテキストテキストテキストテキストテキスト",
              },
            ],
            margin_item: false,
          },
          {
            type: "infomation",
            infoTitle: "勤務条件",
            success: false,
            content: [
              { name: "勤務区分", value: "固定勤務" },
              {
                name: "勤務開始時間 09:00 勤務終了時間:18:00 休憩時間: 120分",
                value: "勤務開始時間: 09:00 勤務終了時間:18:00 休憩時間: 120分",
              },
              {
                name: "所定労働時間 (1日) : 8時間 所定労働時間 (1週間平均) : 40時間",
                value:
                  "所定労働時間 (1日) : 8時間 所定労働時間 (1週間平均) : 40時間",
              },
            ],
            margin_item: false,
          },
          {
            type: "infomation",
            infoTitle: "報酬条件",
            success: false,
            content: [
              { name: "等級", value: "1等級" },
              {
                name: "",
                value: "基本給: 200,000円 年齢給: 200,000円 職能給: 200,000円",
              },
              {
                name: "",
                value:
                  "調整給: 200,000円 調整給1: 200,000円 調整給2: 200,000円",
              },
            ],
            margin_item: true,
          },
          {
            type: "infomation",
            infoTitle: "手当",
            success: false,
            content: [
              { name: "", value: "ライフプラン手当: 200,000円" },
              {
                name: "",
                value:
                  "役職手当: 200,000円 役職手当2: 200,000円 役職手当3: 200,000円",
              },
              {
                name: "",
                value:
                  "資格手当: 200,000円 住宅地域手当: 200,000円 管理薬剤師手当: 200,000円",
              },
              {
                name: "",
                value:
                  "職務手当：200,000円 職務手当2：200,000円 職務手当3：200,000円",
              },
              {
                name: "",
                value:
                  "ブロック手当：200,000円 フィールドマネジャー手当：200,000円 ",
              },
              {
                name: "",
                value: "単身赴任手当：200,000円 社員区分手当：200,000円 ",
              },
              { name: "合計支給額", value: "200,000円" },
            ],
            margin_item: false,
          },
          {
            type: "infomation",
            infoTitle: "賃金の締日・支払日",
            success: false,
            content: [
              { name: "", value: "賃金締日：毎月末日 賃金支払日：当月25日" },
            ],
            margin_item: false,
          },
          {
            type: "infomation",
            infoTitle: "制度",
            success: false,
            content: [
              { name: "", value: "昇給：あり 賞与：あり 退職金：あり" },
              {
                name: "",
                value:
                  "健康保険：加入する 厚生年金保険：加入する 雇用保険：加入する",
              },
              {
                name: "",
                value: "定年制：あり 再雇用制度：ある 契約の更新：あり",
              },
            ],
            margin_item: false,
          },
          {
            type: "fixation",
            infoTitle: "誓約書",
            success: false,
            content: [
              "私は アイングループ (以下 「 会社 」 という。) の就業規則等の諸規則・諸規定を遵守し、誠実に職務に従事いたします。",
              "履歴書およびその他の提出書類の記載事項は事実に相違ありません。",
              "貴社の社員としての体面を汚すような行為はいたしません。",
              "会社 の業務 に関連して知りえた個人情報、企業情報 (取引先・患者様・お客様 に関する情報、人事・財務・関連会社・紛争に関する情報、その他会社が秘密として指定する情報を含む。) 、については、在職中はもとよりのこと、会社退職後であっても会社の許可なくして自ら使用し、又は第三者に",
              "会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・資料・帳簿等 (フロッピー、ＭＯその他記録媒体の如何を問わない。) は、情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、会社退職時には、これら総てを会社に返還いたします。",
              "職務中に知り得た第三者の個人情報につき、その情報管理者の承諾なくして自ら使用し、又は第三者に開示・漏洩いたしません。",
              "故意または重大な過失により貴社に損害を及ぼしたときは、その損害について賠償の責任を負います。",
            ],

            margin_item: true,
          },
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
          {
            type: "formInput",
            infoTitle: "顔写真の登録",
            guide:
              "システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。",
            name: "form2_singerInfo1",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "",
                subheading: "",
                img: "../assets/imgPerson.svg",
                type: "file",
                disabled: false,
                success: true,
                placeholder: "入力してください",
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
          {
            type: "formInput",
            infoTitle: "本人確認書類",
            guide: "",
            name: "form2_singerInfo2",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle:
                  "運転免許証両面もしくは住民票を添付してください。",
                subheading: "",
                img: "",
                type: "file",
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
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
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
                name: uuidv4(),
                required: true,
                requiredTitle: "姓",
                type: "text",
                success: false,
                disabled: false,
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
                name: uuidv4(),
                required: true,
                requiredTitle: "名",
                type: "text",
                placeholder: "入力してください",
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "セイ",
                type: "text",
                placeholder: "入力してください",
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "メイ",
                type: "text",
                placeholder: "入力してください",
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "姓 (ローマ字) ",
                type: "text",
                placeholder: "入力してください",
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "名 (ローマ字) ",
                type: "text",
                placeholder: "入力してください",
                success: false,
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
              },
              {
                value: false,
                name: uuidv4(),
                required: true,
                requiredTitle: "性別",
                success: false,
                type: "radio",
                disabled: false,
                contentInput: [
                  {
                    value: false,
                    name: "radio1",
                    title: "男性",
                  },
                  {
                    value: false,
                    name: "radio2",
                    title: "女性",
                  },
                ],
                placeholder: "",
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
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: false,
                name: uuidv4(),
                required: true,
                requiredTitle: "生年月日",
                success: false,
                type: "birdthDay",
                disabled: false,
                contentInput: [
                  {
                    name: "yearInput",
                    type: "text",
                    placeholder: "西暦 (半角)",
                    and: "年",
                    value: "",
                  },
                  {
                    name: "monthInput",
                    type: "text",
                    placeholder: "半角",
                    and: "月",
                    value: "",
                  },
                  {
                    name: "dayInput",
                    type: "text",
                    placeholder: "半角",
                    and: "月",
                    value: "",
                  },
                ],
                placeholder: "",

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
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "姓",
                subheading: "生年月日を入力すると表示されます",
                type: "",
                placeholder: "",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "ビジネスネーム",
                subheading: "旧姓を利用する等の場合に入力をしてください。",
                type: "text",
                placeholder: "入力してください",
                disabled: false,
                success: true,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
            ],
            error: false,
            message: "",
            margin_item: false,
          },
          {
            type: "formInput",
            infoTitle: "最終学歴",
            guide:
              "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
            name: "form2_singerInfo4",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "学歴1",
                subheading: "",
                type: "",
                placeholder: "",
                disabled: false,
                success: true,
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "入学年月日",
                type: "date",
                placeholder: "",
                disabled: false,
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "卒業年月日",
                type: "date",
                placeholder: "",
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "学歴区分",
                type: "select",
                placeholder: "フリーワードで検索できます",
                success: true,
                disabled: false,
                options: [
                  { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 1 },
                  { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 2 },
                  { name: "	京都大学 京都府 (Đại học Kyoto)", id: 3 },
                  { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                  { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                  { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
                ],
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "学校名",
                type: "search",
                placeholder: "フリーワードで検索できます",
                success: false,
                disabled: false,
                toggleSearch: false,
                inputSearch: [
                  { name: "東京大学 東京都(Đại học Tokyo)", id: 1 },
                  { name: "京都大学 京都府(Đại học Kyoto)", id: 2 },
                  { name: "東京工業大学(Đại học Nagoya)", id: 3 },
                  { name: "九州大学(Viện Công nghệ Tokyo)", id: 4 },
                  { name: "北海道大学(Đại học Osaka)", id: 5 },
                ],
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "学部名",
                type: "text",
                placeholder: "選択してください",
                success: true,
                disabled: false,
                validate() {},
                error: false,
                message: "",
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "",
                type: "createForm",
                placeholder: "",
                disabled: false,
                success: true,
                validate() {},
                error: false,
                message: "",
              },
            ],
            success: false,
            error: false,
            message: "",
          },
          {
            type: "formInput",
            infoTitle: "保険年金",
            guide: "",
            name: "form2_singerInfo5",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "基礎年金番号",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "雇用保険被保険者番号",
                subheading: "番号をお持ちの方は必ず入力してください",
                type: "text",
                placeholder: "入力してください",
                disabled: false,
                success: true,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "前職会社名",
                subheading: "雇用保険番号が不明の場合は入力をしてください",
                type: "text",
                placeholder: "入力してください",
                disabled: false,
                success: true,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "資格証明書類（年金手帳）",
                subheading: "年金手帳の写真を添付してください",
                img: "",
                type: "file",
                success: true,
                placeholder: "入力してください",
                disabled: false,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "資格署名書類（雇用保険被保険者証）",
                subheading: "雇用保険被保険者証の写真を添付してください",
                type: "file",
                img: "",
                success: true,
                placeholder: "入力してください",
                disabled: false,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: false,
                name: uuidv4(),
                required: false,
                requiredTitle: "確定拠出年金の利用希望",
                success: true,
                type: "radio",
                contentInput: [
                  {
                    value: false,
                    name: "radio3",
                    title: "希望する",
                  },
                  {
                    value: false,
                    name: "radio4",
                    title: "利用しない",
                  },
                ],
                placeholder: "",
                disabled: false,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
          {
            type: "formInput",
            infoTitle: "給与振込口座",
            guide: "",
            name: "form2_singerInfo6",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "金融機関をフリーワードで検索",
                subheading:
                  "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
                type: "search",
                placeholder: "フリーワードで検索できます",
                success: false,
                toggleSearch: false,
                disabled: false,
                inputSearch: [
                  { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 1 },
                  { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 2 },
                  { name: "	京都大学 京都府 (Đại học Kyoto)", id: 3 },
                  { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                  { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                  { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
                ],
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
              },

              {
                value: "フリーワードで検索できます",
                name: uuidv4(),
                required: true,
                requiredTitle: "支店名をフリーワードで検索",
                subheading:
                  "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
                type: "search",
                placeholder: "フリーワードで検索できます",
                success: true,
                disabled: true,
                toggleSearch: false,
                inputSearch: [],
                validate() {},
                error: false,
                message: "",
              },

              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "口座預金科目",
                subheading: "普通",
                type: "",
                success: true,
                placeholder: "入力してください",
                disabled: false,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "口座番号（半角）",
                subheading: "",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "口座番号（半角）",
                subheading: "",
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
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
          {
            type: "formInput",
            infoTitle: "在留カード（外国籍の方はご記入ください）",
            guide: "",
            name: "form2_singerInfo7",
            value: "",
            content: [
              {
                value: "",
                name: "inputcheckbox",
                required: false,
                requiredTitle: "",
                subheading: "",
                disabled: false,
                type: "checkbox",
                placeholder: "フリーワードで検索できます",

                success: true,
                validate() {
                  // if (this.value === "") {
                  //   this.error = true;
                  //   this.message = "The field is required!";
                  //   return;
                  // } else {
                  //   this.error = false;
                  //   this.message = "";
                  // }
                },
                error: false,
                message: "",
              },
              //disable
              {
                value: "",
                name: "inputtest",
                required: true,
                requiredTitle: "支店姓（ローマ字）名をフリーワードで検索",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "名（ローマ字）",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "姓（カナ）",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "名（カナ）",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "名（カナ）",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "国籍",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "在留資格",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
                placeholder: "入力してください",
                validate() {},
                error: false,
                message: "",
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "在留期間（満了日）",
                subheading: "",
                disabled: true,
                type: "date",
                placeholder: "",
                success: true,
                validate() {},
                error: false,
                message: "",
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "資格外活動許可",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
                placeholder: "入力してください",
                validate() {},
                error: false,
                message: "",
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "就労区分",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
                placeholder: "入力してください",
                validate() {},
                error: false,
                message: "",
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "在留カード番号（半角）",
                subheading: "",
                disabled: true,
                type: "text",
                success: true,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "在留カードの写真（表）",
                subheading: "カードの表の写真を添付してください。",
                type: "file",
                disabled: true,
                success: true,
                placeholder: "入力してください",
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "在留カードの写真（裏）",
                subheading: "カードの裏の写真を添付してください。",
                type: "file",
                disabled: true,
                success: true,
                placeholder: "入力してください",
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
          {
            type: "formInput",
            infoTitle: "現住所を登録",
            guide: "",
            name: "form2_singerInfo8",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "世帯主区分",
                type: "select",
                placeholder: "選択してください",
                disabled: false,
                success: false,
                options: [
                  { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 1 },
                  { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 2 },
                  { name: "	京都大学 京都府 (Đại học Kyoto)", id: 3 },
                  { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                  { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                  { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
                ],
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "住居区分",
                type: "select",
                placeholder: "選択してください",
                disabled: false,
                success: false,
                options: [
                  { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 1 },
                  { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 2 },
                  { name: "	京都大学 京都府 (Đại học Kyoto)", id: 3 },
                  { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                  { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                  { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
                ],
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
              },
              {
                value: false,
                name: uuidv4(),
                required: false,
                requiredTitle: "郵便番号",
                type: "address",
                disabled: false,
                contentInput: [
                  {
                    name: "yearInput",
                    type: "text",
                    placeholder: "半角",
                    and: "-",
                    value: "",
                  },
                  {
                    name: "monthInput",
                    type: "text",
                    placeholder: "半角",
                    and: "",
                    value: "",
                  },
                  {
                    name: "buttomCheck",
                    type: "button",
                    title: "住所取得",
                    and: "",
                    value: "",
                  },
                ],
                placeholder: "",
                success: true,
                validate() {
                  // if (!this.value) {
                  //   this.error = true;
                  //   this.message = "The field is required!";
                  //   return;
                  // } else {
                  //   this.error = false;
                  //   this.message = "";
                  // }
                },
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "都道府県",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "市区町村",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "番地",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "建物名称・部屋番号",
                type: "text",
                success: true,
                placeholder: "入力してください",
                disabled: false,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                subrequired: true,
                requiredTitle: "電話番号（半角）",
                subheading:
                  "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                subrequired: true,
                requiredTitle: "携帯電話番号（半角）",

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
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
        ],
      },
    ],
    // step 3
    [
      {
        idStep: 3,
        title: "入社手続きの確認をお願いいたします",
        listInfo: [
          {
            type: "formInput",
            infoTitle: "最終学歴",
            guide:
              "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
            name: "form2_singerInfo4",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "学歴1",
                subheading: "",
                type: "",
                placeholder: "",
                disabled: false,
                success: true,
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "入学年月日",
                type: "date",
                placeholder: "",
                disabled: false,
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "卒業年月日",
                type: "date",
                placeholder: "",
                success: false,
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "学歴区分",
                type: "select",
                placeholder: "フリーワードで検索できます",
                success: true,
                disabled: false,
                options: [
                  { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 1 },
                  { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 2 },
                  { name: "	京都大学 京都府 (Đại học Kyoto)", id: 3 },
                  { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                  { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                  { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
                ],
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "学校名",
                type: "search",
                placeholder: "フリーワードで検索できます",
                success: false,
                disabled: false,
                toggleSearch: false,
                inputSearch: [
                  { name: "東京大学 東京都(Đại học Tokyo)", id: 1 },
                  { name: "京都大学 京都府(Đại học Kyoto)", id: 2 },
                  { name: "東京工業大学(Đại học Nagoya)", id: 3 },
                  { name: "九州大学(Viện Công nghệ Tokyo)", id: 4 },
                  { name: "北海道大学(Đại học Osaka)", id: 5 },
                ],
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
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "学部名",
                type: "text",
                placeholder: "選択してください",
                success: true,
                disabled: false,
                validate() {},
                error: false,
                message: "",
              },
              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "",
                type: "createForm",
                placeholder: "",
                disabled: false,
                success: true,
                validate() {},
                error: false,
                message: "",
              },
            ],
            success: false,
            error: false,
            message: "",
          },
          {
            type: "formInput",
            infoTitle: "給与振込口座",
            guide: "",
            name: "form2_singerInfo6",
            value: "",
            content: [
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "金融機関をフリーワードで検索",
                subheading:
                  "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
                type: "search",
                placeholder: "フリーワードで検索できます",
                success: false,
                toggleSearch: false,
                disabled: false,
                inputSearch: [
                  { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 1 },
                  { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 2 },
                  { name: "	京都大学 京都府 (Đại học Kyoto)", id: 3 },
                  { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                  { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                  { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
                ],
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
              },

              {
                value: "フリーワードで検索できます",
                name: uuidv4(),
                required: true,
                requiredTitle: "支店名をフリーワードで検索",
                subheading:
                  "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
                type: "search",
                placeholder: "フリーワードで検索できます",
                success: true,
                disabled: true,
                toggleSearch: false,
                inputSearch: [],
                validate() {},
                error: false,
                message: "",
              },

              {
                value: "",
                name: uuidv4(),
                required: false,
                requiredTitle: "口座預金科目",
                subheading: "普通",
                type: "",
                success: true,
                placeholder: "入力してください",
                disabled: false,
                validate() {},
                error: false,
                message: "",
                margin_item: false,
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "口座番号（半角）",
                subheading: "",
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
              },
              {
                value: "",
                name: uuidv4(),
                required: true,
                requiredTitle: "口座番号（半角）",
                subheading: "",
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
              },
            ],
            success: false,
            error: false,
            message: "",
            margin_item: false,
          },
        ],
      },
    ],
    // step 4

    [
      {
        idStep: 4,
        title: "雇用契約について",
        listInfo: [
          // list
          {
            type: "confirmInfo",
            checkApp: false,
            checkConfirm: true,
          },
        ],
      },
    ],
    // step 5
    [
      {
        idStep: 5,
        title: "入社手続きの申請ありがとうございました。",
        listInfo: [
          // list
          {
            type: "confirmInfo",
            checkApp: true,
            checkConfirm: false,
          },
        ],
      },
    ],
  ],
};
