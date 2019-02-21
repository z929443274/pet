<template>
  <div>
    <div class="toyTitle">宠物玩具列表</div>
    <el-table :data="data" border>
      <el-table-column prop="name" label="商品名称" align="center" width="150"></el-table-column>
      <el-table-column prop="texture" label="商品材质" align="center" width="100"></el-table-column>
      <el-table-column prop="fit" label="适用犬种" align="center" width="100"></el-table-column>
      <el-table-column prop="impact" label="商品功用" align="center" width="180"></el-table-column>
      <el-table-column prop="place" label="商品产地" align="center" width="100"></el-table-column>
      <el-table-column prop="price" label="商品价格" align="center" width="100"></el-table-column>
      <el-table-column prop="supplier" label="供应商" align="center" width="100"></el-table-column>
      <el-table-column prop="count" label="售出数量" align="center" width="100"></el-table-column>
      <el-table-column prop="img" label="商品图片" align="center" width="200">
        <template slot-scope="scope">
          <img src="../../images/commodity/ball.jpg" alt>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="updateBtn(scope.row)">修改</el-button>
          <el-button type="text" size="small" @click="delToyAsync(scope.row._id)">删除</el-button>
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
    <el-dialog title="修改玩具信息" :visible.sync="dialogFormVisible" :before-close="handleClose">
      <el-form :model="updateInfo" ref="updateInfo" style="width: 70%;margin:0 auto">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品材质" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.texture" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="适用犬种" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.fit" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品功用" :label-width="formLabelWidth">
          <el-input v-model="updateInfo.impact" autocomplete="off"></el-input>
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
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("toy");

export default {
  name: "Toy",
  data() {
    return {
      dialogFormVisible: false,
      updateInfo: {
        name: "",
        texture: "",
        fit: "",
        impact: "",
        place: "",
        price: "",
        supplier: "",
        count: ""
      },
      formLabelWidth: "120px"
    };
  },
  mounted() {
    this.getToyByPageAsync();
  },
  watch: {
    currentPage() {
      this.getToyByPageAsync();
    },
    eachPage() {
      this.getToyByPageAsync();
    }
  },
  computed: {
    ...mapState(["currentPage", "eachPage", "totalPage", "totalNum", "data"])
  },
  methods: {
    ...mapActions(["getToyByPageAsync", "delToyAsync", "updateToyAsync"]),
    ...mapMutations(["setCurPage", "setEachPage"]),

    //修改
    updateBtn(updateInfo) {
      this.dialogFormVisible = true;
      this.updateInfo = updateInfo;
    },
    //确定修改
    updateSuccess(val) {
      this.$refs[val].validate(valid => {
        if (valid) {
          this.updateToyAsync(this.updateInfo);
          console.log(this.updateInfo);

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
  }
};
</script>

<style>
.toyTitle {
  color: lightseagreen;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  line-height: 2;
}
.has-gutter th {
  outline: 1px solid #ebeef5;
  border: none;
}
.el-main {
  line-height: 80px;
}
</style>
