<template>
  <div>
    <el-table
      :data="data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="_id"></el-table-column>
      <el-table-column label="宠物屋店名" prop="name"></el-table-column>
      <el-table-column label="宠物屋地址" prop="address"></el-table-column>
      <el-table-column label="联系方式" prop="tel"></el-table-column>
      <el-table-column label="门店管理员" prop="staffId[imgUrl].url">
        <template slot-scope="scope">
          <img :src="scope.row.staffId.imgUrl.url" class="head_pic" min-width="70" height="70">
        </template>
      </el-table-column>
      <el-table-column label="宠物屋图片" prop="imgUrl[url]">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl.url" class="head_pic" min-width="70" height="70">
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
        <el-form-item label="宠物屋店名" style="width:350px" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="宠物屋地址" style="width:350px" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="佣金比例" style="width:350px" :label-width="formLabelWidth">
          <el-select v-model="form.ratio" placeholder="请选择佣金比例范围">
            <el-option label="比例(3%)" value="0.03"></el-option>
            <el-option label="比例(5%)" value="0.05"></el-option>
            <el-option label="比例(8%)" value="0.08"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="宠物屋简介" style="width:350px" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item label="宠物屋联系电话" style="width:350px" :label-width="formLabelWidth">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateStorefront()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getStorefrontByPageAsync,updateStorefrontAsync,removeStorefrontAsync } from "../../services/storefront.js";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "Storefront"
);
export default {
  data() {
    return {
      search: "",
      dialogFormVisible: false,
      form: {
        name: "",
        address: "",
        date1: "",
        date2: "",
        type: [],
       staffId:{},
        intro: "",
        imgUrl: "",
        ratio: "",
        tel: ""
      },
      formLabelWidth: "150px"
    };
  },
  watch: {
    eachPage() {
      let usersId = JSON.parse(sessionStorage.user)[0]._id
      this.getStorefrontByPageAsync(usersId);
    },
    currentPage() {
      let usersId = JSON.parse(sessionStorage.user)[0]._id
      this.getStorefrontByPageAsync(usersId);
    },
  },
  mounted() {
    let usersId = JSON.parse(sessionStorage.user)[0]._id
    this.getStorefrontByPageAsync(usersId);
    console.log(this)
  },
  computed: {
    ...mapState(["count", "totalPage", "eachPage", "currentPage", "data"])
  },
  methods: {
    ...mapActions(["getStorefrontByPageAsync","updateStorefrontAsync","removeStorefrontAsync"]),
    ...mapMutations(["setCurrentPage", "setEachPage"]),
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      Object.assign(this.form,row);
    },
    handleDelete(index, row) {
       this.removeStorefrontAsync(row._id);
       let usersId = JSON.parse(sessionStorage.user)[0]._id
        this.getStorefrontByPageAsync(usersId);
    },
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurrentPage(val);
    },
    updateStorefront(){
      let newStorefront = this.form;
      this.updateStorefrontAsync(newStorefront);
      this.dialogFormVisible = false;
      let usersId = JSON.parse(sessionStorage.user)[0]._id
      this.getStorefrontByPageAsync(usersId);
    }
  }
};
</script>