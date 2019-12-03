<template>
  <div class="mytabs-box">
    <el-tabs v-model="activeName" class="mytabs-div">
      <el-tab-pane label="经典老歌" name="first">
        <Mylist :mylistData="laoge" />
      </el-tab-pane>
      <el-tab-pane label="流行音乐" name="second">
        <Mylist :mylistData="liuxing" />
      </el-tab-pane>
      <el-tab-pane label="情歌对唱" name="third">
        <Mylist :mylistData="qingge" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Mylist from "../Mylist/Mylist";
export default {
  name: "Mytabs",
  data() {
    return {
      activeName: "first",
      laoge: {},
      liuxing: {},
      qingge: {}
    };
  },
  mounted() {
    this.$axios
      .get(
        "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=6&offset=0"
      )
      .then(data => {
        this.laoge = data.data;
        console.log(this.laoge);
      });
    this.$axios
      .get(
        "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=16&size=6&offset=0"
      )
      .then(data => {
        this.liuxing = data.data;
        console.log(this.liuxing);
      });
    this.$axios
      .get(
        "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=23&size=6&offset=0"
      )
      .then(data => {
        this.qingge = data.data;
        console.log(this.qingge);
      });
  },
  components: {
    Mylist
  }
};
</script>

<style scoped>
.mytabs-box {
  margin-left: 10px;
  margin-right: 10px;
}
</style>