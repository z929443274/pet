<template>
  <el-card style="height:650px;width: 100%;margin-top: 10px;" class="box-card">
    <el-form :model="form" ref="form" style="width:600px;margin:auto;padding-right:10%">
      <p>新增宠主</p>
      <el-form-item label="宠主姓名：" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="宠主昵称：:" :label-width="formLabelWidth" prop="nickName">
        <el-input v-model="form.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="会员卡：:" :label-width="formLabelWidth" prop="storefrontID">
        <el-input v-model="form.storefrontID" autocomplete="off"></el-input>
      </el-form-item> -->
      <el-form-item label="积分：:" :label-width="formLabelWidth" prop="integral">
        <el-input v-model="form.integral" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址：:" :label-width="formLabelWidth" prop="address">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>

      <el-button style="margin-right:10%" @click="resetForm('form')">重置</el-button>
      <el-button type="primary" @click="change(form)">确 定</el-button>
    </el-form>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {mapActions} =createNamespacedHelpers('PetOwner'); 
export default {
  methods: {
    ...mapActions(["addOwnerAsync"]),
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    change(form) {
      console.log(this.form.name);
      const data = {
        name: this.form.name,
        nickName: this.form.nickName,
        // storefrontId: this.form.storefrontID,
        integral: this.form.integral,
        address: this.form.address
      };
      this.addOwnerAsync(data);
      alert("新增成功。")
      this.form.name="";
      this.form.nickName="";
      this.form.integral="";
      this.form.address="";
    }
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      currentPage4: 1
    };
  }
};
</script>
<style>
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
