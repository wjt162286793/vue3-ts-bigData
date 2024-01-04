<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
          <h3>工作看板</h3>  
        <el-badge :value="notReadNum" class="itembadge">
            <el-button class="button" text type="primary" @click="clearNotRead">一键已读</el-button>
        </el-badge>
      </div>
    </template>
    <div class="contentBox">
    <div v-for="(item, index) in list" :key="index" class="text item">
    <span class="level">{{ item.level }}</span>
      <span>{{ item.content }}</span>
      <span class="status read" v-if="item.status">已读</span>
      <span class="status not" @click="changeStatus(item.id)" v-else>未读</span>
    </div>
    </div>
  </el-card>
</template>
  <script lang="ts" setup>
import { isTemplateExpression } from "typescript";
import { selfListType } from "./type";

//列表
const list: Ref<Array<selfListType>> = ref([
  {
    name: "apiServer",
    content: "接口服务已定时更新",
    status: false,
    level:'常规',
    id: 1,
  },
  {
    name: "dbServer",
    content: "155机器已启动",
    status: false,
    level:'常规',
    id: 2,
  },
  {
    name: "safeData",
    content: "数据安全定期检查无异常",
    status: false,
    level:'常规',
    id: 3,
  },
  {
    name: "safeInternet",
    content: "网络安全报警",
    status: false,
    level:'严重',
    id: 4,
  },
  {
    name: "version",
    content: "版本已更新",
    status: false,
    level:'常规',
    id: 5,
  },
  {
    name: "dataServer",
    content: "数据服务异常",
    status: false,
    level:'警告',
    id: 6,
  },
]);



/**
 * 信息读取操作
 */
let notReadNum:Ref<number> = ref(0)
const getNotReadNum = ()=>{
    notReadNum.value = list.value.filter((item:selfListType)=>item.status === false).length
    return notReadNum.value
}

const changeStatus = (id:number)=>{
    list.value.find((item:selfListType)=>item.id === id).status = true
    getNotReadNum()
}

/**
 * 一键清空
 */
const clearNotRead = ()=>{
  list.value.forEach((item:selfListType)=>{
    item.status = true
  })
  getNotReadNum()
}

getNotReadNum()
</script>
  
  <style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}
.contentBox{
    height: 300px;
    overflow-y: auto;
}
.level{
    display: inline-block;
    margin-right: 10px;
    color: rgb(240, 199, 20);
}
.item {
  margin-bottom: 18px;
  border-bottom: 1px dashed #dce0e7;
}
.itembadge{
  margin-top: 10px;
  margin-right: 10px;
}
.read {
  color: rgb(20, 17, 216);
}
.not {
  color: rgb(209, 66, 47);
}

.box-card {
  width: 800px;
  height: 400px;
}
.status {
  float: right;
  cursor: pointer;
  margin-right: 10px;
}
</style>
  