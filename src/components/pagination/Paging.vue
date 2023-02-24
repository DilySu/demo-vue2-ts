<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url="url"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { getTableData } from "@/utils/table";
import Vue from "vue";
import Component from "vue-class-component";

const PagingParent = Vue.extend({
  props: {
    total: Number,
    url: String,
  },
});

@Component({})
export default class Paging extends PagingParent {
  page = 1; // 当前页数
  size = 10; // 每页显示条数
  created() {
    this.getData();
  }
  getData() {
    getTableData(this.$parent, this.url, { page: this.page, size: this.size }, [
      "completed",
    ]);
  }
  handleSizeChange(val: number) {
    this.size = val;
    this.page = 1;
    this.getData();
  }
  handleCurrentChange(val: number) {
    this.page = val;
    this.getData();
  }
}
</script>

<style scoped>
.el-pagination {
  text-align: left;
  margin-top: 20px;
}
</style>
