<template>
  <div>
    <h1>托管</h1>
    <!-- <el-input v-model="search" size="mini" placeholder="输入关键字搜索" width="100px"/> -->
    <!-- 修改弹窗 -->
    <el-dialog title="托管" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="适用规格">
          <el-select v-model="form.fit" placeholder="请选择适用规格">
            <el-option label="小型" value="小型"></el-option>
            <el-option label="中型" value="中型"></el-option>
            <el-option label="大型" value="大型"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格(元)">
          <el-select v-model="form.price" placeholder="请选择价格">
            <el-option label="100" value="100"></el-option>
            <el-option label="120" value="120"></el-option>
            <el-option label="180" value="180"></el-option>
            <el-option label="200" value="200"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择排期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.schedule[0].date"></el-date-picker>
        </el-form-item>
        <el-form-item label="选择时间">
          <el-col :span="11">
            <el-time-select
              placeholder="开始"
              v-model="form.schedule[0].time1"
              style="width: 80%;"
              :picker-options="{start: '08:30',step: '00:30',end: '23:30'}"
            ></el-time-select>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-select
              placeholder="结束"
              v-model="form.schedule[0].time2"
              :picker-options="{start: '09:00',step: '00:30',end: '24:00'}"
              style="width: 80%;"
            ></el-time-select>
          </el-col>
        </el-form-item>
        <el-form-item label="服务耗时">
          <el-select v-model="form.timer" placeholder="请选择服务耗时">
            <el-option label="3小时" value="3小时"></el-option>
            <el-option label="6小时" value="6小时"></el-option>
            <el-option label="12小时" value="12小时"></el-option>
            <el-option label="24小时" value="24小时"></el-option>
            <el-option label="48小时" value="48小时"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="update('form')">修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 搜索 -->
    <div style="margin-top: 15px;width:700px;">
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchClick()"></el-button>
      </el-input>
    </div>
    <!-- 表格 -->
    <el-table
      :data="data"
      ref="multipleTable"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="_id" label="编号" width="200"></el-table-column>
      <el-table-column prop="schedule[0].date" label="日期" width="150"></el-table-column>
      <el-table-column prop="schedule[0].time1" label="开始时间" width="100"></el-table-column>
      <el-table-column prop="schedule[0].time2" label="结束时间" width="100"></el-table-column>
      <el-table-column prop="timer" label="耗时" width="120"></el-table-column>
      <el-table-column prop="fit" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="price" label="价格(元)" width="120"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="updateBtn(scope.row)"
            v-model="dialogVisible"
          >修改</el-button>
          <el-button type="text" size="small" @click="removeTrustAsync(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 6, 10 ]"
        :page-size="eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </div>
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
  watch: {
    currentPage() {
      this.getTrusteeshipByPageAsync();
    },
    eachPage() {
      this.getTrusteeshipByPageAsync();
    }
  },
  mounted() {
    this.getTrusteeshipByPageAsync();
  },
  computed: {
    ...mapState(["currentPage", "eachPage", "totalPage", "count", "data"])
  },
  methods: {
    ...mapActions([
      "removeTrustAsync",
      "updateTrustAsync",
      "getTrusteeshipByPageAsync"
    ]),
    ...mapMutations(["setEachPage", "setCurPage"]),
    // 点击修改
    updateBtn(value) {
      this.dialogVisible = true;
      this.form = value;
    },
    // 修改成功
    update(form) {
      this.dialogVisible = false;
         this.$refs[form].validate((valid) => {
          if (valid) {
            this.updateTrustAsync(this.form)
            console.log(this.form);
            alert('修改成功');
          } else {
            console.log('错误');
            return false;
          }
        });
    },
    // 搜索
    searchClick() {
      let searchText = this.input;
      console.log(searchText);
      // this.searchServicesAsync(searchText);
    },
    // 选中改变
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 关闭弹窗
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 分页(`每页 ${val} 条`);
    handleSizeChange(val) {
      this.setEachPage(val), this.setCurPage(1);
    },
    //(`当前页: ${val}`);
    handleCurrentChange(val) {
      this.setCurPage(val);
    }
  },
  data() {
    return {
      input: "",
      form: {
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
      },
      dialogVisible: false
    };
  }
};
</script>

<style>
.el-main{line-height: 50px}
</style>