<template>

    <el-form :model="trusteeship" ref="trusteeship" label-width="100px" class="demo-form" style="width:600px;margin:0 auto">
   <h1>托管</h1>
    <el-form-item label="适用规格" prop="fit">
        <el-select v-model="trusteeship.fit" placeholder="请选择适用规格">
          <el-option label="小型" value="小型"></el-option>
          <el-option label="中型" value="中型"></el-option>
          <el-option label="大型" value="大型"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格(元)" prop="price">
        <el-select v-model="trusteeship.price" placeholder="请选择价格(元)">
          <el-option label="100" value="100"></el-option>
          <el-option label="120" value="120"></el-option>
          <el-option label="180" value="180"></el-option>
          <el-option label="200" value="200"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务耗时" prop="timer">
        <el-select v-model="trusteeship.timer" placeholder="请选择服务耗时">
          <el-option label="3小时" value="3小时"></el-option>
          <el-option label="6小时" value="6小时"></el-option>
          <el-option label="12小时" value="12小时"></el-option>
          <el-option label="24小时" value="24小时"></el-option>
          <el-option label="48小时" value="48小时"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择日期">
        <el-col :span="11">
          <el-form-item prop="schedule.date">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="trusteeship.schedule[0].date"
              style="width:100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-col :span="11">
          <el-form-item prop="schedule.time1">
            <el-time-select
                 placeholder="开始"
              v-model="trusteeship.schedule[0].time1"
              :picker-options="{start: '09:00',step: '00:30',end: '24:00'}"
              style="width: 80%;"
            ></el-time-select>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="schedule.time2">
            <el-time-select
                placeholder="结束"
              v-model="trusteeship.schedule[0].time2"
              :picker-options="{start: '09:00',step: '00:30',end: '24:00'}"
              style="width: 80%;"
            ></el-time-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="resetForm('trusteeship')">重置</el-button>
        <el-button type="primary"  @click="submitForm">立即创建</el-button>
      </el-form-item>
    </el-form>
 
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
  name: "addTrusteeship",
  methods: {
    ...mapActions(["addTrustAsync"]),

    submitForm() {
      console.log(this);
      this.addTrustAsync(this.trusteeship);
      alert("添加成功");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  data() {
    return {
      trusteeship: {
        state:'open',
        fit: "",
        price: "",
        timer: "",
        schedule: [
          {
            date: "",
            time1: "",
            time2: ""
          }
        ]
      }
    };
  }
};
</script>

<style>


.el-form-item .el-form-item {
 
    margin-left: 140px;
    width: 220px;
}
</style>