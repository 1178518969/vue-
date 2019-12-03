<template>
  <div class="mylist-box">
    <div v-if="mylistData.song_list">
      <router-link v-for="item in mylistData.song_list" :key="item.song_id" :to="{name:'Player',params:{songId:item.song_id}}">
        <div class="mylist-li">
        <div class="div1">
          <img :src="item.pic_big" alt />
        </div>
        <div class="div2">
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
        </div>
        </div>
      </router-link>
    </div>
    <div v-else>数据正在加载中</div>
  </div>
</template>

<script>
export default {
  name: "Mylist",
  data() {
    return {};
  },
  props: {
    mylistData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.mylist-box {
  margin-bottom: 10px;
}
.mylist-li {
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
}
.mylist-li div {
  float: left;
}
.div1 img {
  height: 40px;
}
.mylist-li p {
  line-height: 20px;
  font-size: 12px;
}
.div1 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.div2 {
  padding-left: 20px;
}
a{
  color: #666;
}
</style>