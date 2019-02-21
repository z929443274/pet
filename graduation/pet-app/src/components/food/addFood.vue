<template>
  <div>
    <div class="foodTitle">新增宠物食物</div>
    <el-form 
    ref="food" 
    :model="food"
    :rules="rules"
    label-width="80px" 
    style="width: 500px;margin: 0 auto">
      <el-form-item label="商品名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="food.name" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品形状" :label-width="formLabelWidth" prop="shape">
        <el-input v-model="food.shape" placeholder="请输入商品形状"></el-input>
      </el-form-item>
      <el-form-item label="适用犬种" :label-width="formLabelWidth" prop="fit">
        <el-input v-model="food.fit" placeholder="请输入商品适用犬种"></el-input>
      </el-form-item>
      <el-form-item label="商品口味" :label-width="formLabelWidth" prop="taste">
        <el-input v-model="food.taste" placeholder="请输入商品口味"></el-input>
      </el-form-item>
      <el-form-item label="包装规格" :label-width="formLabelWidth" prop="packing">
        <el-input v-model="food.packing" placeholder="请输入包装规格"></el-input>
      </el-form-item>
      <el-form-item label="商品功用" :label-width="formLabelWidth" prop="impact">
        <el-input v-model="food.impact" placeholder="请输入商品功用"></el-input>
      </el-form-item>
      <el-form-item label="出厂日期" :label-width="formLabelWidth" prop="date">
        <el-input v-model="food.date" placeholder="请输入商品出厂日期"></el-input>
      </el-form-item>
      <el-form-item label="保质期" :label-width="formLabelWidth" prop="expirationDate">
        <el-input v-model="food.expirationDate" placeholder="请输入商品保质期"></el-input>
      </el-form-item>
      <el-form-item label="商品产地" :label-width="formLabelWidth" prop="place">
        <el-input v-model="food.place" placeholder="请输入商品产地"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" :label-width="formLabelWidth" prop="price">
        <el-input v-model="food.price" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="供应商" :label-width="formLabelWidth" prop="supplier">
        <el-input v-model="food.supplier" placeholder="请输入商品供应商"></el-input>
      </el-form-item>
  <el-form-item>
    <el-button @click="resetForm('food')" round>重置</el-button>
    <el-button style="margin-left: 120px" @click="handleAddFood('food')" round>新增</el-button>
  </el-form-item>
    </el-form>

  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("food");

export default {
  name: "AddFood",
  data() {
    return {
      food : {
        name: "",
        shape: "",
        fit: "",
        taste: "",
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
        shape: [{ required: true, message: "商品形状不能为空" }],
        fit: [{ required: true, message: "适用犬种不能为空" }],
        taste: [{ required: true, message: "商品口味不能为空" }],
        packing: [{ required: true, message: "包装规格不能为空" }],
        impact: [{ required: true, message: "商品功用不能为空" }],
        date: [{ required: true, message: "出厂日期不能为空" }],
        expirationDate: [{ required: true, message: "保质期不能为空" }],
        place: [{ required: true, message: "商品产地不能为空" }],
        price: [{ required: true, message: "商品价格不能为空" }],
      },
       formLabelWidth: '120px'
    };
  },
  methods: {
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    ...mapActions(["addFoodAsync"]),
    handleAddFood(food) {
      this.$refs[food].validate(valid => {
        if (valid) {
          this.addFoodAsync(this.food);
          this.$notify({
            title: "成功",
            message: "商品信息添加成功！",
            type: "success"
          });
          this.$refs[food].resetFields();
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
.foodTitle {
  margin: 10px 0;
  color: lightseagreen;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  line-height: 2;
}
</style>
