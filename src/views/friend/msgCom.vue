<template>
      <ul class="msgList">
      <li
        class="friendItem"
        v-for="(item, index) in msgList"
        :key="index"
        @click="changeFriend(item)"
      >
        <img class="innerAvatar" :src="require(item.url)" alt="" />
        <div class="chatView">
          <div class="top">
            <p class="userName">{{ item.userName }}</p>
            <p class="time">{{ item.time }}</p>
          </div>
          <div class="bottom">
            <p class="text">{{ item.text }}</p>
            <div class="unreadTip" v-show="item.unreadTip > 0">
              {{ item.unreadTip }}
            </div>
            <div class="unreadTip_none" v-show="item.unreadTip === 0">
            </div>
          </div>
        </div>
      </li>
    </ul>
</template>

<script lang="ts" setup>
import { require } from "@/utils/require.ts";
import { friendItemType } from "./type.ts";
const emit = defineEmits(['reqChatMsgList'])
const msgList: Ref<Array<friendItemType>> = ref([
  {
    userName: "嘉文四世",
    time: "10:20",
    text: "你好啊,我是皇子嘉文四世,我们现在是好朋友了!",
    url: "@/assets/friend/jiawen.png",
    unreadTip: 1,
  },
  {
    userName: "德莱厄斯",
    time: "10:30",
    text: "你好啊,我是统帅德莱厄斯,我们现在是好朋友了!",
    url: "@/assets/friend/nuoke.png",
    unreadTip: 1,
  },
]);
const changeFriend = (item: friendItemType) => {
  item.unreadTip = 0;
  emit('reqChatMsgList',item.userName)
};
onMounted(() => {
  changeFriend(msgList.value[0]);
});
</script>

<style lang="less" scoped>
  .msgList {
    width: 100%;
    .friendItem {
      cursor: pointer;
      width: 100%;
      padding: 12px;
      display: flex;
      height: 80px;
      .innerAvatar {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      .top {
        display: flex;
        justify-content: space-between;
        width: 75%;
        margin-bottom: 10px;
        .userName {
          font-size: 16px;
          color: #fff;
        }
        .time {
          font-size: 12px;
          color: #f1f1f1;
        }
      }
      .bottom {
        display: flex;
        width: 100%;
        .text {
          width: 70%;
          white-space: nowrap; /* 确保文本在一行内显示 */
          overflow: hidden; /* 隐藏超出容器的文本 */
          text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
        }
        .unreadTip {
          background: red;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          text-align: center;
          line-height: 14px;
        }
        .unreadTip_none{
          width: 14px;
          height: 14px;
        }
      }
    }
    .friendItem:hover {
      background: #000;
    }
  }
</style>