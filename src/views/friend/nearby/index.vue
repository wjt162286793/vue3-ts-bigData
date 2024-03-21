<template>
  <div class="mapMainBox">
    <div class="header"></div>
    <baidu-map
      class="bm-view"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="15"
    >
    </baidu-map>
  </div>
</template>
  
 <script lang="ts" setup>
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
  }
  .bm-view {
    width: 100%;
    padding: 16px;
    flex: 1;
  }
}
</style>