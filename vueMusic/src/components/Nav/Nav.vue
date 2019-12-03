<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#67C23A"
    >
      <el-menu-item index="1" class="nav-li">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2" class="nav-li">
        <router-link to="/bangdan">榜单</router-link>
      </el-menu-item>
      <el-menu-item index="3" class="nav-li">
        <router-link to="/my">我的</router-link>
      </el-menu-item>
      <el-menu-item index="4" class="nav-li">
        <router-link to="/search">搜索</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {
    let num = this.$router.currentRoute.path;
    if (num === "/") {
      this.activeIndex = "1";
    } else if (num === "/bangdan") {
      this.activeIndex = "2";
    } else if (num === "/my") {
      this.activeIndex = "3";
    } else if (num === "/search") {
      this.activeIndex = "4";
    }
  }
};
</script>

<style scoped>
.nav-li {
  width: 25%;
  height: 40px;
  line-height: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav-li a {
  text-decoration: none;
}
</style>