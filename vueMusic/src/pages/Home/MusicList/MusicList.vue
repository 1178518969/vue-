<template>
  <div class="music">
    <div class="music-box">
      <p>{{title}}</p>
      <a>更多</a>
    </div>

    <div v-if="musicData.song_list" class="music-div">
        <MusicItem v-for="(item,index) in musicData.song_list" :key="item.song_id" :uindex="index" :itemData="item"></MusicItem>
    </div>
    <div v-else> 
        数据正在请求中.....
    </div>
  </div>
</template>

<script>
import MusicItem from "../MusicItem/MusicItem"
export default {
  name: "MusicList",
  data() {
    return {};
  },
  props:{
      musicData:{
          type:Object,
          required:true
      },
      title:{
          type:String,
          required:true
      },
  },
  components:{
      MusicItem
  }
};
</script>

<style scoped>
.music-div{
    overflow: hidden;
    margin-top: 10px;
}
.music{
    padding-left: 10px;
    padding-right: 10px;
    background-color: #F5F5F5;
}
.music-box{
    overflow: hidden;
}
.music-box p{
    float: left;
}
.music-box a{
    float: right;
}
.item-box:nth-child(3n){
    margin-right: 0;
}
</style>