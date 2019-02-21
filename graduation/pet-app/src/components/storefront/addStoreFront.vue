<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="200px"
    class="demo-ruleForm"
    style="width:500px"
  >
    <el-form-item label="宠物屋名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="宠物屋地址" prop="address">
      <el-input type="textarea" v-model="ruleForm.address"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="宠物屋图片" prop="adress">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="/files/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        list-type="picture"
        :auto-upload="false"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="宠物屋服务" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美容" name="type"></el-checkbox>
        <el-checkbox label="托管" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="佣金比例" prop="ratio">
      <el-select v-model="ruleForm.ratio" placeholder="请选择佣金比例范围">
        <el-option label="比例(3%)" value="0.03"></el-option>
        <el-option label="比例(5%)" value="0.05"></el-option>
        <el-option label="比例(8%)" value="0.08"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="门店管理员" prop="administrator">
      <el-select v-model="ruleForm.administrator" placeholder="请选择门店管理员">
        <el-option v-for="item in staffData" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="宠物屋简介" prop="intro">
      <el-input type="textarea" v-model="ruleForm.intro"></el-input>
    </el-form-item>
    <el-form-item label="宠物屋联系电话" prop="tel">
      <el-input v-model="ruleForm.tel"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即申请创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { addStorefrontAsync } from "../../services/storefront.js";
import { getAllStaffDataAsync } from "../../services/staff.js";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "Storefront"
);
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        address: "",
        date1: "",
        date2: "",
        delivery: false,
        type:[],
        administrator:"",
        intro: "",
        imgUrl: "",
        ratio: "",
        tel: "",
        data: []
      },
      rules: {
        name: [
          { required: true, message: "请输入宠物屋名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        administrator: [
            { required: true, message: '请选择门店管理员', trigger: 'change' }
          ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        ratio: [
          { required: true, message: "请选择佣金比例", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个主打服务",
            trigger: "change"
          }
        ],
        intro: [{ required: true, message: "请填写相关介绍", trigger: "blur" }],
        administrator: [
          { required: true, message: "请选择门店管理员", trigger: "change" }
        ],
        tel: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度不符合正确电话格式",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    let usersId = JSON.parse(sessionStorage.user)[0]._id;
    this.getAllStaffDataAsync(usersId);
    console.log(this);
  },
  computed: {
    ...mapState(["staffData"])
  },
  methods: {
    ...mapActions(["addStorefrontAsync", "getAllStaffDataAsync"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let newStorefront = {};
          newStorefront.name = this.ruleForm.name;
          newStorefront.address = this.ruleForm.address;
          newStorefront.date1 = this.ruleForm.date1;
          newStorefront.date2 = this.ruleForm.date2;
          newStorefront.type = this.ruleForm.type;
          newStorefront.intro = this.ruleForm.intro;
          newStorefront.staffId = this.ruleForm.administrator
          newStorefront.imgUrl = this.ruleForm.imgUrl;
          newStorefront.ratio = this.ruleForm.ratio;
          newStorefront.tel = this.ruleForm.tel;
          newStorefront.state = "open";
          newStorefront.usersId = JSON.parse(sessionStorage.user)[0]._id;
          console.log(newStorefront.staffId);
          this.addStorefrontAsync(newStorefront);
          alert("申请递交成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      this.ruleForm.imgUrl = response;
      console.log(this.ruleForm);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>    

