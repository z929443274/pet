<template>
  <div>
    <div style="height:100px;border-bottom:1px solid gray;display:flex">
      <img style="width:90px;height:90px;margin-left:50px" src="../images/logo.png" alt>
      <h2 style="font-size:32px;line-height:100px ">爱宠邦</h2>
    </div>
    <div style="display:flex;justify-content:center">
      <div class="box-card" style="padding-top:40px;margin-top: 100px">
        <img src="../images/logo.png" alt>
      </div>
      <el-tabs type="border-card" class="box-card" style="width:450px;margin-left:150px;height:320px;margin-top:50px;">
        <el-tab-pane>
          <span slot="label">账号密码登录 </span>
            <div class="text item">
              <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules2"
                ref="ruleForm2"
                label-width="50px"
                class="demo-ruleForm"
              >
                <el-form-item label="账号" prop="userName">
                  <el-input v-model="ruleForm2.userName" autocomplete="off" placeholder="11位手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="margin-top:35px">
                  <el-button type="primary" @click="login" style="margin-right:30px">登录</el-button>
                  <el-button @click="register" style="margin-left:50px">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">扫码登录</span>
          <img src="../images/erweima.png" alt="">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Login from "@/views/Login.vue";
  import {loginAsync, registerAsync, isRepeatAsync} from "../services/users"
  import {createNamespacedHelpers} from "vuex"
  const { mapState, mapMutations, mapActions } = createNamespacedHelpers("Users");

  export default {
    data() {
      var userName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("账号不能为空"));
        }
        setTimeout(() => {
            if (value.length !== 11) {
              callback(new Error("账号长度不一致"));
            } else {
              callback();
            }
        }, 1000);
        
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      };
      return {
        position:"top",
        activeName:"Login",
        state:{
          userName:"",
          password:""
        },
        ruleForm2: {
          password: "",
          userName: ""
        },
        rules2: {
          password: [{ validator: validatePass, trigger: "blur" }],
          userName: [{ validator: userName, trigger: "blur" }]
        }
      };
    },
    computed: {
    ...mapState(["userName", "password","isLogin"])
    },
    methods: {
      ...mapActions(["loginAsync", "registerAsync", "isRepeatAsync"]),
      // submitForm(formName) {
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       alert("登录成功!");
      //       login();
      //       this.$router.history.push(`/Info`)
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
      // },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register() {
        this.$router.history.push("./Register");
      },
      info() {
        // console.log(this);
        this.$router.history.push("./Info");
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      login(){
        let user = {};
        user.userName = this.ruleForm2.userName;
        user.password = this.ruleForm2.password;
        this.loginAsync(user).then(({data}) => {
          if(data.isLogin === true){
            this.success();
            this.getUser(user);
          }else{
            this.fail();
          }
        }) ;
      },
      getUser(user){
          user = JSON.stringify(user)
          sessionStorage.user = user
          console.log(user)
          this.$router.push({path:'./Info'});
        },
      success(){
        this.user = {
          userName : this.ruleForm2.userName,
          password : this.ruleForm2.password,
        };
        this.$message({
          message:"登录成功",
          type:"success",
        });
      },
      fail(){
        this.$message({
          message:"账号或密码错误，请重试",
          type:"fail",
        });
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
  padding: 18px 20px;
}

.box-card {
  width: 360px;
  margin-top: 100px
}
</style>