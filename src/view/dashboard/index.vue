<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <MenuCom @addTabFun="addTab" ref="menuComRef"></MenuCom>
        </el-aside>
        <el-main class="main">
          <div class="globalBox">
            <el-tabs
              v-model="editableTabsValue"
              type="card"
              class="demo-tabs"
              closable
              @tab-remove="removeTab"
              @tab-click="clickTabFun"
            >
              <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                <router-view></router-view>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/header.vue";
import MenuCom from "@/components/MenuCom.vue";
import {tabItem} from './type'
import useTabsData from "./tabsData";
import { ElMessage } from "element-plus";
import { useRouter,useRoute } from "vue-router";

let editableTabs = toRef(useTabsData().list);
let editableTabsValue = toRef(useTabsData().activeTabName);
let menuComRef = ref(null)
let router = useRouter()
let route = useRoute()
/**
 * 
 * @param targetName 删除的标签信息
 */

const removeTab = (targetName: string) => {
  if(editableTabs.value.length<2){
    ElMessage({
      type:'warning',
      message:'最少保留一条页签'
    })
    return
  }
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab:tabItem, index:number) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }
  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab:tabItem) => tab.name !== targetName);
  router.push({name:editableTabsValue.value})
};

/**
 * 
 * @param targetInfo 新增标签信息
 */
const addTab = (targetInfo:tabItem) => {
  if(editableTabs.value.find((item:tabItem)=>item.name === targetInfo.name)){
    editableTabsValue.value = targetInfo.name
    return
  }
  if(editableTabs.value.length>9){
    ElMessage({
      type:'warning',
      message:'最多存在10条页签'
    })
    return
  }
  editableTabs.value.push(targetInfo)
  editableTabsValue.value = targetInfo.name
}

/**
 * 
 * @param targetInfo 点击的标签信息
 */
const clickTabFun = (targetInfo:any)=>{
  const {name} = targetInfo.props
  editableTabsValue.value = name
  nextTick(()=>{
    // console.log(menuComRef.value.changeActiveValue,'??ref')
    menuComRef.value.changeActiveValue(name)
    router.push({name})
  })
  
}
onMounted(()=>{
  console.log(route,'路由信息')
  let addItem:tabItem = {
   title:route.meta.cname,
   name:route.name
  }
  addTab(addItem)
})
</script>
<style lang="less" scoped>
.header {
  width: 100vw;
  height: 100px;
  box-shadow: #f2f2f4 1px 1px 5px 2px;
}
.aside {
  // width: 200px;
  height: calc(~"100vh - 100px");
}
.main {
  //  width: calc(~"100vw - 200px");
  width: auto;
  height: calc(~"100vh - 100px");
  background: #f2f2f4;
}
:deep(.el-aside) {
  width: auto !important;
}
:deep(.el-menu) {
  border-right: none !important;
}
</style>