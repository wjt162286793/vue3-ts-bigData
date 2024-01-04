<template>
    <div class="headerBox">
        <h1 class="logo">
            WJT大数据平台
        </h1>
        <div class="headerContent">
           <p class="userName">admin</p>
           <el-icon :size="28" class="icon"><User /></el-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.headerBox{
    width: 100%;
    height: 100%;
    display: flex;
  .logo{
    height: 100px;
    line-height: 50px;
    width: 200px;
    font-size: 24px;
    color: #3f9dff;
    box-sizing: border-box;
  }
  .headerContent{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    .icon{
        cursor: pointer;
    }
    .userName{
        margin: 10px;
    }
  }
  
}

</style>