<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="200px"
    class="demo-ruleForm"
    style="width:500px"
  >
    <el-form-item label="员工姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="员工年龄" prop="age">
      <el-input v-model="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item label="员工性别" prop="gender">
      <el-radio-group v-model="ruleForm.gender">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="员工照片">
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
    <el-form-item label="员工联系电话" prop="tel">
      <el-input v-model="ruleForm.tel"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">新增员工</el-button>
      <el-button @click="resetForm('ruleForm')">重置资料</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { addStaffAsync } from "../../services/staff.js";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("Staff");
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        age: "",
        gender: "",
        delivery: false,
        imgUrl: "",
        tel: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入员工姓名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        tel: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度不符合正确电话格式",
            trigger: "blur"
          }
        ],
        gender: [
          { required: true, message: "请选择员工性别", trigger: "change" }
        ]
      }
    };
  },

  methods: {
    ...mapActions(["addStaffAsync"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let newStaff = {};
          newStaff.name = this.ruleForm.name;
          newStaff.age = this.ruleForm.age;
          newStaff.gender = this.ruleForm.gender;
          newStaff.imgUrl = this.ruleForm.imgUrl;
          newStaff.tel = this.ruleForm.tel;
          newStaff.state = "open";
          newStaff.usersId = JSON.parse(sessionStorage.user)[0]._id
          this.addStaffAsync(newStaff);
          alert("新增成功");
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

