<template>
  <div class="header">
    <el-header>
      <div class="title">后台管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script lang="ts">
import { getToken } from "@/utils/auth";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Header extends Vue {
  name = "";
  created() {
    this.name = getToken("username")!;
  }
}
</script>

<style scoped lang="scss">
.header {
  .el-header {
    background: #2578b5;
    color: #ffffff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>
