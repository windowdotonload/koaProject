<template>
  <div class="sider-container-left">
    <div class="switch-btn" @click="changeLeftWidth">
      <span class="switch-flag">
        <el-icon v-show="leftWidth == '5%'"><ArrowRightBold /></el-icon>
        <el-icon v-show="!(leftWidth == '5%')"><ArrowLeftBold /></el-icon>
      </span>
    </div>
  </div>
  <div class="content-container-right"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const leftWidth = ref("15%");

const changeLeftWidth = () => {
  leftWidth.value = leftWidth.value === "5%" ? "15%" : "5%";
};
</script>

<style scoped lang="scss">
.sider-container-left {
  transition: all 0.5s ease;
  position: relative;
  float: left;
  height: 100%;
  width: v-bind(leftWidth);
  background: yellow;
}
.content-container-right {
  transition: all 0.5s ease;
  width: 100%;
  padding-left: v-bind(leftWidth);
  background-color: beige;
}
.sider-container-left:hover .switch-btn {
  cursor: pointer;
  display: flex;
  right: -18rem;
  opacity: 1;
}

.sider-container-left:hover .switch-flag {
  opacity: 1;
}
.switch-btn {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16rem;
  font-weight: bolder;
  padding-right: 3%;
  transition: all 0.5s ease;
  width: 50rem;
  height: 55rem;
  background-color: yellow;
  position: absolute;
  top: 5%;
  border-radius: 80%;
  right: 0px;
}
.switch-flag {
  transition: all 0.1s linear;
  opacity: 0;
}
</style>
