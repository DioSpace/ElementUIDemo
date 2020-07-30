<template>
  <div id="app">
    <el-row>
      <el-button @click="originGet">Get请求</el-button>
      <el-button @click="httpGet" type="primary">http Get请求</el-button>
      <el-button @click="httpPost" type="success">http Post请求</el-button>
      <el-button @click="requestGet" type="info">request Get请求</el-button>
      <el-button @click="requestPost" type="warning">request Post请求</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import api from "../utils/api";
import axios from "axios";

export default {
  methods: {
    originGet() {
      axios({
        method: "get",
        url: "/apis/system/menu/user?userId=1",
        headers: {
          "Content-Type": "application/json",
          token: "a86d5db8fbbf46c9ab175f0974f00986",
        },
      }).then(
        function success(res) {
          console.log("data:" + res.data);
        },
        function fail(err) {
          console.log(err.msg);
        }
      );
    },
    httpGet() {},
    httpPost() {},
    requestGet() {
      this.$fetch(api.munuUrl).then((response) => {
        console.log(response);
      });
    },
    requestPost() {
      var data = {
        userName: "admin",
        passWord: "super123456",
      };
      this.$post(api.loginUrl, data).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
