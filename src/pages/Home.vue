<template>
  <el-container>
    <el-header style="background-color:#c1dab0" height="150px">
    <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6"><h1>家庭财务管理系统</h1></el-col>
          <el-col :span="3"><h6>退出系统</h6></el-col>
        </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="4">当前用户：XXX</el-col>
      <el-col :span="4">当前日期：年月日</el-col>
    </el-row>
    <h2></h2>
    <p></p>
    </el-header>


    <el-container>
      <el-aside width="250px">
          <el-row class="tac">
            <el-col >
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>账号管理</span>
                  </template>
                  <el-menu-item-group>
                           <el-menu-item ><router-link to="/updatepwd"><el-link type="primary">修改密码</el-link></router-link></el-menu-item>
                           <el-menu-item ><router-link to="/updatename"><el-link type="primary">修改账户名</el-link></router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                        <template slot="title">
                          <i class="el-icon-menu"></i>
                          <span>    家庭成员管理</span>
                        </template>
                        <el-menu-item-group>
                           <el-menu-item ><router-link to="/memberadd"><el-link type="primary">新增</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/membershow"><el-link type="primary">显示</el-link></router-link></el-menu-item>
                        </el-menu-item-group>
                 </el-submenu>

                 <el-submenu index="3">
                         <template slot="title">
                           <i class="el-icon-menu"></i>
                           <span>储蓄账户管理</span>
                         </template>
                         <el-menu-item-group>
                           <el-menu-item ><router-link to="/accountadd"><el-link type="primary">新增</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/accountshow"><el-link type="primary">显示</el-link></router-link></el-menu-item>
                          </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="4">
                         <template slot="title">
                           <i class="el-icon-menu"></i>
                           <span>日常收支管理</span>
                         </template>
                         <el-menu-item-group>
                           <el-menu-item ><router-link to="/balanceadd"><el-link type="primary">新增</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/balanceshow"><el-link type="primary">显示</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/balanceform"><el-link type="primary">报表</el-link></router-link></el-menu-item>
                         </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="5">
                         <template slot="title">
                           <i class="el-icon-menu"></i>
                           <span>借入借出管理</span>
                         </template>
                         <el-menu-item-group>
                           <el-menu-item ><router-link to="/borrowlendadd"><el-link type="primary">新增</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/borrowlendshow"><el-link type="primary">显示</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/borrowlendform"><el-link type="primary">报表</el-link></router-link></el-menu-item>
                         </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="6">
                         <template slot="title">
                           <i class="el-icon-menu"></i>
                           <span>理财管理</span>
                         </template>
                         <el-menu-item-group>
                           <el-menu-item><router-link to="/financeadd"><el-link type="primary">新增</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/financeshow"><el-link type="primary">显示</el-link></router-link></el-menu-item>
                           <el-menu-item><router-link to="/financechart"><el-link type="primary">趋势图</el-link></router-link></el-menu-item>
                         </el-menu-item-group>
                  </el-submenu>

              </el-menu>
            </el-col>
          </el-row>
      </el-aside>

      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>



</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

