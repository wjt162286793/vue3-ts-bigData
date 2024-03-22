<template>
  <div class="shopDetail">
    <div class="top">
        <span class="backList">返回商品列表</span>
        <p class="myInfo">
            <span class="shop_cart">我的购物车</span>
            <span class="my_coin">空间币:1000000</span>
        </p>
    </div>
   <div class="infoBox">
        <el-tabs type="border-card">
            <el-tab-pane label="商品详情">
                 <ProductDetail></ProductDetail>
            </el-tab-pane>
            <el-tab-pane label="商品评价"></el-tab-pane>
            <el-tab-pane label="同类商品"></el-tab-pane>
            <el-tab-pane label="售后服务"></el-tab-pane>
        </el-tabs>
   </div>
  </div>
</template>

<script lang="ts" setup>
import ProductDetail from './productDetail.vue'
</script>

<style lang="less" scoped>

::v-deep(.el-tabs){
    width: calc(100vw - 400px);
}
::v-deep(.el-tabs__item:hover){
    color:#1afa29 !important;
}
::v-deep(.el-tabs__item.is-active){
  color:#1afa29 !important;
}
.shopDetail{
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        padding: 0 20px;
        span{
            cursor: pointer;
        }
        span:hover{
            color:#1afa29;
        }
        .myInfo{
           .shop_cart{
             margin-right: 20px;
           }
        }
    }
}
</style>