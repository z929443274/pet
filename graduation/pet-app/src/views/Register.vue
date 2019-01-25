<template>
  <div>
    <div style="height:100px;border-bottom:1px solid gray;display:flex">
      <img style="width:90px;height:90px;margin-left:50px" src="../images/logo.png" alt>
      <h2 style="font-size:32px;line-height:100px ">爱宠邦</h2>
    </div>
    <div style="display:flex;justify-content:space-around">
      <div class="box-card" style="padding-top:40px;margin-top: 100px">
        <img src="../images/logo.png" alt>
      </div>
      <el-tabs type="border-card" style="margin-top:50px" class="box-card">
        <el-tab-pane>
          <span slot="label">快速注册</span>
            <div class="text item" style="">
              <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules2"
                ref="ruleForm2"
                label-width="70px"
                class="demo-ruleForm"
              >
                <el-form-item label="账号" prop="phone">
                  <el-input v-model.number="ruleForm2.phone" placeholder="11位手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                  <el-button @click="resetForm('ruleForm2')" style="margin-left:50px">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">扫码注册 </span>
          <img src="../images/erweima.png" alt="">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login.vue";

export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入数字值"));
          } else {
            if (value.length == 11) {
              callback(new Error("账号有误"));
            } else {
              callback();
            }
          }
        }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        phone: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      console.log(this);
      this.$router.history.push("./register");
    },
    info() {
      console.log(this);
      this.$router.history.push("./info");
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 30px;
}

.box-card {
  width: 360px;
  margin-top: 100px;
}
</style>