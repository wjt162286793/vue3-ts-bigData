<template>
  <div class="main">
    <LeftList
      @sendmsgList="sendmsgList"
      @sendUserName="sendUserName"
      @changeDoneType="changeDoneType"
      @sendShareType="sendShareType"
    ></LeftList>
    <ChatBox
      v-if="doneType !== 'share'"
      :msgList="msgList"
      :userName="userName"
    ></ChatBox>
    <template v-else>
      <router-view> </router-view>
    </template>
  </div>
</template>

<script lang="ts" setup>
import LeftList from "./leftCom.vue";
import ChatBox from "./chatBox.vue";
import { msgItem } from "./type";

const msgList: Ref<Array<msgItem>> = ref([]);
const userName: Ref<string> = ref("");
const doneType: Ref<string> = ref("");
const shareName: Ref<string> = ref("");
const router = useRouter();
const route = useRoute();
const sendmsgList = (list: Array<msgItem>) => {
  msgList.value = list;
};
const sendUserName = (name: string) => {
  userName.value = name;
};
const changeDoneType = (typeVal: string) => {
  doneType.value = typeVal;
  if (typeVal !== "share") {
    router.push({
      name: "chat",
    });
  } else {
    router.push({
      name: "shop",
    });
  }
};
const sendShareType = (name: string) => {
  router.push({
    name: name,
  });
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
}
</style>