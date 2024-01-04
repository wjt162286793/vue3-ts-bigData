<template>
  <div class="modeList">
    <div
      class="mode"
      v-for="(item, index) in modeList"
      :key="index"
      :style="getModeStyle(item)"
    >
      <p class="modeTitle">{{ item.title }}</p>
      <p class="modeDesc">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { modeItem } from "./type";
let modeList: Ref<Array<modeItem>> = ref([
  {
    title: "数据规划",
    name: "dataPlan",
    num: 30,
    color: '#3785c5',
    desc: "数据规划是确定信息系统支持组织的业务活动的各类数据及相互关系，识别组织中各业务领域的主题数据（或数据类）",
  },
  {
    title: "数据服务",
    name: "dataServer",
    num: 30,
    color: '#ee4f32',
    desc: "数据服务指提供数据采集、数据传输、数据存储、数据处理、数据交换、数据销毁等数据各种生存形态演变的一种信息技术驱动的服务。",
  },
  {
    title: "数据安全",
    name: "safeData",
    num: 30,
    color: '#145005',
    desc: "为数据处理系统建立和采用的技术和管理的安全保护，保护计算机硬件、软件和数据不因偶然和恶意的原因遭到破坏、更改和泄露",
  },
  {
    title: "数据采集",
    name: "dataCollect",
    num: 30,
    color: '#50550b',
    desc: "数据采集，是指从传感器和其它待测设备等模拟和数字被测单元中自动采集信息的过程。",
  },
  {
    title: "用户画像",
    name: "userPortrait",
    num: 30,
    color: '#800651',
    desc: "用户画像又称用户角色，作为一种勾画目标用户、联系用户诉求与设计方向的有效工具，用户画像在各领域得到了广泛的应用。",
  },
  {
    title: "接口服务",
    name: "apiServer",
    num: 30,
    color: '#3c0853',
    desc: "API数据接口服务是一种帮助企业实现数据交互和信息共享的技术服务。它可以将企业内部数据与外部系统进行连接和对接，实现数据的传输和共享。",
  },
]);

const getModeStyle = (item: modeItem) => {
  return {
    background:item.color,
  };
};
</script>

<style lang="less" scoped>
.modeList {
  margin-left: 40px;
}
.mode {
  color: #fff;
  width: 300px;
  height: 150px;
  padding: 20px 30px;
  cursor: pointer;
  border-radius: 10px;
  float: left;
  margin-bottom: 20px;
  margin-right: 20px;
  //  background-image:linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);
  .modeTitle{
    margin-top: 0px !important;
    font-size: 20px;
    font-weight: 600;
  }
}
.div{
    color: #3c0853;

}
</style>