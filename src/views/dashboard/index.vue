<template>
  <div class="homePageBox">
    <div class="menuBox">
      <div class="iconBox">
        <img
          src="@/assets/homePage/menu.svg"
          alt=""
          @click="changeMenuStatus"
        />
      </div>
      <ul class="menuList" :style="menuListStyle">
        <li v-for="(item, index) in menuList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const menuShow: Ref<boolean> = ref(false);
const menuListStyle = reactive({
  width: "0px",
});
const menuList: Ref<any> = ref([]);
const changeMenuStatus = () => {
  if (menuShow.value) {
    menuListStyle.width = "0px";
    menuList.value = [];
  } else {
    menuListStyle.width = "100px";
    setTimeout(() => {
      menuList.value = ["个人信息", "好友空间", "mini游戏"];
    }, 200);
  }
  menuShow.value = !menuShow.value;
};
</script>
<style lang="less" scoped>
.homePageBox {
  position: relative;
  .menuBox {
    display: flex;
    position: absolute;
    left: 0px;
    top: 50vh;
    .menuList {
      //   width: 100px;
      background: #fff;
      transition: width 0.2s;
      -webkit-transition: width 0.2s; /* Safari */
      li {
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: rgb(12, 12, 12);
      }
      li:hover {
        background: chartreuse;
        cursor: pointer;
        color: #fff;
      }
    }
    .iconBox {
      display: flex;
      width: 50px;
      height: 50px;
      padding: 10px;
      background: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
