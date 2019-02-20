<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>新增托管</span>
    </div>
    <div v-for="o in 1" :key="o" class="text item">
      <el-form ref="form" :model="form" label-width="100px" class="demo-ruleForm" width="700px">
        <el-form-item label="适用规格" prop="fit">
          <el-select v-model="form.fit" placeholder="请选择适用规格" width="150px">
            <el-option label="小型" value="小型"></el-option>
            <el-option label="中型" value="中型"></el-option>
            <el-option label="大型" value="大型"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格(元)" prop="price">
          <el-select v-model="form.price" placeholder="请选择价格">
            <el-option label="180" value="180"></el-option>
            <el-option label="213" value="213"></el-option>
            <el-option label="100" value="100"></el-option>
            <el-option label="60" value="60"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择排期" prop="schedule">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.schedule.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="选择时间" prop="schedule">
          <el-col :span="11">
            <el-time-select
              placeholder="开始"
              v-model="form.schedule.time1"
              style="width: 80%;"
              :picker-options="{start: '08:30',step: '00:30',end: '23:30'}"
            ></el-time-select>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-select
              placeholder="结束"
              v-model="form.schedule.time2"
              :picker-options="{start: '09:00',step: '00:30',end: '24:00'}"
              style="width: 80%;"
            ></el-time-select>
          </el-col>
        </el-form-item>
        <el-form-item label="服务耗时" prop="timer">
          <el-select v-model="form.timer" placeholder="请选择服务耗时">
            <el-option label="3小时" value="3小时"></el-option>
            <el-option label="6小时" value="6小时"></el-option>
            <el-option label="12小时" value="12小时"></el-option>
            <el-option label="24小时" value="24小时"></el-option>
            <el-option label="48小时" value="48小时"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<script>
//命名空间
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} = createNamespacedHelpers("trusteeship");
export default {
  name: "trusteeshipList",
  methods: {
    //创建新的托管
    onSubmit() {
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       alert("submit!");
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
      console.log("成功");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  data() {
    return {
      // ruleForm: {
      //   name: '',
      //   region: '',
      //   date1: '',
      //   date2: '',
      //   delivery: false,
      //   type: [],
      //   resource: '',
      //   desc: ''
      // },
      form: {
        fit: "",
        price: "",
        timer: "",
        schedule: [
          {
            date: "",
            timer1: "",
            timer2: ""
          }
        ]
      }
    };
  }
};
</script>

<style>
.box-card {
  width: 700px;
}
</style>