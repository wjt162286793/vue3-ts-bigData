<template>
  <el-icon :size="24" class="icon" v-show="isCollapse" @click="changeMenuFold(false)"><Expand /></el-icon>
  <el-icon :size="24" class="icon" v-show="!isCollapse" @click="changeMenuFold(true)"><Fold /></el-icon>
  <el-menu
    :default-active="activeValue"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >

  <div v-for="(item,index) in menuList" :index="item.name" :key="index">
    <el-menu-item :index="item.name" v-if="item.meta.type === 'page'" @click="jumpMode(item.name,item.meta.cname)">
      <img  class="menuItemImg" :src="require(`@/assets/router/${item.name}.svg`)" alt="">
      <template v-show="!isCollapse" #title>{{ item.meta.cname }}</template>
    </el-menu-item>
    <el-sub-menu :index="item.name"  v-if="item.meta.type === 'group'">
      <template #title>
        <img  class="menuItemImg" :src="require(`@/assets/router/${item.name}.svg`)" alt="">
        <span v-show="!isCollapse">{{ item.meta.cname }}</span>
      </template>
      <el-menu-item  v-for="(val,ind) in item.children" :key="ind" :index="val.name" @click="jumpMode(val.name,val.meta.cname)">
        <img  class="menuItemImg" :src="require(`@/assets/router/${val.name}.svg`)" alt="">
        <template #title>{{ val.meta.cname }}</template>
      </el-menu-item>
    </el-sub-menu>
  </div>
  </el-menu>
</template>

<script lang="ts" setup>

import { useRouter } from "vue-router";
import { require } from '@/utils/require'

/**
 * 菜单扩展收缩
 */
const isCollapse:Ref<boolean> = ref(false)
const changeMenuFold = (value:boolean):void=>{
    isCollapse.value = value
}

/**
 * 菜单列表
 */
const router = useRouter()
const route = useRoute()
console.log(route.matched,'???')
const menuList = route.matched.find((item)=>item.name === 'dashboard')?.children

let emit = defineEmits(['addTabFun'])
/**
 * 
 * @param modeName 路由选项名称,也是模块名称
 */
const jumpMode = (modeName:string,modeCname:string):void =>{
  router.push({name:modeName})
  emit('addTabFun',{title:modeCname,name:modeName})
}

let activeValue:Ref<string> = ref('homePage') 
const changeActiveValue = (val:string):void=>{
  activeValue.value = val
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

defineExpose({changeActiveValue})
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.icon{
    cursor: pointer;
    margin: 20px;
}
.menuItemImg{
 width: 20px;
 height: 20px;
 margin-right: 10px;
}
</style>
