<template>
    <div class="warning-sub">
        <div class="warning-title">
                <img class="warning-icon" src="../../assets/warningSub.svg" alt="">
                <span>ご確認ください</span>
        </div>
        <p>名前と生年月日が表示されている場合は正しく表示されているか確認をして、間違えている場合は修正をお願いいたします。</p>
    </div>
</template>

<script>
export default {
    name:'WarningSubmit'
}
</script>

<style scope>
.warning-sub {
    padding: 16px 16px 12px 16px;
    background-color:var(--backGround-primary)
}
.warning-title {
    display: flex;
    justify-content: start;
    align-items: center;
}
.warning-icon{
    margin-right: 8px;
}
.warning-title span {
    font-size: 24px;
    font-weight: 800;
}
.warning-sub p{
    text-align: start;
}
</style>