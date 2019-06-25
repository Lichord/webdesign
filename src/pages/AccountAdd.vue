<template>
  <div id="accountadd" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>储蓄账户管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增</el-breadcrumb-item>
      </el-breadcrumb>
            <br><br>
      <el-row type="flex"  >
        <el-col span="8" push="1">
          <el-form label-position="left" label-width="80px" >
            <el-form-item label="银行">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="卡号">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="所有人">
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
  name: 'accountadd'
}
</script>

<style>

</style>
