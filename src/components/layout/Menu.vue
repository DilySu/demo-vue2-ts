<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.meta.hidden">
            <template slot="title">
              <i :class="item.meta.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.meta.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Menu extends Vue {
  menus: any[] = [0];

  created() {
    this.menus = [...this.$router.options.routes!];
  }
}
</script>

<style scoped lang="scss">
.menu {
  .el-aside {
    height: 100%;

    .el-menu {
      height: 100%;
    }

    .el-submenu .el-menu-item {
      min-width: 0;
    }
  }
}
</style>
