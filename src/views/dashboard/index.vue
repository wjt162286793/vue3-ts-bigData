<template>
  <div class="homePageBox">
    <ul class="menuList">
      <img src="@/assets/homePage/menu.svg"/>
      <li class="liBox" v-for="(item) in menuList" :key="item.name" :style="getStyle(item)" @click="changeItem(item)">{{ item.cname }}</li>
      <img class="close" src="@/assets/homePage/close.svg"/>
    </ul>
    <div class="contextBox">
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { menuItem } from "./type.ts";

//路由
const route = useRoute()
const router = useRouter()


const menuList: Ref<Array<menuItem>> = ref([]);
menuList.value = route.matched[0].children.map((item:menuItem)=>{
  return{
    name:item.name,
  path:item.path,
  cname:item.meta.cname
  }
})

//默认选中菜单项
const activeMenuItemName:Ref<string> = ref('')
const activelStyle = {
  color: '#000',
  background: '#fff'
}
onMounted(()=>{
  activeMenuItemName.value = route.name
})
const getStyle = (item:menuItem) =>{
 return activeMenuItemName.value === item.name ? activelStyle:null
}
const changeItem = (item:menuItem)=>{
  router.push({name:item.name})
  activeMenuItemName.value = item.name
}
</script>
<style lang="less" scoped>
.homePageBox {
  display: flex;
  .menuList {
    width: 100px;
    background: #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right:1px #fff solid;
    position: relative;
    img{
      height: 30px;
      margin:20px 0px;
    }
    .close{
       position:absolute;
       left: 30px;
       bottom: 20px;
       cursor: pointer;
    }
    .liBox{
      height: 40px;
      line-height: 40px;
      border-bottom: 1px #f1f1f1 solid;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
    .liBox:hover{
      color: #000;
      background: #fff;
    }
  }
  .contextBox{
    flex: 1;
    color: #fff;
  }
}
</style>
