<template>
  <div>
    <div class="toyTitle">新增宠物玩具</div>
    <el-form
      ref="toy"
      :model="toy"
      :rules="rules"
      label-width="80px"
      style="width: 500px;margin: 0 auto"
    >
      <el-form-item label="商品名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="toy.name" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品材质" :label-width="formLabelWidth" prop="texture">
        <el-input v-model="toy.texture" placeholder="请输入商品材质"></el-input>
      </el-form-item>
      <el-form-item label="适用犬种" :label-width="formLabelWidth" prop="fit">
        <el-input v-model="toy.fit" placeholder="请输入商品适用犬种"></el-input>
      </el-form-item>
      <el-form-item label="商品功用" :label-width="formLabelWidth" prop="impact">
        <el-input v-model="toy.impact" placeholder="请输入商品功用"></el-input>
      </el-form-item>
      <el-form-item label="商品产地" :label-width="formLabelWidth" prop="place">
        <el-input v-model="toy.place" placeholder="请输入商品产地"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" :label-width="formLabelWidth" prop="price">
        <el-input v-model="toy.price" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="供应商" :label-width="formLabelWidth" prop="supplier">
        <el-input v-model="toy.supplier" placeholder="请输入商品供应商"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('toy')" round>重置</el-button>
        <el-button style="margin-left: 120px" @click="handleAddToy('toy')" round>新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("toy");

export default {
  name: "AddToy",
  data() {
    return {
      toy: {
        name: "",
        texture: "",
        fit: "",
        impact: "",
        place: "",
        price: "",
        supplier: "",
        count: 0,
        state: "open"
      },
      rules: {
        name: [{ required: true, message: "商品名称不能为空" }],
        texture: [{ required: true, message: "商品材质不能为空" }],
        fit: [{ required: true, message: "适用犬种不能为空" }],
        impact: [{ required: true, message: "商品功用不能为空" }],
        place: [{ required: true, message: "商品产地不能为空" }],
        price: [{ required: true, message: "商品价格不能为空" }]
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ...mapActions(["addToyAsync"]),
    handleAddToy(toy) {
      this.$refs[toy].validate(valid => {
        if (valid) {
          this.addToyAsync(this.toy);
          this.$notify({
            title: "成功",
            message: "商品信息添加成功！",
            type: "success"
          });
          this.$refs[toy].resetFields();
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
.toyTitle {
  margin: 10px 0;
  color: lightseagreen;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  line-height: 2;
}
</style>
