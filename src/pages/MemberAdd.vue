<template>
  <div id="memberadd" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>家庭成员管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增</el-breadcrumb-item>
      </el-breadcrumb>
            <br><br>
      <el-row type="flex"  >
        <el-col span="8" push="1">
          <el-form label-position="left" label-width="80px" >
            <el-form-item label="姓名">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input ></el-input>
            </el-form-item>
          </el-form>
          <el-col span="4" push="8">
                  <el-button >保存</el-button>
           </el-col>

      </el-col>
     </el-row>
      <br>
  </div>
</template>

<script>
export default {
  name: 'memberadd'
}
</script>

<style>

</style>
