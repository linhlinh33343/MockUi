<template>
  <div class="support-step">
       <img class="support-step__icon" src="../../assets/chatInfo.svg" alt="">
       <div class="support-content">
            <p>雇用契約や入社手続きについて</p>
            <p>ご不明点はお問い合わせください</p>
       </div>
    </div>
</template>

<script>
export default {
    name:'SupportVue'
}
</script>

<style>
    .support-step{
         background-color:var(--backGround-primary);
         display: flex;
        padding: 16px;
        justify-content: start;
        align-items: center;
    }
    .support-content {
        text-align: start;
        font-size: 16px;
    }
    .support-step__icon{
        margin-right: 20px;
    }
    .support-content p{
        margin: 0;
    }
</style>