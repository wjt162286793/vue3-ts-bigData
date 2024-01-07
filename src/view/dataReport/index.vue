<template>
  <div class="dataReportBox">
    <dataSourceList @choseTreeData="choseTreeData"></dataSourceList>
    <el-tabs  v-model="tabValue" class="demo-tabs">
    <el-tab-pane label="数据列表" name="dataList">
      <Table ref="tableRef"></Table>
    </el-tab-pane>
    <el-tab-pane label="数据图表" name="dataCharts">
      <dataCharts></dataCharts>
    </el-tab-pane>
  </el-tabs>
    
  </div>
</template>
<script lang="ts" setup>
import dataSourceList from '@/components/datasourceList.vue'
import dataCharts from './dataCharts.vue';
import Table from './table.vue';
import {Tree} from '@/components/datasourceListType'
const tableRef = ref<any>(null)

const tabValue = ref<string>('dataList')

const choseTreeData = (treeItem:Tree)=>{
  if(treeItem.type === 'dataTable'){
     console.log(treeItem,'传递的data',tableRef)
     nextTick(()=>{
      tableRef.value.changePageData(treeItem)
     })
  }
}
</script>
<style lang="less" scoped>
  .dataReportBox{
    width: 100%;
    height: 100%;
    display: flex;
    .demo-tabs{
      width: 100%;
      padding: 12px;
    }
  }
</style>