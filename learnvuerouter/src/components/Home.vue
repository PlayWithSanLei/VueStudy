<template>
  <el-container class="home-container">
    <!--    头部区域-->
    <el-header>
      <div>
        <img src="../assets/jtyzt.png" alt="">
        <span>交通一张图后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--    页面主体区域-->
    <el-container>

        <!--      侧边栏-->
        <el-aside :width="isCollapsed ? '64px': '200px'">
          <div class="toggle-button" @click="toggleCollapse"><span
            :style="isCollapsed? 'margin-left: 25px' : 'margin-left:90px'">|||</span></div>
          <!--        侧边栏菜单区域-->
          <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" :unique-opened="true"
                   :collapse="isCollapsed" :collapse-transition="false" router :default-active="activePath">
            <!--          一级菜单-->
            <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
              <!--            一级菜单的模板区-->
              <template slot="title">
                <!--              图标-->
                <i :class="iconsObj[item.id]"></i>
                <!--              文本-->
                <span>{{ item.authName }}</span>
              </template>
              <!--            二级菜单-->
              <el-menu-item :index="'/' + subitem.path" v-for="subitem in item.children" :key="subitem.id" @click="saveNavState('/'+subitem.path)">
                <template slot="title">
                  <!--              图标-->
                  <i class="el-icon-menu"></i>
                  <!--              文本-->
                  <span>{{ subitem.authName }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      <!--      右侧内容主体-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activePath: '',
      menulist: [],
      iconsObj: {
        125: 'el-icon-user-solid',
        103: 'el-icon-lock',
        101: 'el-icon-shopping-bag-1',
        102: 'el-icon-notebook-2',
        145: 'el-icon-pie-chart'
      },
      isCollapsed: false
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  name: "Home",
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.replace('/login')
    },
    // 获取所有菜单
    async getMenuList() {
      const {data: res} = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      this.$message.success(res.meta.msg)
      console.log(res);
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  padding-bottom: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
}

span {
  margin-left: 15px;
}

div {
  display: flex;
  align-items: center;
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #EAEDF1;
}

img {
  width: 110px;
  height: 110px;
}

.iconfont {
  margin-right: 10px;
}

.el-menu {
  border-right: none;
}

.toggle-button {
  background-color: #4a5054;
  font-size: 10px;
  color: #fff;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
