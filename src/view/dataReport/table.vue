<template>
    <div class="tableBox">
        <div class="tableTop">{{ DataTitle }}</div>
      <vxe-table
      stripe
      border
        height="500"
        ref="xTable"
        :data="tableData">
        <!-- <vxe-column type="checkbox" width="60">
          <template #header="{ checked, indeterminate }">
            <span class="custom-checkbox" @click.stop="toggleAllCheckboxEvent">
              <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
              <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
              <i v-else class="vxe-icon-checkbox-unchecked"></i>
            </span>
          </template>
          <template #checkbox="{ row, checked, indeterminate }">
            <span class="custom-checkbox" @click.stop="toggleCheckboxEvent(row)">
              <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
              <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
              <i v-else class="vxe-icon-checkbox-unchecked"></i>
            </span>
          </template>
        </vxe-column> -->
        <vxe-column v-for="(item,index) in cloumnList" :key="index" :field="item.prop" :title="item.label"></vxe-column>
      </vxe-table>
      <vxe-pager
      v-model:current-page="pageVO1.currentPage"
      v-model:page-size="pageVO1.pageSize"
      :total="pageVO1.total"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>
    </div>
  </template>
  
  <script lang="ts" setup>
//   import { VxeTableInstance } from 'vxe-table'
  import {allData} from '@/mockData/dataTreeList.json' 
  const cloumnList = ref<any[]>([])
  const tableData = ref<any[]>([])
  const DataTitle = ref<string>()
//   const xTable = ref<VxeTableInstance<any>()
  const xTable = ref<any>()
    import {Tree} from './datasourceListType'
  
  
  const toggleAllCheckboxEvent = () => {
    const $table = xTable.value
    if ($table) {
      $table.toggleAllCheckboxRow()
    }
  }
  
  const toggleCheckboxEvent = (row: any) => {
    const $table = xTable.value
    if ($table) {
      $table.toggleCheckboxRow(row)
    }
  }

  const pageVO1 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 8
})

// onMounted(()=>{
//     cloumnList.value = hokHeroWinList.tableCloumn
//     tableData.value = hokHeroWinList.data
// })
const changePageData = (newdata:Tree)=>{
    cloumnList.value = allData[newdata.id].tableCloumn || []
    tableData.value = allData[newdata.id].data || []
    DataTitle.value = newdata.label || []
    // switch(newdata.id){
    //   case 'hokHeroWinList':
    // console.log('走到我这里了,')
    // cloumnList.value = allData[newdata.id].tableCloumn
    // tableData.value = allData[newdata.id].data
    // DataTitle.value = newdata.label
    // break
    // default:
    // cloumnList.value = []
    // tableData.value = []
    // }
}
defineExpose({
  changePageData
})
  </script>
  
  <style lang="less" scoped>
  .tableBox{
    width: calc('~100%-400px') ;
    padding: 16px;
    .tableTop{
      margin:8px;
      font-size:18px; 
      font-weight:600;
    }
  }
  .custom-checkbox {
    font-size: 18px;
    cursor: pointer;
  }
  </style>