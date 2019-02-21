<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>新增美容</span>
  </div>
  <div v-for="o in 1" :key="o" class="text item">
       <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="服务规格">
        <el-select v-model="form.kind" placeholder="请选择服务规格">
          <el-option label="普修" value="kind"></el-option>
          <el-option label="精修" value="kind"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="适用规格">
        <el-select v-model="form.fit" placeholder="请选择适用规格">
          <el-option label="小型" value="fit"></el-option>
          <el-option label="中型" value="fit"></el-option>
          <el-option label="大型" value="fit"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格(元)">
        <el-select v-model="form.price" placeholder="请选择价格">
          <el-option label="100" value="price"></el-option>
          <el-option label="120" value="price"></el-option>
          <el-option label="180" value="price"></el-option>
          <el-option label="200" value="price"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择日期">
        <el-date-picker v-model="form.schedule.date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-col :span="11">
          <el-time-select
            placeholder="开始"
            v-model="form.schedule.time1"
            style="width: 80%;"
            :picker-options="{start: '08:30',step: '00:30',end: '17:30'}"
          ></el-time-select>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-select
            placeholder="结束"
            v-model="form.schedule.time2"
            style="width: 80%;"
            :picker-options="{start: '09:00',step: '00:30',end: '18:00'}"
          ></el-time-select>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button>重置</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
} = createNamespacedHelpers("beautify");
export default {
  name: "addBeautify",
  methods: {
    // 取消新增
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //创建新的美容
    onSubmit() {
      console.log("submit!");
    }
  },
  data() {
    return {
      form: {
        kind: "",
        fit: "",
        price: "",
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
</style>