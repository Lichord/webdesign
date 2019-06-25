<template>
  <div id="updatepwd" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
            <br><br>
      <el-row type="flex"  >
        <el-col span="8" push="1">
          <el-form label-position="left" label-width="80px" >
            <el-form-item label="新密码">
                  <el-input v-model="pwd1" type="password"  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                  <el-input v-model="pwd1" type="password"  autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <el-col span="4" push="8">
                  <el-button >保存</el-button>
           </el-col>

      </el-col>
     </el-row>
      <br>

</el-form>
  </div>



</template>

<script>
  export default {
  data(){
    return {
                        pwd1: '',
                        pwd2:'',
          };
  }

   }
</script>

<style>

</style>
