<template>
  <div class="mapMainBox">
    <div class="header">
    </div>
    <baidu-map
      class="bm-view"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="15"
    >
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width:100,height:-10}"></bm-scale>
    </baidu-map>
  </div>
</template>
  
 <script lang="ts" setup>
 onMounted(()=>{
  const Map = document.querySelector('.bm-view')
  console.log(Map,'地图组件')
 })

 
</script>
 <style lang="less" scoped>
.mapMainBox {
  width: calc(100vw - 400px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    height: 100px;
    background: #262525;
    // background: #fff;
  }
  .bm-view {
    background: #fff;
    width: 100%;
    // padding:100px 16px 16px;
    flex: 1;
  }
}
</style>