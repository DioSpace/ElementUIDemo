<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <!-- gutter 栅格间距 -->
    <el-row :gutter="20">
      <!-- span 栅格占的列数,offset是偏移列数 -->
      <el-col :span="8" :offset="8">
        <el-card shadow="always">
          <h1>登录表格</h1>
          <el-divider></el-divider>
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- 账户 -->
            <el-form-item
              label="账号"
              prop="account"
              :rules="[
                { required: true, message: '账号不能为空'},
                { type: 'number', message: '账号必须为数字值'}
            ]"
            >
              <el-input
                type="account"
                v-model.number="numberValidateForm.account"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item
              label="密码"
              prop="password"
              :rules="[
                { required: true, message: '密码不能为空'},
            ]"
            >
              <el-input
                type="password"
                placeholder="输入密码"
                v-model.number="numberValidateForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <aliyun-capcha appkey="FFFF00000000016C4A73" scene="login" v-on:callback="onCaptcha"></aliyun-capcha>
            </el-form-item>
            <el-form-item>
              <el-button
                :disabled="isDisable"
                type="primary"
                @click="submitForm('numberValidateForm')"
              >提交</el-button>
              <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AliyunCaptcha from "../vender/AliyunCaptcha";
export default {
  data() {
    return {
      isDisable: true,
      numberValidateForm: {
        account: "",
        password: "",
      },
    };
  },
  components: {
    "aliyun-capcha": AliyunCaptcha,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.numberValidateForm.account == "123" &&
            this.numberValidateForm.password == "123"
          ) {
            this.$router.push("home");
          } else {
            alert("密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.nc.reset(); //重置滑块
    },
    onCaptcha(data) {
      this.csessionid = data.csessionid;
      this.sig = data.sig;
      this.token = data.token;
      this.scene = data.scene;
      this.nc = data.nc;

      //允许登录按钮点击
      this.isDisable = false;
    },
  },
};
</script>

<style>
.el-card {
  border-radius: 30px 30px 30px 30px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 80px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>