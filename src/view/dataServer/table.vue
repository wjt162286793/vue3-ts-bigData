<template>    
<div class="tableBox">
    <el-table :data="tableData" style="width: 100%" stripe :border="true">
      <el-table-column prop="dataName" label="数据名称" width="400" />
      <el-table-column prop="source" label="数据来源" width="width">
        <template #default="scope">
          <span>{{ getSource(scope) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="domain" label="应用领域" width="300">
        <template #default="scope">
          <el-tag v-for="(item,index) in getDomain(scope)" :key="index" style="margin-right:10px;">
            {{ item.label }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="usageAmount" label="调用总量" width="width" />
      <el-table-column prop="safeLevel" label="安全等级" width="width" />
      <el-table-column prop="code" label="数据编号" width="width" />
      <el-table-column prop="status" label="状态" width="width">
        <template #default="scope">
          <span>{{ getStatus(scope) }}</span>
        </template>
      </el-table-column>
      <el-table-column  label="Operations" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="openDiaLog(scope,'edit')"
            >修改</el-button
          >
          <el-button link type="primary" size="small" @click="openDiaLog(scope,'delete')">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
 </div>

  </template>
  
  <script lang="ts" setup>
  import { cloneDeep } from 'lodash'
import {domainOptions,sourceOptions,statusOptions,tableData,activeRow,dialogVisible, ruleForm,dialogTitle,dialogWidth,handlerType} from './data'

  const getSource = (record:any)=>{
    let row = sourceOptions.value.find((item:any)=>item.value === record.row.source)
    return row?.label
  }
  const getDomain = (record:any)=>{
    let arr = domainOptions.value.filter((item:any)=>record.row.domain.includes(item.value))
    return arr
  }
  const getStatus = (record:any)=>{
    let row = statusOptions.value.find((item:any)=>item.value === record.row.status)
    return row?.label
  }
  // const getDetail = (record:any)=>{
  //   activeRow.value = record.row
  //   dialogVisible.value = true
  //   ruleForm.value = activeRow.value
  //   handlerType.value = 'edit'
  // }
  // const deleteRow = (record:any)=>{
  //   activeRow.value = record.row
  //   dialogVisible.value = true
  //   ruleForm.value = activeRow.value
  //   handlerType.value = 'delete'
  // }
  const openDiaLog = (record:any,type:string)=>{
    handlerType.value = type
    activeRow.value = cloneDeep(record.row)
    dialogVisible.value = true
    if(type === 'edit'){
      ruleForm.value = activeRow.value
      dialogWidth.value = '700px'
      dialogTitle.value = '修改数据'
    }else{
      dialogWidth.value = '500px'
      dialogTitle.value = '移除数据'
    }
  }
  </script>
  <style lang="less" scoped>
.tableBox{
  height: 600px;
  overflow: auto;
}
  </style>
  