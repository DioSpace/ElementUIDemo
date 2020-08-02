<template>
  <div>
    <PageTable
      :columns="columns"
      :data="tableData"
      :pager="page"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <el-table-column slot="table_oper" align="center" label="操作" width="150" :resizable="false">
        <template slot-scope="scope">
          <el-button class="edit-bgc" icon="el-icon-edit" @click="editTableData(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </PageTable>
  </div>
</template>

<script>
import PageTable from "../../common/PageTable";

export default {
  data() {
    return {
      columns: [
        { prop: "date", label: "日期", width: "150", align: "left" },
        {
          prop: "name",
          label: "姓名",
          width: "200",
          align: "center",
          formatter: this.formatter,
        },
        { prop: "address", label: "地址", align: "right" },
      ],
      tableData: [],
      allData: [],
      page: {
        pageNo: 1,
        limit: 3,
        sizes: [5, 10, 15],
        total: 10,
      },
    };
  },

  created() {
    this.getData();
  },

  // 注册组件
  components: {
    PageTable,
  },

  methods: {
    //获取数据
    getData() {
      for (var i = 0; i < 150; i++) {
        var tmp = {};
        tmp["date"] = "date " + i;
        tmp["name"] = "name " + i;
        tmp["address"] = "上海市普陀区金沙江路 " + i + " 弄";
        this.allData.push(tmp);
      }
      this.page.total = this.allData.length;
      this.updateData();
    },

    //更新数据
    updateData() {
      this.tableData = [];
      var start = (this.page.pageNo - 1) * this.page.limit;
      for (var i = 0; i < this.page.limit; i++) {
        var tmp = this.allData[start + i];
        this.tableData.push(tmp);
      }
    //   console.log("tableData length : " + this.tableData.length);
    },

    // 重新渲染name列
    formatter(row, column, cellValue) {
      return "hello " + row.name;
    },

    // 改变页面大小处理
    handleSizeChange(val) {
      //   alert("改变页面大小处理 : " + val);
      this.page.limit = val;
      this.updateData();
    },

    // 翻页处理
    handleCurrentChange(val) {
      //   alert("翻页处理 : " + val);
      this.page.pageNo = val;
      this.updateData();
    },

    editTableData(row) {
      alert("editTableData row : " + row);
    },
  },
};
</script>