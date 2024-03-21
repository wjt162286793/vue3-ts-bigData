<template>
  <div class="shopMain">
    <ul class="typeList">
      <li
        class="typeItem"
        v-for="item in shopTitleList"
        :key="item.id"
        @click="changeTypeHandler(item)"
        :style="
          item.id === activeType.id
            ? { 'border-bottom': '2px solid #1afa29' }
            : {}
        "
      >
        <img :src="require(`@/assets/shop/${item.value}.svg`)" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
    <ul class="productList">
      <li class="productItem">
        <img src="@/assets/shop/product.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">雷蛇鼠标</span>
          <span class="productPrice">30空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/aoding.webp" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">奥丁</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/iphone14.png" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">iphone 14</span>
          <span class="productPrice">1000空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/jixiegeming.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">机械革命</span>
          <span class="productPrice">1200空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/kongjianlvxing.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">空间旅行</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/nvfengyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">女士风衣</span>
          <span class="productPrice">100空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/nvxue.webp" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">女士靴</span>
          <span class="productPrice">120空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/vr.png" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">vr眼镜</span>
          <span class="productPrice">300空间币</span>
        </p>
      </li>
      <li class="productItem">
        <img src="@/assets/shop/tangdao.webp" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">唐刀</span>
          <span class="productPrice">800空间币</span>
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
    id: "2",
    value: "ele_product",
    label: "电子产品",
  },
  {
    id: "3",
    value: "ele_product",
    label: "生活用品",
  },
  {
    id: "4",
    value: "ele_product",
    label: "衣物服饰",
  },
  {
    id: "5",
    value: "ele_product",
    label: "女士专区",
  },
  {
    id: "6",
    value: "ele_product",
    label: "男士专区",
  },
]);
const activeType: Ref<shopTitleItem> = ref(shopTitleList.value[0]);
const changeTypeHandler = (item: shopTitleItem) => {
  activeType.value = item;
};
</script>

<style lang="less" scoped>
.shopMain {
  width: calc(100vw - 400px);
  height: 100vh;
  .typeList {
    padding: 5px 100px;
    // height: 80px;
    display: flex;
    justify-content: space-between;
    background: #262527;
    .typeItem {
      position: relative;
      display: flex;
      cursor: pointer;
      width: 200px;
      height: 100px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 37px;
      }
      span {
        letter-spacing: 4px;
      }
    }
    .typeItem::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0px;
      width: 0px;
      height: 2px;
      background: #1afa29;
      transition: all 1s ease;
    }
    .typeItem:hover::after {
      width: 200px;
    }
  }
  .productList {
    width: 100%;
    height: calc(100vh - 110px);
    overflow: auto;
    .productItem {
      width: 21%;
      float: left;
      padding: 15px 2% 25px;
      margin: 15px 2% 10px;
      background: #fff;
      cursor: pointer;
      .img {
        width: 100%;
        height: 250px;
        margin-bottom: 10px;
      }
      .productDsc {
        color: #000;
        display: flex;
        justify-content: space-between;
        .productName {
          font-weight: 500;
        }
        .productPrice {
          color: red;
        }
      }
    }
  }
}
</style>
