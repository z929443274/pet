<template>
  <div>
    <h1>美容</h1>
    <!-- 修改弹框 -->
    <el-dialog title="美容" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="服务规格">
          <el-select v-model="form.kind" placeholder="请选择服务规格">
            <el-option label="普修" value="普修"></el-option>
            <el-option label="精修" value="精修"></el-option>
          </el-select>
        </el-form-item>
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
        <el-form-item label="选择日期">
          <el-date-picker v-model="form.schedule[0].date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="选择时间">
          <el-col :span="11">
            <el-time-select
              placeholder="开始"
              v-model="form.schedule[0].time1"
              style="width: 80%;"
              :picker-options="{start: '08:30',step: '00:30',end: '17:30'}"
            ></el-time-select>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-select
              placeholder="结束"
              v-model="form.schedule[0].time2"
              style="width: 80%;"
              :picker-options="{start: '09:00',step: '00:30',end: '18:00'}"
            ></el-time-select>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="update('form')">修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 列表 -->
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
      <el-table-column prop="kind" label="服务规格" width="100"></el-table-column>
      <el-table-column prop="fit" label="适用规格" width="100"></el-table-column>
      <el-table-column prop="price" label="价格(元)" width="100"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="updateBtn(scope.row)"
            v-model="dialogVisible"
          >修改</el-button>
          <el-button type="text" size="small" @click="removeBeautyAsync( scope.row._id)">删除</el-button>
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
} = createNamespacedHelpers("beautify");
export default {
  name: "beautifyList",
  watch: {
    currentPage() {
      this.getBeautifyByPageAsync();
    },
    eachPage() {
      this.getBeautifyByPageAsync();
    }
  },
  mounted() {
    this.getBeautifyByPageAsync();
  },
  computed: {
    ...mapState(["currentPage", "eachPage", "totalPage", "count", "data"])
  },
  methods: {
    ...mapActions(["removeBeautyAsync","updateBeautyAsync", "getBeautifyByPageAsync"]),
    ...mapMutations(["setEachPage", "setCurPage"]),
    // 点击修改
 updateBtn(value) {
      this.dialogVisible = true;
      this.form = value;
    },
    // 确认修改
     update(form) {
      this.dialogVisible = false;
         this.$refs[form].validate((valid) => {
          if (valid) {
            this.updateBeautyAsync(this.form)
            console.log(this.form);
            alert('修改成功');
          } else {
            console.log('错误');
            return false;
          }
        });
    },
    // 关闭弹窗
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 选中改变
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
      multipleSelection: [],
      form: {
        kind: "",
        fit: "",
        price: "",
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