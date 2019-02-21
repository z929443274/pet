<template>
  <div>
    <div class="showerTitle">洗浴用品列表</div>
    <el-table :data="data" border>
      <el-table-column prop="name" label="商品名称" align='center' width="100"></el-table-column>
      <el-table-column prop="fit" label="适用犬种" align='center' width="100"></el-table-column>
      <el-table-column prop="packing" label="商品规格" align='center' width="120"></el-table-column>
      <el-table-column prop="impact" label="商品功用" align='center' width="180"></el-table-column>
      <el-table-column prop="date" label="出厂日期" align='center' width="100"></el-table-column>
      <el-table-column prop="expirationDate" label="保质期" align='center' width="80"></el-table-column>
      <el-table-column prop="place" label="商品产地" align='center' width="80"></el-table-column>
      <el-table-column prop="price" label="商品价格" align='center' width="80"></el-table-column>
      <el-table-column prop="supplier" label="供应商" align='center' width="100"></el-table-column>
      <el-table-column prop="count" label="售出数量" align='center' width="100"></el-table-column>
      <el-table-column prop="img" label="商品图片" align='center' width="120">
          <template slot-scope="scope">
              <img src="../../images/commodity/shampoo.jpg" alt="">
          </template>
      </el-table-column>
      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <el-button  type="text" size="small" @click="updateBtn(scope.row)">修改</el-button>
          <el-button  type="text" size="small" @click="delShowerAsync(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <!-- 分页查询 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[3, 5, 10]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum"
    ></el-pagination>

      <!-- 显示修改信息 -->
    <el-dialog title="修改洗浴用品信息" :visible.sync="dialogFormVisible" :before-close="handleClose">
      <el-form :model="updateInfo" ref="updateInfo" style="width: 70%;margin:0 auto">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="适用犬种" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.fit" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品规格" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.packing" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品功用" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.impact" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出厂日期" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保质期" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.expirationDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品产地" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.place" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.supplier" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="售出数量" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.count" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateSuccess('updateInfo')">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("shower");

export default {
  name: "Shower",
  data() {
      return {
      dialogFormVisible: false,
        updateInfo:{
          name: '',
          fit: '',
          packing: '',
          impact: '',
          date: '',
          expirationDate: '',
          place: '',
          price: '',
          supplier: '',
          count: 0
        },
      formLabelWidth: "120px"
      }
    },
  mounted() {
    this.getShowerByPageAsync();
  },
  watch: {
    currentPage() {
      this.getShowerByPageAsync();
    },
    eachPage() {
      this.getShowerByPageAsync();
    }
  },
  computed: {
    ...mapState(["currentPage", "eachPage", "totalPage", "totalNum", "data"])
  },
    methods: {
    ...mapActions(["getShowerByPageAsync", "delShowerAsync", "updateShowerAsync"]),
    ...mapMutations(["setCurPage", "setEachPage"]),
      //修改
    updateBtn(updateInfo) {
      this.dialogFormVisible = true;
      this.updateInfo = updateInfo;
    },
      
      //确认修改
    updateSuccess(val) {
      this.$refs[val].validate(valid => {
        if (valid) {
          this.updateShowerAsync(this.updateInfo);
          this.$notify({
            title: "成功",
            message: "商品信息修改成功",
            type: "success"
          });
          this.dialogFormVisible = false;
        } else {
          this.$notify.error({
            title: "错误",
            message: "商品信息修改失败，请确认修改项"
          });
          return false;
        }
      });
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.setEachPage(val), this.setCurPage(1);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
    },
};
</script>

<style>
.showerTitle {
  color: lightseagreen;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  line-height: 2;
}
.has-gutter th{
    outline: 1px solid #ebeef5;
    border: none;
}
.el-main{
  line-height: 80px;
}
</style>
