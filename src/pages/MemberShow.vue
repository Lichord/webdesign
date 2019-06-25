<template>
   <div id="membershow" >
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>家庭成员管理</el-breadcrumb-item>
          <el-breadcrumb-item>显示</el-breadcrumb-item>
        </el-breadcrumb>
              <br>
  <el-table
    :data="tableData"
    style="width: 60%"
    height="800">
    <el-table-column
      fixed
      prop="date"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="电话"
      width="120">
    </el-table-column>


    <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>

  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
