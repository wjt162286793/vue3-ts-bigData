<template>
  <div class="box">
    <div id="newUser"></div>
    <div id="modeRatio"></div>
  </div>
</template>

<script lang="ts" setup>
//echarts
import * as echarts from "echarts";
console.log(echarts, "图表");

onMounted(() => {
    nextTick(()=>{
        drawNewUserChart();
  drawModeRatioChart()
    })

});
const drawNewUserChart = () => {
  const newUserDom = document.querySelector("#newUser");
  let newUserChart = echarts.init(newUserDom);

  newUserChart.setOption({
    title: {
      text: "昨日模块使用统计",
    },
    tooltip: {},
    xAxis: {
      data: ["数据规划", "数据服务", "数据安全", "数据采集", "用户画像", "接口服务"],
    },
    yAxis: {},
    series: [
      {
        name: "操作次数",
        type: "bar",
        data: [5000, 3692, 4501, 1130, 1210, 12120],
      },
    ],
  });
};
const drawModeRatioChart = ()=>{
    let modeRatioChartDom = document.querySelector("#modeRatio")
    let modeRatioChart = echarts.init(modeRatioChartDom);
    modeRatioChart.setOption({
    title: {
      text: "昨日模块使用统计",
    },
    tooltip: {},
    xAxis: {
      data: ["数据规划", "数据服务", "数据安全", "数据采集", "用户画像", "接口服务"],
    },
    yAxis: {},
    series: [
      {
        name: "操作次数",
        type: "bar",
        data: [5000, 3692, 4501, 1130, 1210, 12120],
      },
    ],
  });
}
</script>

<style lang="less" scoped>
.box{
    display: flex;
    width: 100%;
}
#newUser {
  width: 40%;
  height: 300px;
  margin-right: 10%;
}
#modeRatio {
  width: 40%;
  height: 300px;
}
</style>