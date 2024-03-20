<template>
  <div class="main">
      <LeftList></LeftList>
      <ChatBox></ChatBox>
  </div>

</template>

<script lang="ts" setup>
import LeftList from './leftList.vue'
import ChatBox from './chatBox.vue'


</script>

<style lang="less" scoped>
.main{
  display: flex;
}

</style>