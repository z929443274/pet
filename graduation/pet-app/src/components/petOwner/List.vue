l<template>
        <el-card   class="box-card" style="min-height: 700px">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column prop="name" label="姓名" width="300"></el-table-column>
            <el-table-column prop="nickName" label="昵称" width="300"></el-table-column>
            <el-table-column prop="storefrontID" label="会员卡" width="300"></el-table-column>
            <el-table-column prop="integral" label="积分" width="300"></el-table-column>
            <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column fixed="right" label="拥有宠物" width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                <el-button type="text" size="small" @click="handleC(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">

            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[3, 5, 8, 10]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>


          
          <el-dialog style="line-height:20px;" title="详细信息" :visible.sync="dialogVisible">
            <div class="mor" :data="gridData">
              <p>宠主姓名：{{this.gridData[0].name}}</p>
              <p>宠主昵称：{{this.gridData[0].nickName}}</p>
              <p>会员卡：{{this.gridData[0].storefrontID}}</p>
              <p>积分：{{this.gridData[0].integral}}</p>
              <p>地址：{{this.gridData[0].address}}</p>
            </div>
          </el-dialog>

          <el-dialog title="编辑详情" style="line-height:20px;" :visible.sync="dialogFormVisible">
            <el-form :model="form" style="width:600px">
              <el-form-item label="宠主姓名：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="宠主昵称：:" :label-width="formLabelWidth">
                <el-input v-model="form.nickName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="会员卡：:" :label-width="formLabelWidth">
                <el-input v-model="form.storefrontID" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="积分：:" :label-width="formLabelWidth">
                <el-input v-model="form.integral" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="地址：:" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="change()">确 定</el-button>
            </div>
          </el-dialog>
        </el-card>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
      this.gridData[0].name = row.name;
      this.gridData[0].nickName = row.nickName;
      this.gridData[0].storefrontID = row.storefrontID;
      this.gridData[0].integral = row.integral;
      this.gridData[0].address = row.address;
    },
    handleC(row) {
      console.log(row);
      console.log(this.dialogFormVisible);
      this.dialogFormVisible = true;
      this.form.name = row.name;
      this.form.nickName = row.nickName;
      this.form.storefrontID = row.storefrontID;
      this.form.integral = row.integral;
      this.form.address = row.address;
    },
    change() {
      console.log(this.form.name);
      this.dialogFormVisible = false;
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
      gridData: [
        {
          date: "",
          name: "",
          address: ""
        }
      ],
      tableData: [
        {
          name: "王小虎",
          nickName: "虎哥",
          storefrontID: "12345678",
          integral: "22",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      currentPage4: 1
    };
  }
};
</script>


<style>
.box-card{
/* min-height: 700px; */
}

</style>
