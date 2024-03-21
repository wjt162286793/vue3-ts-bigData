<template>
  <div class="mainBox">
    <canvas id="canvas" class="canvasBox"></canvas>
    <div class="loginBox">
      <img src="@/assets/login/spaceIcon.svg" class="icon" alt="" />
      <button class="btn" @click="gotoHomePage">欢迎进入梦空间</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Point, pointType } from "./utils.ts";
const router = useRouter();

const gotoHomePage = () => {
  router.push({
    name: "dashboard",
  });
};

onMounted(() => {
  let canvas: HTMLCanvasElement = document.querySelector("canvas");
  let canvasContext: CanvasRenderingContext2D = canvas.getContext("2d");

  let width: number =
    document.documentElement.clientWidth || document.body.clientWidth;
  let height: number =
    document.documentElement.clientHeight || document.body.clientHeight;
  let points: Array<number | null> = [];
  let Max: number = 80; //点连接的距离
  let Num: number = 200; //点的数量

  canvas.width = width;
  canvas.height = height;
  canvasContext.lineWidth = 0.5;
  canvasContext.fillStyle = "#fff";
  canvasContext.strokeStyle = "#fff";

  for (var i = 0; i < Num; i++) {
    const x = Math.round(Math.random() * width);
    const y = Math.round(Math.random() * height);
    const vx = Math.floor((Math.random() * 2 - 1) * 100) / 100;
    const vy = Math.floor((Math.random() * 2.4 - 1.2) * 100) / 100;
    let pointObj: pointType = new Point(x, y, vx, vy);
    points.push(pointObj);
  }

  function animate() {
    function start() {
      canvasContext.clearRect(0, 0, width, height);
      var point = null,
        c = 0,
        ratio = 1;
      points.forEach((item: pointType, j: number) => {
        item.update(width, height);
        item.draw(canvasContext);
        for (let i = j + 1, len = points.length; i < len; i++) {
          point = points[i];
          c = Math.sqrt(
            Math.pow(point.x - item.x, 2) + Math.pow(point.y - item.y, 2)
          );
          if ((ratio = c / Max) > 1) continue;
          canvasContext.lineWidth = ratio / 2;
          canvasContext.strokeStyle = "#fff";
          canvasContext.beginPath();
          canvasContext.moveTo(item.x, item.y);
          canvasContext.lineTo(point.x, point.y);
          canvasContext.stroke();
        }
      });
      requestAnimationFrame(start);
    }
    start();
  }
  canvas.onmousemove = function (e) {
    points.length = Num;
    points.push(new Point(e.clientX, e.clientY, 0, 0));
  };
  animate();
});
</script>

<style lang="less" scoped>
.mainBox {
  position: relative;
  height: 100vh;
  .canvasBox {
    background: #000;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
  }
  .loginBox {
    width: 300px;
    height: 500px;
    position: absolute;
    opacity: 1;
    left: calc(50% - 150px);
    top: calc(50% - 250px);
    z-index: 2;
    display: flex;
    flex-direction: column;
    .icon {
      height: 200px;
    }
    .btn {
      margin-top: 30px;
      background-image: linear-gradient(
        to right,
        rgb(116, 248, 171),
        rgb(11, 236, 124)
      );
      letter-spacing: 4px;
      color: #fff;
      font-size: 16px;
      height: 50px;
      cursor: pointer;
      border-radius: 10px;
    }
  }
}
</style>