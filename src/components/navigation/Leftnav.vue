/**
* 左边菜单
*/ 
<template>
  <el-menu
    default-active="2"
    :collapse="collapsed"
    collapse-transition
    router
    unique-opened
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div class="logobox">
      <img class="logoimg" src="../../assets/img/logo.png" alt />
    </div>
    <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
      <template slot="title">
        <i class="iconfont" :class="menu.icon"></i>
        <span>{{menu.menuname}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="chmenu in menu.menus" :index="'/'+chmenu.url" :key="chmenu.menuid">
          <i class="iconfont" :class="chmenu.icon"></i>
          <span>{{chmenu.menuname}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "leftnav",
  data() {
    return {
      collapsed: false,
      allmenu: [],
    };
  },
  // 创建完毕状态(里面是操作)
  created() {
    let res = {
      success: true,
      data: [
        {
          menuid: 33,
          icon: "el-icon-s-release",
          menuname: "网络请求",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 34,
              icon: "el-icon-s-release",
              menuname: "网络请求",
              hasThird: "N",
              url: "network/network01",
              menus: null,
            },
          ],
        },
        {
          menuid: 71,
          icon: "el-icon-s-ticket",
          menuname: "小组件",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 72,
              icon: "el-icon-s-ticket",
              menuname: "分页组件1",
              hasThird: "N",
              url: "pagination/pagination1",
              menus: null,
            },
            {
              menuid: 174,
              icon: "el-icon-s-ticket",
              menuname: "分页组件2",
              hasThird: "N",
              url: "pagination/pagination2",
              menus: null,
            },
          ],
        },
        {
          menuid: 81,
          icon: "el-icon-s-management",
          menuname: "第三方组件SDK",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 82,
              icon: "el-icon-s-management",
              menuname: "AliyunCaptcha",
              hasThird: "N",
              url: "sliderverify",
              menus: null,
            },
          ],
        },
        {
          menuid: 150,
          icon: "el-icon-picture-outline",
          menuname: "图表",
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: "el-icon-s-flag",
              menuname: "数据可视化",
              hasThird: "N",
              url: "charts/statistics",
              menus: null,
            },
          ],
        },
      ],
      msg: "success",
    };
    this.allmenu = res.data;

    this.$root.Bus.$on("toggle", (value) => {
      this.collapsed = !value;
    });
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
  border: none;
  text-align: left;
}
.el-menu-item-group__title {
  padding: 0px;
}
.el-menu-bg {
  background-color: #1f2d3d !important;
}
.el-menu {
  border: none;
}
.logobox {
  height: 40px;
  line-height: 40px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
}
.logoimg {
  height: 40px;
}
</style>