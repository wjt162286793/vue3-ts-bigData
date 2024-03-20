<template>
      <div class="leftList">
    <div class="header">
      <img class="avatar" src="@/assets/friend/avatar.png" alt="" />
      <h4 class="title">好友列表</h4>
      <img class="avatar" src="@/assets/friend/add.svg" alt="" />
    </div>
    <div class="searchBox">
      <input class="input" placeholder="搜索" type="text" />
    </div>
    <ul class="friendList">
      <li class="friendItem" v-for="(item,index) in friendList" :key="index">
        <img class="innerAvatar" :src="require(item.url)" alt="" />
        <div class="chatView">
          <div class="top">
            <p class="userName">{{ item.userName }}</p>
            <p class="time">{{ item.time }}</p>
          </div>
          <div class="bottom">
            <p class="text">{{ item.text }}</p>
            <div class="unreadTip">{{ item.unreadTip }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {require} from '@/utils/require.ts'
import {friendItemType} from './type.ts'
const friendList:Ref<Array<friendItemType>> = [
  {
    userName:'嘉文四世',
    time:'10:20',
    text:'你好啊,我是皇子嘉文四世,我们现在是好朋友了!',
    url:'@/assets/friend/jiawen.png',
    unreadTip:1
  },
  {
    userName:'德莱厄斯',
    time:'10:30',
    text:'你好啊,我是统帅德莱厄斯,我们现在是好朋友了!',
    url:'@/assets/friend/nuoke.png',
    unreadTip:1
  }
]
</script>

<style lang="less" scoped>
  .leftList {
  height: 100vh;
  width: 300px;
  background: #262525;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
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
  .friendList {
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
        .userName{
          font-size: 16px;
          color: #fff;
        }
        .time{
          font-size: 12px;
          color:#f1f1f1
        }
      }
      .bottom {
        display: flex;
        width: 100%;
        .text{
          width: 70%;
          white-space: nowrap; /* 确保文本在一行内显示 */
          overflow: hidden; /* 隐藏超出容器的文本 */
          text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
        }
        .unreadTip{
          background: red;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          text-align: center;
          line-height: 14px;
        }
      }
    }
    .friendItem:hover{
        background: #000;
    }
  }
}
</style>