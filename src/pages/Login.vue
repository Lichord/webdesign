<template>
  <div id="login" >
      <br><br><br><br><br><br><br><br>
      <el-row type="flex" justify="center" align="middle" >
        <el-col :span="8" >
          <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#40744e"
                    text-color="#fff"
                    >
            <el-menu-item index="1">家庭财务管理系统</el-menu-item>
           </el-menu>
            <br>
          <el-form label-position="left" label-width="80px" >
            <el-form-item label="账号">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="验证码" >
              <el-input ></el-input>
            </el-form-item>
          </el-form>
          <el-col span="4" push="8">
                  <el-button >登录</el-button>
           </el-col>
           <el-col span="4" push="8">
                   <el-button >注册</el-button>
            </el-col>
      </el-col>
     </el-row>
      <br>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>

</style>
