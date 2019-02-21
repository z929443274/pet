<template>
  <div>
    <h1>美容</h1>
    <!-- 修改弹框 -->
    <el-dialog title="美容" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
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
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="upDate">修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 列表 -->
    <el-table
      :data="beaty"
      ref="multipleTable"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      border
      style="width: 1000px"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="_id" label="编号" width="200"></el-table-column>
      <el-table-column prop="schedule" label="耗时" width="150"></el-table-column>
      <el-table-column prop="kind" label="服务规格" width="120"></el-table-column>
      <el-table-column prop="fit" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="price" label="价格(元)" width="120"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            v-model="dialogVisible"
          >修改</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, ]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="50"
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
  methods: {
    // 修改
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogVisible = true;
      this.form.fit = row.fit;
      this.form.price = row.price;
      this.form.kind = row.kind;
       this.form.schedule.date=row.schedule.date;
      this.form.schedule.time1 = row.schedule.time1;
      this.form.schedule.time2 = row.schedule.time2;
    },
    // 确认修改
    upDate() {
      console.log("upDate");
      this.dialogVisible = false;
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 选中改变
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 取消新增
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage: 5,
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
      dialogVisible: false,
      beaty: [
        {
          _id: "1",
           schedule: {date:"2018-11-28",
          time1:"13:00",
          time2:"13:25"
          },
          kind: "普修",
          fit: "大",
          price: "100"
        },
        {
          _id: "12",
           schedule: {date:"2018-11-28",
          time1:"13:00",
          time2:"13:25"
          },
          kind: "普修",
          fit: "大",
          price: "100"
        },
        {
          _id: "13",
            schedule: {date:"2018-11-28",
          time1:"13:00",
          time2:"13:25"
          },
          kind: "普修",
          fit: "大",
          price: "100"
        },
        {
          _id: "14",
            schedule: {date:"2018-11-28",
          time1:"13:00",
          time2:"13:25"
          },
          kind: "普修",
          fit: "大",
          price: "100"
        }
      ]
    };
  }
};
</script>


<style>
</style>