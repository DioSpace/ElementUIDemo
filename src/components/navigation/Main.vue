/**
* 加载整个页面导航
*/ 
<template>
  <el-container class="index-con">
    <el-aside :class="showclass">
      <Leftnav></Leftnav>
    </el-aside>
    <el-container class="main-con">
      <el-header class="index-header">
        <Navcon></Navcon>
      </el-header>
      <el-main clss="index-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// 导入组件
import Navcon from "./Navcon";
import Leftnav from "./Leftnav";
export default {
  name: "Main",
  data() {
    return {
      showclass: "asideshow",
      showtype: false,
    };
  },
  // 注册组件
  components: {
    Navcon,
    Leftnav,
  },
  methods: {},
  created() {
    // 监听
    this.$root.Bus.$on("toggle", (value) => {
      if (value) {
        this.showclass = "asideshow";
      } else {
        setTimeout(() => {
          this.showclass = "aside";
        }, 300);
      }
    });
  },
  beforeUpdate() {},
  // 挂载前状态(里面是操作)
  beforeMount() {},
};
</script>

<style >
.index-con {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.aside {
  width: 64px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.asideshow {
  width: 240px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.index-header,
.index-main {
  padding: 0px;
  border-left: 2px solid #333;
}
</style>
