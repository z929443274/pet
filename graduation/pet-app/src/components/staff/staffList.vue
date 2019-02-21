<template>
  <div>
    <el-table
      :data="data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="_id"></el-table-column>
      <el-table-column label="员工姓名" prop="name"></el-table-column>
      <el-table-column label="员工年龄" prop="age"></el-table-column>
      <el-table-column label="员工性别" prop="gender"></el-table-column>
      <el-table-column label="联系方式" prop="tel"></el-table-column>
      <el-table-column label="员工照片" prop="imgUrl[url]">
        <template slot-scope="scope">
          <img :src='scope.row.imgUrl.url' class="head_pic" min-width="70" height="70">
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 25, 30]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></el-pagination>
    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="员工姓名" style="width:350px" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工年龄" style="width:350px" :label-width="formLabelWidth">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="员工性别" prop="gender">
          <el-radio-group v-model="form.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系电话" style="width:350px" :label-width="formLabelWidth">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateStaff()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getStaffByPageAsync,
  updateStaffAsync,
  removeStaffAsync
} from "../../services/staff.js";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "Staff"
);
export default {
  data() {
    return {
      search: "",
      dialogFormVisible: false,
      form: {
        name: "",
        age: "",
        gender: "",
        delivery: false,
        imgUrl: "",
        tel: ""
      },
      formLabelWidth: "150px"
    };
  },
  watch: {
    eachPage() {
      let usersId = JSON.parse(sessionStorage.user)[0]._id
      this.getStaffByPageAsync(usersId);
    },
    currentPage() {
      let usersId = JSON.parse(sessionStorage.user)[0]._id
      this.getStaffByPageAsync(usersId);
    }
  },
  mounted() {
    let usersId = JSON.parse(sessionStorage.user)[0]._id
    this.getStaffByPageAsync(usersId);
  },
  computed: {
    ...mapState(["count", "totalPage", "eachPage", "currentPage", "data"])
  },
  methods: {
    ...mapActions([
      "getStaffByPageAsync",
      "updateStaffAsync",
      "removeStaffAsync"
    ]),
    ...mapMutations(["setCurrentPage", "setEachPage"]),
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
      Object.assign(this.form, row);
      console.log(this.form);
    },
    handleDelete(index, row) {
      this.removeStaffAsync(row._id);
      this.getStaffByPageAsync();
    },
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurrentPage(val);
    },
    updateStaff() {
      let newStaff = this.form;
      console.log(newStaff);
      this.updateStaffAsync(newStaff);
      this.dialogFormVisible = false;
      this.getStaffByPageAsync();
    }
  }
};
</script>