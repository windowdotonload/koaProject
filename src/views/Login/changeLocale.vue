<template>
  <div class="sel-container">
    <el-popover placement="top" trigger="hover">
      <template #reference>
        <i class="el-icon el-tooltip__trigger" data-v-dd9c9540="" style="font-size: 24px">
          <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-dd9c9540="">
            <path
              fill="currentColor"
              d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
            />
          </svg>
        </i>
      </template>
      <div class="lan-item" v-for="item in Languages" :key="item.val" @click="selLan(item)">{{ item.text }}</div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const Languages = [
  { text: "中文", val: "zh-cn" },
  { text: "EN", val: "en" },
];
const selLan = (item: typeof Languages[0]) => {
  locale.value = item.val;
};
</script>

<style scoped>
.sel-container:hover {
  border-radius: 3px;
  background: rgba(242, 242, 242, 0.5);
}
.lan-item {
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-weight: bolder;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.lan-item:hover {
  cursor: pointer;
  background: rgba(242, 242, 242, 0.5);
}
</style>
