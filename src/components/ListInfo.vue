<template>
    <div class="list-info">
        <div v-for="list in (field.listInfo)" :key="list">
            <div class="listInfo-item" v-if="list.type==='infomation'" :class="[list.margin_item?'marginTrue':'']">
                <label class="infomation-label ">{{list.infoTitle}}</label>
                <div v-for="item in (list.content) " :key="item"  class="infomation-content ">
                    <div>{{item.name}}</div>
                    <div>{{item.value}}</div>
                </div>
            </div>
            <div class="listInfo-item " v-if="list.type==='fixation' " :class="[list.margin_item?'marginTrue':'']">
                <label class="infomation-label ">{{list.infoTitle}}</label>
                <div class="item-fixation">
                <div v-for="(item,index) in (list.content) " :key="item"  class="fixation-content">
                    <span class="fixation-number">{{index+1}}</span>
                    <div class="fixation-item">{{item}}</div>
                </div>
                </div>
            </div>
            <div class="listInfo-item" v-if="list.type==='requiredInput'">
                <div class="form-group" v-for="item in (list.content)" :key="item">
                    <span class="requiredTitle" >必須</span>
                    <div class="form-control" v-if="item.value=='checkbox'">
                        <input class="input-checkbox" :id="item" :type="item.value" v-model="checked" :value="list.name"  ref="myInput" >
                        <label class="label-checkbox" :for="item">{{item.name}}</label>
                    </div>
                    <span class="error">{{list.message}}</span>
                </div>
            </div>
            <div class="listInfo-item" ref="test" v-if="list.type==='singerInfo'" :class="[list.margin_item?'marginTrue':'']">
                <label class="infomation-label ">{{list.infoTitle}}</label>
                <label class="infomation-guide ">{{list.guide}}</label>
                <div v-if="list.typeInput">
                <div  :class="[list.value!=''?'infomation-img':'']">
                    <img v-if="list.value" class="infomation-link "  :src="list.value"  alt="">
                </div>
                 <div  class="infomation-required"><span :class="[list.required?'requiredTitle':'']" >{{list.required}}</span>
                 <span class="required-content">{{list.requiredContent}}</span></div>
                <label class="form-group form-inputFile" :class="[list.error?'error':'']" >
                    <div><img src="../assets/Cloud.svg" alt=""> </div>
                    <div class="inputFile-title">
                    <p>ファイルをドラッグ&ドロップ</p>
                    <p>ファイルをドロップするか</p>
                        <p>ファイルを参照する</p> </div>
                    <input hidden  :type="list.typeInput" @change="setValueInputFile($event,list.name)" >
                </label>
                </div>
                <span class="error">{{list.message}}</span>
            </div>
             <div class="listInfo-item"  v-if="list.type==='formInput'" :class="[list.margin_item?'marginTrue':'']">
                <label class="infomation-label ">{{list.infoTitle}}</label>
                <label class="infomation-guide ">{{list.guide}}</label>
                <div class="form-group " v-for="item in (list.content)" :key="item" :class="[item.error?'error':'']">
                     <span class="requiredTitle" v-if="item.required">必須</span>
                     <span class="reqiredHeading">{{item.requiredTitle}}</span>
                     <span class="subheading">{{item.subheading}}</span>
                    <div class="form-control" v-if="item.type=='text'" :class="[item.error?'error':'']" >
                        <input class="text-input" type="text" :placeholder="item.placeholder" @input="setValueInput($event,item.name)" >
                    </div>
                    <!-- <div class="form-control list-radio " v-if="item.type=='radio'" >
                        <div class="item-radio" v-for="radioItem in item.contentInput" :key="radioItem">
                            <input  :id="radioItem.name" class="radio-input" type="radio" :value="item.name" name="radio"> 
                            <label :for="radioItem.name">{{radioItem.title}}</label>
                        </div>
                    </div> -->
                    <!-- <div class="birdth-control " v-if="item.type=='birdthDay'" >
                        <div class="item-birdth" v-for="itemBirdth in item.contentInput" :key="itemBirdth">
                            <div class="birdth-input form-control"><input type="text" :placeholder="itemBirdth.placeholder" ></div>
                            <span class="birdth-and">{{itemBirdth.and}}</span>
                        </div>
                    </div>
                    <div class="form-control" v-if="item.type=='date'" >
                        <input class="text-input" :type="item.type" :placeholder="item.placeholder">
                    </div> -->
                    
                    <span class="error">{{item.message}}</span>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
import { mapState } from 'vuex'


export default {
    name:'ListInfoVue',

    data(){
        return{
      
        }
    },
    props:{
        field:{
            type: Object,
        }
    },
    computed:{
        ...mapState(['checkSuccessForm1']),
        checked:{
            set(value){
                let name =this.$refs.myInput[0].value
                this.$store.dispatch('changeInput',{name,value})
            }, 
        },
        

    },
    methods:{
       setValueInputFile(e,name){
            var url = URL.createObjectURL(e.target.files[0]);
           
            this.$store.dispatch('changeInputFile',{name,url})
            // this.$emit('nameInputFile',name)
       },
       setValueInput(e,name){
            this.$store.dispatch('changeInputForm',{name,value:e.target.value})
            // this.$emit('nameInputForm',name)
       }
    },
    watch:{
        // checkSuccessForm1(){
        //     console.log('thay doi', this.checkSuccessForm1);
        // }
    }
}
</script>

<style>
    label{
        margin-bottom: 0;

    }
    .list-info{
        margin-top: 16px;
    }
    .listInfo-item{
        width: 100%;
        background-color:var(--backGround-primary);
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
    .listInfo-item.marginTrue{
       margin-bottom: 0;
       padding:  16px 16px 1px 16px; 
        
    }
    .requiredTitle{ 
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
    .input-checkbox{
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
    .error{
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
    border:1px solid transparent;
    cursor: pointer;
}
label.form-group.form-inputFile.error{
    border:1px solid red;
}
.inputFile-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4px;
}
.inputFile-title p{
    margin: 0;
}
.inputFile-title p:first-child{
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
    .radio-input{
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }
.item-radio:not(:first-child) {
    border-left: 1px solid rgb(211, 183, 183);
}
.item-birdth {
    display: flex;
    justify-content: center;
    align-items: center;
}
.birdth-control{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.birdth-input input {
    width: 100%;
    border: none;
    outline: none;

}
.birdth-and{
    margin: 0 8px;
}
.birdth-input.form-control {
    margin: 0 ;

}
label.infomation-label {
    display: block;
}
span.subheading {
    display: block;
}
input::placeholder {
    font: 14px sans-serif;
}
</style>