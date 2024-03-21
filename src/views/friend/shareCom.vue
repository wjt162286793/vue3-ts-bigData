<template>
    <ul class="list">
     <li class="item" v-for="(item) in list" :key="item.id" @click="changeShareItem(item)">
       <img :src="getUrl(item)" alt="">
       <p>{{ item.cname }}</p>
     </li>
    </ul>
</template>

<script lang="ts" setup>
import { require } from "@/utils/require.ts";
import {shareItem} from './type'
const emit = defineEmits(['sendShareType'])
const list:Ref<Array<shareItem>> = ref([
    {
        id:'1',
        name:'shop',
        cname:'梦商城'
    },
    {
        id:'2',
        name:'live',
        cname:'梦音频'
    },
    {
        id:'3',
        name:'nearby',
        cname:'附近'
    },
    {
        id:'4',
        name:'gameLog',
        cname:'游戏日志'
    },
]) 
const getUrl = (item:shareItem)=>{
   return require(`@/assets/friend/${item.name}.svg`)
}
const changeShareItem = (item:shareItem)=>{
   emit('sendShareType',item.name)
}
</script>

<style lang="less" scoped>
.list{
    width: 100%;
    .item{
        cursor: pointer;
        width: 100%;
        padding: 24px;
        display: flex;
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            height: 30px;
            margin-right: 20px;
        }
    }
    .item:hover{
    background: #000;
}
}

</style>