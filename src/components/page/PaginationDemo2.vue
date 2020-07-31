/**
 * 系统管理  角色管理
 */
<template>
  <div id="app">
    <!--列表-->
    <el-table
      size="small"
      :data="tableData"
      highlight-current-row
      v-loading="loading"
      border
      element-loading-text="拼命加载中"
      style="width: 100%;"
    >
      <el-table-column align="center" type="selection" width="60"></el-table-column>
      <el-table-column sortable prop="roleName" label="角色名称" width="300"></el-table-column>
      <el-table-column sortable prop="roleKey" label="角色代码" width="300"></el-table-column>
      <el-table-column sortable prop="updateTime" label="修改时间" width="300">
        <template slot-scope="scope">
          <div>{{scope.row.updateTime}}</div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>
  </div>
</template>

<script>
import Pagination from "../common/Pagination";
export default {
  data() {
    return {
      allData: [], //模拟数据
      tableData: [], //table要显示的数据
      loading: false, //加载等待框
      // 分页参数
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        selectedPageSize: [5, 10, 15, 20],
        total: 0,
      },
    };
  },

  // 注册组件
  components: {
    Pagination,
  },

  /**
   * 创建完毕
   */
  created() {
    this.getdata();
  },

  methods: {
    // 获取所有数据
    getdata() {
      for (var i = 0; i < 115; i++) {
        var map = {};
        map["roleName"] = "name " + i;
        map["roleKey"] = "role " + i;
        map["updateTime"] = i;
        map["updateBy"] = "grayson";
        this.allData.push(map);
      }
      this.pageparm.total = this.allData.length;
      this.update();
    },
    //更新当页显示的数据
    update() {
      this.loading = true;
      this.tableData = [];
      var start = (this.pageparm.currentPage - 1) * this.pageparm.pageSize;
      for (var i = 0; i < this.pageparm.pageSize; i++) {
        var tmp = this.allData[start + i];
        this.tableData.push(tmp);
      }
      this.loading = false;
    },
    // 分页插件事件
    callFather(parm) {
      this.pageparm.currentPage = parm.currentPage;
      this.pageparm.pageSize = parm.pageSize;
      this.update();
    },
  },
};
</script>

<style scoped>
#app {
  margin-top: 50px;
  margin-left: 230px;
}
</style>