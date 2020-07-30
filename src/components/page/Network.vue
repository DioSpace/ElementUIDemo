<template>
  <div id="app">
    <el-row>
      <el-button @click="requestGet">Get请求</el-button>
      <el-button @click="httpGet" type="primary">封装的工具Get请求</el-button>
      <el-button @click="httpPost" type="success">封装的工具Post请求</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import http from "../utils/http";
import api from "../utils/api";
import axios from "axios";

export default {
  methods: {
    requestGet() {
      axios({
        method: "get",
        url: "/apis/system/menu/user?userId=1",
        headers: {
          "Content-Type": "application/json",
          token: "7c886fdf8b234ca790d12173eb4ab98e",
        },
      }).then(
        (res) => {
          console.log("data:" + res.data);
        },
        function fail(err) {
          alert("here === > 22");
          console.log(err);
        }
      );
    },
    httpGet: async function () {
      const res = await http.get(api.munuUrl);
      if (res.data != null) {
        alert("请求成功 ==> get");
      }
    },
    httpPost: async function () {
      // var param = {
      //   userName: "admin",
      //   passWord: "super123456",
      // };
      // const res = await http.post(api.loginUrl, param);
      // if (res.data != null) {
      //   alert("请求成功 ==> post");
      // }

      //   axios({
      //     method: "post",
      //     url: "/apis/auth/login",
      //     data: {
      //       userName: "admin",
      //       passWord: "super123456",
      //     },
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }).then(
      //     (res) => {
      //       console.log("data:" + res.data);
      //       res.data;
      //     },
      //     function fail(err) {
      //       alert("here === > 22");
      //       console.log(err);
      //     }
      //   );

      axios({
        method: "post",
        url: "/apis/auth/login",
        data: {
          userName: "admin",
          passWord: "super123456",
        },
        timeout: 10000,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
      }).then(
        function success(response) {
          console.log(response.data.msg);
        },
        function fail(err) {
          console.log("error:" + err.msg);
        }
      );
    },
  },
};
</script>
