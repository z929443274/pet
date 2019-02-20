<template>
  <el-container>
    <el-header>爱宠邦后台管理系统1.0</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>供应商管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">供应商列表</el-menu-item>
              <el-menu-item index="1-2">新增供应商</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>门店管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">门店列表</el-menu-item>
              <el-menu-item index="2-2">新增门店</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>宠主管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="list">宠主列表</el-menu-item>
              <el-menu-item index="3-2" @click="addOwner">新增宠主</el-menu-item>
              <el-menu-item index="3-2">新增宠物</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">玩具列表</el-menu-item>
              <el-menu-item index="4-2">食品列表</el-menu-item>
              <el-menu-item index="4-3">洗浴品列表</el-menu-item>
              <el-menu-item index="4-4">新增商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>门店申请管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">门店申请列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main >
        <!-- 宠主列表 -->
        <router-view></router-view>

        <!-- 新增宠主 -->
        <!-- <el-card style="height:650px" class="box-card">
            <el-form :model="form" style="width:600px;margin:auto;padding-right:10%">
                <p>新增宠主</p>
            <el-form-item label="宠主姓名：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宠主昵称：:" :label-width="formLabelWidth">
              <el-input v-model="form.nickName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员卡：:" :label-width="formLabelWidth">
              <el-input v-model="form.storefrontID" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="积分：:" :label-width="formLabelWidth">
              <el-input v-model="form.integral" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址：:" :label-width="formLabelWidth">
              <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
             
             <el-button style="margin-right:10%" @click="resetForm()">重置</el-button>
              <el-button type="primary" @click="change()">确 定</el-button>
        </el-form>
         </el-card> -->
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  methods: {
    list() {
      this.$router.history.push("/Info/List");
    },
    addOwner() {
      this.$router.history.push("/Info/AddOwner");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
      this.gridData[0].name = row.name;
      this.gridData[0].nickName = row.nickName;
      this.gridData[0].storefrontID = row.storefrontID;
      this.gridData[0].integral = row.integral;
      this.gridData[0].address = row.address;
    },
    handleC(row) {
      console.log(row);
      console.log(this.dialogFormVisible);
      this.dialogFormVisible = true;
      this.form.name = row.name;
      this.form.nickName = row.nickName;
      this.form.storefrontID = row.storefrontID;
      this.form.integral = row.integral;
      this.form.address = row.address;
    },
    change() {
      console.log(this.form.name);
      this.dialogFormVisible = false;
    },

    // 新增宠主
    resetForm() {
      this.form.name = "";
      this.form.nickName = "";
      this.form.storefrontID = "";
      this.form.integral = "";
      this.form.address = "";
    }
  }
};
</script>


<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}


.mor p {
  margin: 10px 0px;
  line-height: 20px;
}
</style>

