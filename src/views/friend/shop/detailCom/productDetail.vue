<!-- <template>
   <div class="productDetailBox">
      <div class="leftBox">
          <div class="swiper">
            <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="@/assets/shop/shopDetail/mouse1.webp"></swiper-slide>
    <swiper-slide><img src="@/assets/shop/shopDetail/mouse2.webp"></swiper-slide>
    <swiper-slide><img src="@/assets/shop/shopDetail/mouse3.webp"></swiper-slide>
    ...
  </swiper>
          </div>
      </div>
      <div class="rightBox">

      </div>
   </div>
</template>

<script lang="ts" setup>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  const modules =  [Navigation, Pagination, Scrollbar, A11y]
  const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
</script>

<style lang="less" scoped>
.productDetailBox{
    padding: 40px;
    display: flex;
    .leftBox{
        width: 1000px;
        .swiper{
            width: 500px;
            img{
                width: 500px;
                height: 500px;
            }
        }
    }
}
</style> -->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <img class="swiper-slide" src="@/assets/shop/shopDetail/mouse1.webp" />
      <img class="swiper-slide" src="@/assets/shop/shopDetail/mouse2.webp" />
      <img class="swiper-slide" src="@/assets/shop/shopDetail/mouse3.webp" />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
  
  <script lang="ts" setup>
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

const items = ref([
  { id: 1, text: "Slide 1" },
  { id: 2, text: "Slide 2" },
  { id: 3, text: "Slide 3" },
]);

onMounted(() => {
    nextTick(()=>{
        new Swiper(".swiper-container", {
            pagination: {
    el: '.swiper-pagination',
  },
    // autoplay:true,
    // navigation:{
    //     nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // loop: true, 
    // autoplay: {
    //     delay: 3000, // 自动轮播间隔时间，单位为毫秒
    //   },
  });
    })

});
</script>
  
  <style lang="less" scoped>
.swiper-container {
  width: 500px;
  height: 100%;
  overflow: hidden;
}

.swiper-slide {
  text-align: center;
  font-size: 30px;
  width: 500px !important;
  height: 500px !important;
  background-color: #af4444;
}
</style>