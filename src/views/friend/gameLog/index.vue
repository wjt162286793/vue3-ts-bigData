<template>
  <ul class="gameLogBox">
    <li class="gameLogItem" v-for="item in gameLogList" :key="item.id">
      <div class="partition"></div>
      <div class="title">
        <img :src="require(item.logoUrl)" alt="" class="logo" />
        <span class="userInfo">{{ item.userInfo }}</span>
      </div>
      <div class="atta">
        <img :src="require(item.attachment)" alt="" class="atta" />
      </div>
      <div class="text">
        <p v-for="(val, ind) in filterText(item.text)" :key="ind">
          {{ val }}
        </p>
      </div>
      <div class="footer">
        <div>
          <img :src="require('@/assets/gameLog/love_not.svg')" alt="" />
          <span>{{ item.starNum }}</span>
          <img :src="require('@/assets/gameLog/follow_not.svg')" alt="" />
          <span>{{ item.lookNum }}</span>
        </div>
        <span class="timeText">{{ item.time }}</span>
      </div>
      <ul class="comment">
          <li v-for="(comItem,comIndex) in item.comment" :key="comIndex">
            <span style="color:red;">
               {{ comItem.user }}
            </span>
             :  &nbsp;&nbsp;&nbsp;&nbsp;
             <span>
               {{ comItem.text }}
             </span>
         </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { require } from "@/utils/require.ts";
import { gameLogItem } from "../type";
const gameLogList: Ref<Array<gameLogItem>> = ref([
  {
    id: "1",
    logoUrl: "@/assets/gameLog/t1log.png",
    userInfo: "t1战队",
    attachmentType: "big_one",
    attachment: "@/assets/gameLog/t1_be_first.png",
    text: `今日t1获得了S13英雄联盟全球总决赛冠军,上单zeus为此次赛事的fmvp。 /n
   这也是faker选手最荣耀的时刻,他拿到了英雄联盟至今最高的荣誉:4冠王! /n
   正所谓faker无需向众神祈祷,因为众神传颂的都是他的名号! 
   `,
    starNum: 10000000,
    lookNum: 13813813,
    star: true,
    flow: false,
    time: "2023-11-19 19:30:00",
    comment: [
      {
        user: "小智",
        text: "恭喜faker老师四冠王",
        starNum: 999999,
      },
      {
        user: "管泽元",
        text: "最高的山,最长的河",
        starNum: 827191,
      },
    ],
  },
  {
    id: "2",
    logoUrl: "@/assets/gameLog/t1log.png",
    userInfo: "t1战队",
    attachmentType: "big_one",
    attachment: "@/assets/gameLog/t1_be_first.png",
    text: `今日t1获得了S13英雄联盟全球总决赛冠军,上单zeus为此次赛事的fmvp。 /n
   这也是faker选手最荣耀的时刻,他拿到了英雄联盟至今最高的荣誉:4冠王! /n
   正所谓faker无需向众神祈祷,因为众神传颂的都是他的名号! 
   `,
    starNum: 10000000,
    lookNum: 13813813,
    star: true,
    flow: false,
    time: "2023-11-19 19:30:00",
    comment: [
      {
        user: "小智",
        text: "恭喜faker老师四冠王",
        starNum: 999999,
      },
      {
        user: "管泽元",
        text: "最高的山,最长的河",
        starNum: 827191,
      },
    ],
  },
]);

const filterText = (text: string) => {
  return text.split("/n");
};
</script>

<style lang="less" scoped>
.gameLogBox {
  width: calc(100vw - 400px);
  height: 100vh;
  overflow: auto;
  padding: 50px 15%;
  .gameLogItem {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 16px;
      .logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #1afa29;
        margin-right: 30px;
      }
      .userInfo {
        font-size: 24px;
        font-weight: 600;
        line-height: 50px;
      }
    }
    .atta {
      width: 100%;
      margin-bottom: 16px;
    }
    .text {
      margin-bottom: 16px;
      p {
        line-height: 24px;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 40px;
      background: #fff;
      color: #8a8a8a;
      margin-bottom: 16px;
      img {
        margin: 0 10px 0 20px;
        cursor: pointer;
      }
      .timeText {
         margin-right: 20px;
      }
    }
    .comment{
      background: #fff;
      padding: 20px;
      color: #8a8a8a;
      margin-bottom: 16px;
    }
    .partition{
      background: #1afa29;
      height: 1px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>