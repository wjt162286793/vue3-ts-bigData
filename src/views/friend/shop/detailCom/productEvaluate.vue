<template>
  <div class="evaluateBox">
    <ul class="evaluateList">
      <li class="evaluateItem" v-for="item1 in result" :key="item1.id">
        <div class="owerBox">
          <img class="avatar" src="@/assets/friend/avatar.png" alt="" />
          <div class="owerInfo">
            <p class="owerName">{{ item1.ownerInfo.userName }}</p>
            <p class="owerText">{{ item1.text }}</p>
            <p>
              <span class="reply">评论</span>
              <img src="@/assets/shop/evaluate/love.svg" alt="" />
              <span>{{ item1.loveTotal }}</span>
            </p>
          </div>
        </div>
        <ul class="childList">
          <li class="childItem" v-for="item2 in item1.children" :key="item2.id">
            <div class="title">
              <img class="avatar" src="@/assets/friend/jiawen.png" alt="" />
              <span class="userName">{{ item2.ownerInfo.userName }}</span>
            </div>
            <div class="contentText">
              {{ item2.text }}
            </div>
            <div class="footer">
               <span class="reply">评论</span>
              <img src="@/assets/shop/evaluate/love.svg" alt="" />
              <span>{{ item2.loveTotal }}</span>
            </div>
          </li>
          <div class="more">加载更多评论</div>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { evaluateItem, anyUserType } from "@/views/friend/type.ts";
import { EvaluateItem } from "@/views/friend/class.ts";
// const mockList: Ref<any> = ref([
//   {
//     id: "1", //当前评论的id
//     ownerInfo: {
//       //楼主信息
//       id: "user1",
//       userName: "王惊涛",
//       userAvatar: "img1.png",
//     },
//     isFirstFloor: true,  //是不是楼主(一楼)
//     text: "这款鼠标很给力!", //评论
//     imgList:['showImage1'],  //附带照片
//     userTotal: 2, //评论总人数
//     textTotal: 4, //评论总条数
//     loveTotal: 10, //点赞数
//     toUserInfo: {
//       //
//       id: "user0",
//       userName: "皇子商铺",
//       userAvatar: "img0.png",
//     },
//     time: "2023-11-12 10:00", //评论时间
//     ip: "北京", //评论的地址
//     childRen: [  //折叠和后续的评论
//       {
//         id: "1-1",
//         ownerInfo: {
//           //楼主信息
//           id: "user0",
//           userName: "皇子商铺",
//           userAvatar: "img0.png",
//         },
//         text: "谢谢您的评价",
//         imgList:['showImage2'],
//         toUserInfo: {
//           //
//           id: "user1",
//           userName: "王惊涛",
//           userAvatar: "img1.png",
//         },
//         loveTotal: 2,
//         time: "2023-11-12 10:01",
//         ip: "北京",
//         isFirst: false,
//         userTotal: null, //评论总人数
//         textTotal: null, //评论总条数
//       },
//       {
//         id: "1-2",
//         ownerInfo: {
//           id: "user1",
//           userName: "小马",
//           userAvatar: "img2.png",
//         },
//         text: "是真的吗?",
//         toUserInfo: {
//           id: "user1",
//           userName: "王惊涛",
//           userAvatar: "img1.png",
//         },
//         loveTotal: 2,
//       },
//     ],
//   },

// ]);

const result: Ref<Array<anyUserType>> = ref([]);

    //数据
const item1: evaluateItem = new EvaluateItem(
  "1",
  { id: "user1", userName: "王惊涛", userAvatar: "img1.png" },
  true,
  "这款鼠标很给力",
  ["img1.gif"],
  2,
  3,
  10,
  { id: "user0", userName: "皇子店铺", userAvatar: "img0.png" },
  "2023-11-12 10:00",
  "北京",
  []
);
console.log(item1, "item1的值");
const children1: evaluateItem = new EvaluateItem(
  "1-1",
  { id: "user0", userName: "皇子店铺", userAvatar: "img0.png" },
  false,
  "谢谢您的评价",
  [],
  null,
  null,
  5,
  { id: "user1", userName: "王惊涛", userAvatar: "img1.png" },
  "2023-11-12 10:01",
  "上海",
  []
);
const children2: evaluateItem = new EvaluateItem(
  "1-2",
  { id: "user2", userName: "马师", userAvatar: "img2.png" },
  true,
  "我的鼠标和你的不一样",
  ["img2.gif"],
  null,
  null,
  4,
  { id: "user1", userName: "王惊涛", userAvatar: "img1.png" },
  "2023-11-12 10:05",
  "北京",
  []
);


//数据
const item2: evaluateItem = new EvaluateItem(
  "2",
  { id: "user1", userName: "王惊涛", userAvatar: "img1.png" },
  true,
  "这款鼠标很给力",
  ["img1.gif"],
  2,
  3,
  10,
  { id: "user0", userName: "皇子店铺", userAvatar: "img0.png" },
  "2023-11-12 10:00",
  "北京",
  []
);
console.log(item1, "item1的值");
const children3: evaluateItem = new EvaluateItem(
  "1-1",
  { id: "user0", userName: "皇子店铺", userAvatar: "img0.png" },
  false,
  "谢谢您的评价",
  [],
  null,
  null,
  5,
  { id: "user1", userName: "王惊涛", userAvatar: "img1.png" },
  "2023-11-12 10:01",
  "上海",
  []
);
const children4: evaluateItem = new EvaluateItem(
  "1-2",
  { id: "user2", userName: "马师", userAvatar: "img2.png" },
  true,
  "我的鼠标和你的不一样",
  ["img2.gif"],
  null,
  null,
  4,
  { id: "user1", userName: "王惊涛", userAvatar: "img1.png" },
  "2023-11-12 10:05",
  "北京",
  []
);


item1.children.push(children1);
item1.children.push(children2);

item2.children.push(children3);
item2.children.push(children4);
result.value.push(item1);
result.value.push(item2);
console.log(result.value, "mock的评论区所需要的数据");
</script>
<style lang="less">
.evaluateBox {
  height: calc(100vh - 90px);
  padding: 10px 40px;
  .evaluateList {
    background: #444;
    height: calc(100% - 20px);
    overflow: auto;
    .evaluateItem {
      margin: 20px 40px 20px;
      color: #fff;
      .owerBox {
        display: flex;
        .owerInfo {
          p {
            margin-bottom: 10px;
          }
        }
        .owerName {
          color: #3deb09;
        }
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 30px;
        }
        .reply {
          margin-right: 20px;
        }
      }
      .childList {
        margin-left: 75px;
        .childItem {
          margin-bottom: 10px;
          .title {
            margin-bottom: 10px;
            .avatar {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 10px;
            }
            .userName{
                color: #3deb09;
            }
          }
          .contentText {
              margin-left: 40px;
              margin-bottom: 10px;
            }
            .footer{
                margin-left: 40px;
                .reply {
          margin-right: 20px;
        }
            }
        }
      }
    }
  }
}
</style>
