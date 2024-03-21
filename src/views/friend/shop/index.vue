<template>
  <div class="shopMain">
    <ul class="typeList">
      <li class="typeItem" v-for="(item) in shopTitleList" :key="item.id">
        <img :src="require(`@/assets/shop/${item.value}.svg`)" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
    <ul class="productList">
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
          <li class="productItem" >
            <img src="@/assets/shop/product.jpg" class="img" alt="">
            <p class="productDsc">
               <span class="productName">雷蛇鼠标</span>
               <span class="productPrice">30空间币</span>
            </p>
          </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { shopTitleItem } from "../type";
import { require } from "@/utils/require.ts";
const shopTitleList: Ref<Array<shopTitleItem>> = ref([
  {
    id: "1",
    value: "ele_product",
    label: "梦专属",
  },
  {
    id: "1",
    value: "ele_product",
    label: "电子产品",
  },
  {
    id: "1",
    value: "ele_product",
    label: "生活用品",
  },
  {
    id: "1",
    value: "ele_product",
    label: "衣物服饰",
  },
  {
    id: "1",
    value: "ele_product",
    label: "女士专区",
  },
  {
    id: "1",
    value: "ele_product",
    label: "男士专区",
  },
]);
</script>

<style lang="less" scoped>
.shopMain {
  width: 100%;
  height: 100vh;
  .typeList {
   padding:0 100px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background: #262527;
    .typeItem {
      display: flex;
      cursor: pointer;
      width: 100px;
      height: 60px;
      flex-direction: column;
      align-items: center;
      margin: 10px 30px 10px;
      padding-bottom: 10px;
      img {
        width: 37px;
      }
      span {
        letter-spacing: 4px;
      }
    }
    .typeItem::after {
      content: "";
      //  position: absolute;
      bottom: 0px;
      left: 0px;
      width: 0px;
      height: 0px;
      border-bottom: 2px solid transparent;
      transition: all 1s ease;
    }
    .typeItem:hover::after {
      width: 150px;
      height: 100px;
      border-bottom: 2px solid #1afa29;
    }
  }
  .productList{
   width:100%;
   height: calc(100vh - 70px);
   overflow: auto;
   .productItem{
      width: 21%;
      float: left;
      padding:15px 2% 10px;
      margin:15px 2% 10px;
      background: #fff;
      cursor: pointer;
      .img{
         width: 100%;
      }
      .productDsc{
         color: #000;
         display: flex;
         justify-content: space-between;
         .productName{
            font-weight: 500;
         }
         .productPrice{
            color: red;
         }
      }
   }
    
  }
}
</style>
