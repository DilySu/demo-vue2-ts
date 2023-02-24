<template>
  <div>
    <el-tree
      :props="defaultProps"
      :data="menus"
      accordion
      show-checkbox
      node-key="id"
      ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes">通过node获取</el-button>
    <el-button @click="getCheckedKeys">通过 key 获取</el-button>
    <el-button @click="resetChecked">清空</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { RouteConfig, RouteMeta } from "vue-router";

@Component
export default class extends Vue {
  menus: any[] = [];
  defaultProps = {
    label: "name",
    children: "children",
  };
  created() {
    this.menus = [...this.$router.options.routes!];
  }

  getCheckedNodes() {
    console.log((this.$refs.tree as any).getCheckedNodes());
  }
  getCheckedKeys() {
    console.log((this.$refs.tree as any).getCheckedKeys());
  }
  resetChecked() {
    (this.$refs.tree as any).setCheckedKeys([]);
  }
}
</script>

<style scoped></style>
