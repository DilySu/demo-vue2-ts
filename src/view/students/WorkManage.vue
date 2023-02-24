<template>
  <div class="workManage">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center" />
      <el-table-column prop="userId" label="所属班级" align="center" />
      <el-table-column prop="title" label="作业名称" align="center" />
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
    <Paging :total="total" url="/works" />
  </div>
</template>

<script lang="ts">
import { getTableData } from "@/utils/table";
import Paging from "@/components/pagination/Paging.vue";
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {
    Paging,
  },
})
export default class extends Vue {
  tableData: any = [];
  currentPage = 1;
  pageSize = 10;
  total = 0;
  loading = true;
  getData() {
    const params = { page: this.currentPage, size: this.pageSize };
    getTableData(this, "/works", params, ["completed"]);
  }
  created() {
    this.getData();
  }
}
</script>

<style scoped lang="scss">
.workManage {
  .el-form,
  el-form-item {
    text-align: left;
  }

  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
