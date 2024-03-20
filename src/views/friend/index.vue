<template>
  <div class="main">
    <LeftList
      @sendmsgList="sendmsgList"
      @sendUserName="sendUserName"
    ></LeftList>
    <ChatBox :msgList="msgList" :userName="userName"></ChatBox>
  </div>
</template>

<script lang="ts" setup>
import LeftList from "./leftList.vue";
import ChatBox from "./chatBox.vue";
import { msgItem } from "./type";

const msgList: Ref<Array<msgItem>> = ref([]);
const userName: Ref<string> = ref("");

const sendmsgList = (list: Array<msgItem>) => {
  msgList.value = list;
};
const sendUserName = (name: string) => {
  userName.value = name;
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
}
</style>