<template>
  <div class="productDetailBox">
    <div class="top">
      <div class="carousel">
        <swiper
          v-if="swiperShow"
          :autoplay="swiper_options.autoplay"
          :loop="swiper_options.loop"
          :speed="swiper_options.speed"
          :pagination="swiper_options.pagination"
          :navigation="swiper_options.navigation"
        >
          <!-- Swiper的子组件，用于放置每一个滑块 -->
          <swiper-slide>
            <img src="@/assets/shop/shopDetail/mouse1.webp" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/shop/shopDetail/mouse2.webp" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/shop/shopDetail/mouse3.webp" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/shop/shopDetail/mouse4.png" alt="" />
          </swiper-slide>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="productInfo">
         <el-row>
          <el-col :span="4">商品名称</el-col>
          <el-col :span="20" class="proName">雷蛇鼠标</el-col>
         </el-row>
         <el-row>
          <el-col :span="4">商品规格</el-col>
          <el-col :span="20">
          <el-tag type="success">
            标准版
          </el-tag>
          </el-col>
         </el-row>
         <el-row>
          <el-col :span="4">商品描述</el-col>
          <el-col :span="20" class="proDesc">雷蛇鼠标是一款超级高端的鼠标,很多英雄联盟和穿越火线的职业选手都在用这款鼠标。甚至美帝著名的五星上将麦克阿瑟都鼎力推荐:如果我在直升机上有雷蛇鼠标,那么我很轻松就能横扫亚太40国!</el-col>
         </el-row>
         <el-row>
          <el-col :span="4">购买数量</el-col>
          <el-col :span="20"><el-input-number v-model="proNum" :min="1"></el-input-number></el-col>
         </el-row>
         <el-row>
          <el-col :span="4">商品价格</el-col>
          <el-col :span="20">30空间币<span class="nowMoney">(当前拥有999999空间币)</span></el-col>
         </el-row>
         <el-row>
          <el-col :span="4">选定方式</el-col>
          <el-col :span="20">
            <el-radio-group v-model="buyType1" class="ml-4">
      <el-radio value="1" size="large">购买</el-radio>
      <el-radio value="2" size="large">赠送</el-radio>
      <el-radio value="3" size="large">索要</el-radio>
    </el-radio-group>
    <div v-show="buyType1 === '1'">
      <el-radio-group v-model="buyType2">
      <el-radio-button label="加入购物车" value="toCar" />
      <el-radio-button label="立即下单" value="nowBuy" />
      <div class="deliver"></div>
    </el-radio-group>
    </div>
          </el-col>
         </el-row>
         
      </div>
    </div>
    
    <div class="bottom">
      <h6>为您推荐</h6>
      <ul class="recomList">
        <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      <li class="recomItem">
        <img src="@/assets/shop/huiliyi.jpg" class="img" alt="" />
        <p class="productDsc">
          <span class="productName">绘梨衣</span>
          <span class="productPrice">9999空间币</span>
        </p>
      </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue"; // 引入vue版本的Swiper组件和SwiperSlide子组件
import "swiper/swiper.scss"; // 引入swiper的主要样式
import "swiper/components/pagination/pagination.scss"; // 引入swiper的pagination插件样式
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]); // 在SwiperCore中启用这些插件
const proNum:Ref<number> = ref(1)
let swiper_options = ref({
  autoplay: {
    // 自动播放配置
    delay: 3000, // 每隔3000ms切换一次
    disableOnInteraction: false, // 用户操作swiper之后，autoplay不会被禁用
  },
  loop: true, // 开启循环模式
  speed: 500, // 切换速度为500ms
  pagination: {
    // 分页器配置
    clickable: true, // 分页器是可点击的
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiperShow = ref(false);
const buyType1:Ref<string> = ref('1')
  const buyType2:Ref<string> = ref('')



onMounted(() => {
  swiperShow.value = true;
});
</script>
<style lang="less" scoped>
.productDetailBox {
  width: calc(100vw - 410px);
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  .top {
    height: 550px;
    padding: 10px 30px;
    display: flex;
    .carousel {
      width: 600px;
      height: 500px;
      margin-right: 30px;
      .swiper-container {
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          img {
            width: 600px;
            height: 500px;
          }
        }
      }
    }
    .productInfo{
        flex: 1;
        .el-row{
          margin-bottom: 20px;
          .el-col-4{
            font-size: 18px;
            font-weight: 600;
          }
          .el-col-20{
            font-size: 18px;
          }
          .proName{
            color: #3deb09;
          }
          .proDesc{
            color: #8b8a8a;
          }
          .nowMoney{
            color: #3deb09;
          }
        }
    }
  }
  .bottom {
    flex: 1;
    padding:10px 30px;
    h6{
      font-size: 18px;
    }
    .recomList{
      margin-top: 10px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .recomItem{
      float: left;
      height: 200px;
      padding: 15px 10px 25px;
      margin-right: 30px;
      background: #fff;
      cursor: pointer;
      .img {
        width: 150px;
        height: 150px;
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
}
</style>
