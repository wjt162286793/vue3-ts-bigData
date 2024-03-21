<template>
   <baidu-map
     class="bm-view"
     :center="{ lng: 116.404, lat: 39.915 }" 
     :zoom="15"
   >
   </baidu-map>
 </template>
  
 <script lang="ts" setup>
  
 </script>
 <style lang="less" scoped>
 .bm-view {
   width: 100%;
   height: 100vh;
 }
 </style>