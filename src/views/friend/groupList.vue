<template>
   <div class="groupList">
    <p class="title">&nbsp;&nbsp;&nbsp;联系人</p>
    <div class="groupItem" v-for="(item) in personList" :key="item.id" @click="changeUser(item)">
        <img class="innerAvatar"  :src="require(item.url)" alt="" />
        <p>{{ getNameshow(item) }}</p>
    </div>
    <p class="title">&nbsp;&nbsp;&nbsp;群组</p>
    <div class="groupItem" v-for="(item) in groupList" :key="item.id" @click="changeUser(item)">
        <img class="innerAvatar"  :src="require(item.url)" alt="" />
        <p>{{ getNameshow(item) }}</p>
    </div>
   </div>
</template>

<script lang="ts" setup>
import { require } from "@/utils/require.ts";
import {groupItem} from './type'
const emit = defineEmits(['reqChatMsgList'])
const personList:Ref<Array<groupItem>> = ref([
    {
        id:'1',
        name:'嘉文四世',
        nickname:'皇子殿下',
        url:'@/assets/friend/jiawen.png'
    },
    {
        id:'2',
        name:'德莱厄斯',
        nickname:'诺手统帅',
        url:'@/assets/friend/nuoke.png'
    }
])

const groupList:Ref<Array<groupItem>> = ref([
    {
        id:'1',
        name:'德玛西亚帝国群',
        nickname:'德邦敬老院',
        url:'@/assets/friend/jiawen.png'
    },
    {
        id:'2',
        name:'诺克萨斯帝国群',
        nickname:'诺克幼儿园',
        url:'@/assets/friend/nuoke.png'
    }
]) 
const getNameshow = (item:groupItem)=>{
  return (`${item.nickname}(${item.name})`)
}
const changeUser = (item:groupItem) =>{
    emit('reqChatMsgList',item.name)
}
</script>

<style lang="less" scoped>
  .groupList {
    width: 100%;
    title{
        width: 100%;
    }
    .groupItem {
      cursor: pointer;
      width: 100%;
      padding: 12px;
      display: flex;
      height: 80px;
      align-items: center;
      .innerAvatar {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 16px;
      }
    }
    .groupItem:hover{
        background: #000;
    }
}
</style>