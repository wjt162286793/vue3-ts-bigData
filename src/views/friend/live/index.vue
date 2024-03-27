<template>
   <el-button @click="sendMsg">发送消息</el-button>
</template>

<script lang="ts" setup>
const socket =  ref(new WebSocket("ws://localhost:8081"))
socket.value.onopen = function(){
   console.log('vue连接上了')
}
socket.value.onmessage = function(event){
   console.log('vue接收到的消息',event)
   if(event.data === '王惊涛你好,我是服务端,收到了你的消息'){
      socket.value.send('看到了,看来我们连接成功了')
   }
}
socket.value.onclose = function(){
   console.log('vue')
}
// socket.value.send('你好啊,我是王惊涛')

const sendMsg = ()=>{
   // console.log(socket.value,'socket的值')
   socket.value.send('你好啊,我是王惊涛')
}

</script>

<style lang="less" scoped>

</style>