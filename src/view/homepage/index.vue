<template>
    <div class="top">
      <SelfBoard></SelfBoard>
      <ModeList></ModeList>
    </div>
    <div class="charts">
      <BoardCharts></BoardCharts>
    </div>
</template>
<script lang="ts" setup>
import SelfBoard from './selfBoard.vue';
import ModeList from './modeList.vue';
import BoardCharts from './boardCharts.vue';
</script>
<style lang="less" scoped>
.top{
  display: flex;
}
.charts{
  height: auto;
}
</style>