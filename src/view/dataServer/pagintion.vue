

<template>
  <div class="pagintionBox">
    <el-pagination
      class="pagintion"
      background
      layout="prev, pager, next,jumper,total"
      :total="tableData.length"
    />
  </div>
</template>

<script lang="ts" setup>
import { tableData } from "./data";
</script>

<style lang="less" scoped>
.pagintion {
  float: right;
}
</style>