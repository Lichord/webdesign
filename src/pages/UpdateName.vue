<template>
  <div id="updatename" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>修改账户名</el-breadcrumb-item>
      </el-breadcrumb>
            <br><br>
      <el-row type="flex"  >
        <el-col span="8" push="1">
          <el-form label-position="left" label-width="80px" >
            <el-form-item label="新账户名">
              <el-input v-model="input"></el-input>
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
  name: 'updatename',
  data() {
      return {
        input: ''
      }
    }
}
</script>

<style>

</style>
