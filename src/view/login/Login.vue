<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="formRules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('from')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { setToken } from "@/utils/auth";
import { login } from "@/api/user";
import { LoginUser } from "@/types";
// vue 官方库，用类的方式编写组件，这种方式可以让vue 的结构更加扁平
// 并使 vue 组件可以使用继承、混入等新特性
import Component from "vue-class-component";
import Vue from "vue";

@Component // 类装饰器
export default class extends Vue {
  name = "Login";
  form: LoginUser = {
    username: "dily",
    password: "123456",
  };
  formRules = {
    username: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      { min: 4, max: 12, message: "长度在6-12位字符", trigger: "blur" },
    ],
    password: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      { min: 6, max: 12, message: "长度在6-12位字符", trigger: "blur" },
    ],
  };
  login(form: any) {
    (this.$refs[form] as any).validate((v: any) => {
      if (v) {
        // console.log(this.form)
        login(this.form).then((res: any) => {
          if (res.data.status === 200) {
            setToken("username", res.data.username);
            this.$message.success(res.data.message);
            this.$router.push("/home");
          }
          console.log(res);
        });
      } else {
        console.log("失败");
        console.log(this.form);
      }
    });
  }
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("@/assets/img/login-background.png") center no-repeat;

  .el-card {
    background: #65768557;
  }

  .box-card {
    margin: 200px auto; // 左右居中，上200px
    width: 450px;

    ::v-deep .el-form .el-form-item__label {
      color: #fff;
    }

    ::v-deep .el-card__header {
      font-size: 34px;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
