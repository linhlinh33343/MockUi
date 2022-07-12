<template>
  <div class="header">
    <div class="header-group">
        <div class="header-item logo" ><img src="../assets/logo.svg"/></div>
        <span class="header-item info">入社手続き</span>
        <span class="header-item help">ヘルプ</span>
    </div>
</div>
</template>

<script>
export default {
    name:'HeaderVue'
}
</script>

<style scope>
.header{
    width:100%;
    height:var(--heightHeader);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 4px 2px -2px #e9e3e3;
    z-index: 1;
    background-color: white;
}
.header-group {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    
}
.header-item{
    margin-left: 20px;
    cursor: pointer;
}
.header-item.info{
    font-weight: 700;
    
}
.header-item.help{
    color: #999999;
  
}
</style>