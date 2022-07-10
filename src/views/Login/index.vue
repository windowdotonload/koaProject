<template>
  <div class="col-container">
    <div class="item-col" v-for="item in colors" :key="item" :style="{ background: item }"></div>
  </div>
  <div class="login-box">
    <div class="nick-name">eyasAdmin</div>
    <el-form :model="form" label-width="0px">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入密码" />
      </el-form-item>
      <el-button type="primary" style="width: 100%">登录</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const colors = ["#184C78", "#F2C12E", "#F2AE30", "#A64F03", "#593E25"];
const form = reactive({
  username: "",
});
</script>

<style scoped>
.col-container {
  overflow: hidden;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.item-col {
  transition: all 0.5s ease;
  flex: 1;
  flex-shrink: 1;
  height: 100%;
}
.login-box {
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
  width: 20%;
  box-sizing: border-box;
  padding: 20px;
  background: rgb(217, 217, 217, 0.9);
  border-radius: 20px;
}
.nick-name {
  font-size: 36px;
  position: absolute;
  font-weight: 500;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Oswald", sans-serif;
}
</style>
<style>
input::placeholder {
  font-family: "Oswald", sans-serif;
  font-size: 12px;
  color: 999 !important ;
}
</style>
