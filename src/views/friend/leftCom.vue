<template>
  <div class="leftList">
    <div class="header">
      <img class="avatar" src="@/assets/friend/avatar.png" alt="" />
      <h4 class="title">{{ activeType.typeCname }}</h4>
      <img class="avatar" src="@/assets/friend/add.svg" alt="" />
    </div>
    <div class="searchBox" v-if="activeType.typeName !== 'share'">
      <input class="input" placeholder="搜索" type="text" />
    </div>
    <MsgCom
      v-if="activeType.typeName === 'msg'"
      @reqChatMsgList="reqChatMsgList"
    ></MsgCom>
    <GroupList
      v-else-if="activeType.typeName === 'group'"
      @reqChatMsgList="reqChatMsgList"
    ></GroupList>
    <ShareCom v-else @sendShareType="sendShareType"></ShareCom>
    <div class="footer">
      <img
        v-for="(item, index) in doneSvgList"
        :key="index"
        :src="getSrc(item)"
        alt=""
        @click="chooseType(index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { require } from "@/utils/require.ts";
import MsgCom from "./msgCom.vue";
import GroupList from "./groupList.vue";
import ShareCom from "./shareCom.vue";
let emit = defineEmits([
  "sendmsgList",
  "sendUserName",
  "changeDoneType",
  "sendShareType",
]);
const route = useRoute();
interface svgSrcItem {
  normal: string;
  active: string;
  nowType: string;
  typeName: string;
  typeCname: string;
}
const activeType: Ref<svgSrcItem> = ref(null);
const doneSvgList: Ref<Array<svgSrcItem>> = ref([
  {
    normal: "@/assets/friend/msg.svg",
    active: "@/assets/friend/msg_active.svg",
    nowType: "normal",
    typeName: "msg",
    typeCname: "消息列表",
  },
  {
    normal: "@/assets/friend/group.svg",
    active: "@/assets/friend/group_active.svg",
    nowType: "normal",
    typeName: "group",
    typeCname: "通讯录",
  },
  {
    normal: "@/assets/friend/share.svg",
    active: "@/assets/friend/share_active.svg",
    nowType: "normal",
    typeName: "share",
    typeCname: "动态空间",
  },
]);

const getSrc = (item: svgSrcItem) => {
  // return require(item[(item as svgSrcItem).nowType])
  let type = item.nowType;
  return require(item[type]);
};
const chooseType = (index: number) => {
  doneSvgList.value = doneSvgList.value.map((item: svgSrcItem) => {
    return {
      normal: item.normal,
      active: item.active,
      nowType: "normal",
      typeName: item.typeName,
      typeCname: item.typeCname,
    };
  });
  activeType.value = doneSvgList.value[index];
  if (doneSvgList.value[index].nowType === "normal") {
    doneSvgList.value[index].nowType = "active";
  } else {
    doneSvgList.value[index].nowType = "normal";
  }
  emit("changeDoneType", doneSvgList.value[index].typeName);
};

const reqChatMsgList = (userName: string) => {
  let msgList = [];
  switch (userName) {
    case "嘉文四世":
      msgList = [
        {
          from: "others",
          text: "你好啊,我是皇子嘉文四世,我们现在是好朋友了!",
          time: "2024-3-20 / 10:20",
          url: "@/assets/friend/jiawen.png",
          id: "1",
        },
        {
          from: "self",
          text: "你好啊,皇子殿下,我是王惊涛",
          time: "2024-3-20 / 10:21",
          url: "@/assets/friend/avatar.png",
          id: "2",
        },
        {
          from: "others",
          text: "有没有兴趣加入我们伟大的德玛西亚帝国",
          time: "2024-3-20 / 10:20",
          url: "@/assets/friend/jiawen.png",
          id: "3",
        },
        {
          from: "others",
          text: "欢迎你的到来,王惊涛阁下!",
          time: "2024-3-20 / 10:20",
          url: "@/assets/friend/jiawen.png",
          id: "4",
        },
      ];
      break;
    case "德莱厄斯":
      msgList = [
        {
          from: "others",
          text: "你好啊,我是统帅德莱厄斯,我们现在是好朋友了!",
          time: "2024-3-20 / 10:20",
          url: "@/assets/friend/nuoke.png",
          id: "1",
        },
        {
          from: "self",
          text: "你好啊,帝国之手,我是王惊涛",
          time: "2024-3-20 / 10:21",
          url: "@/assets/friend/avatar.png",
          id: "2",
        },
        {
          from: "others",
          text: "有没有兴趣加入我们伟大的德莱厄斯帝国",
          time: "2024-3-20 / 10:20",
          url: "@/assets/friend/nuoke.png",
          id: "3",
        },
        {
          from: "others",
          text: "欢迎你的到来,王惊涛阁下!",
          time: "2024-3-20 / 10:20",
          url: "@/assets/friend/nuoke.png",
          id: "4",
        },
      ];
      break;
  }
  emit("sendmsgList", msgList);
  emit("sendUserName", userName);
};
const sendShareType = (typeName: string) => {
  emit("sendShareType", typeName);
};
activeType.value = doneSvgList.value[0];
chooseType(0);

watch(route, (newVal) => {
  if (newVal.name === "chat") {
    chooseType(0);
  }
});
</script>

<style lang="less" scoped>
img {
  cursor: pointer;
}
.leftList {
  height: 100vh;
  width: 300px;
  padding-bottom: 50px;
  background: #262525;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 0 16px;
    .avatar {
      border-radius: 50%;
      height: 30px;
    }
    .title {
      font-size: 20px;
    }
  }
  .searchBox {
    width: 100%;
    margin: 20px 0;
    .input {
      width: 90%;
      height: 30px;
      margin: 0px 5%;
      border-radius: 12px;
      text-align: center;
    }
  }
  .footer {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 30px;
      cursor: pointer;
    }
  }
}
.transition-enter,
.transition-leave-to {
  opacity: 0;
}
.transition-enter-active,
.transition-leave-active {
  transition: opacity 0.5s ease;
}
</style>