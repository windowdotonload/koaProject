<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
</script>

<template>
  <el-config-provider :locale="{ locale: locale }">
    <RouterView #default="{ Component }">
      <Suspense>
        <!-- 主要内容 -->
        <component :is="Component"></component>
      </Suspense>
    </RouterView>
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
