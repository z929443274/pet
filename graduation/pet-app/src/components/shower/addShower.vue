<template>
  <div>
    <div class="showerTitle">新增洗浴用品</div>
    <el-form 
    ref="shower" 
    :model="shower" 
    :rules="rules"
    label-width="80px" 
    style="width: 500px;margin: 0 auto">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="shower.name" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="适用犬种" prop="fit">
        <el-input v-model="shower.fit" placeholder="请输入商品适用犬种"></el-input>
      </el-form-item>
      <el-form-item label="商品规格" prop="packing">
        <el-input v-model="shower.packing" placeholder="请输入商品规格"></el-input>
      </el-form-item>
      <el-form-item label="商品功用" prop="impact">
        <el-input v-model="shower.impact" placeholder="请输入商品规格"></el-input>
      </el-form-item>
      <el-form-item label="出厂日期" prop="date">
        <el-input v-model="shower.date" placeholder="请输入商品出厂日期"></el-input>
      </el-form-item>
      <el-form-item label="保质期" prop="expirationDate">
        <el-input v-model="shower.expirationDate" placeholder="请输入商品保质期"></el-input>
      </el-form-item>
      <el-form-item label="商品产地" prop="place">
        <el-input v-model="shower.place" placeholder="请输入商品产地"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="shower.price" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="供应商" prop="supplier">
        <el-input v-model="shower.supplier" placeholder="请输入商品供应商"></el-input>
      </el-form-item>
  <el-form-item>
    <el-button @click="resetForm('shower')" round>重置</el-button>
    <el-button style="margin-left: 120px"  @click="handleAddShower('shower')" round>新增</el-button>
  </el-form-item>
    </el-form>

  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shower");

export default {
  name: "AddShower",
  data() {
    return {
      shower : {
        name: "",
        fit: "",
        packing: "",
        impact: "",
        date: "",
        expirationDate: "",
        place: "",
        price: "",
        supplier: "",
        count: 0,
        state: "open"
      },
      rules: {
        name: [{ required: true, message: "商品名称不能为空" }],
        fit: [{ required: true, message: "适用犬种不能为空" }],
        packing: [{ required: true, message: "商品规格不能为空" }],
        impact: [{ required: true, message: "商品功用不能为空" }],
        date: [{ required: true, message: "出厂日期不能为空" }],
        expirationDate: [{ required: true, message: "保质期不能为空" }],
        price: [{ required: true, message: "商品价格不能为空" }],
        place: [{ required: true, message: "商品产地不能为空" }],
    
      }
    };
  },
  methods: {
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    ...mapActions(["addShowerAsync"]),
    handleAddShower(shower) {
      this.$refs[shower].validate(valid => {
        if (valid) {
          this.addShowerAsync(this.shower);
          this.$notify({
            title: "成功",
            message: "商品信息添加成功！",
            type: "success"
          });
          this.$refs[shower].resetFields();
        } else {
          this.$notify.error({
            title: "错误",
            message: "添加商品信息失败，请确认添加项！"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style>
.showerTitle {
  margin: 10px 0;
  color: lightseagreen;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  line-height: 2;
}
</style>
