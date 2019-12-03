<template>
  <div>
    <router-link :to="{name:'Player',params:{songId:itemData.song_id}}">
      <div class="item-box" :class="{'item-div':(uindex-0+1)%3==0}">
        <div>
          <img :src="itemData.pic_big" alt />
        </div>
        <div>
          <p class="item-p1">{{itemData.title}}</p>
          <p class="item-p2">{{itemData.author}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MusicItem",
  data() {
    return {};
  },
  props: {
    itemData: {
      type: [String, Object],
      required: true
    },
    uindex: {
      type: [String, Number]
    }
  },
  updated(){
     console.log(itemData)
  }
};
</script>

<style>
.item-box {
  float: left;
  width: 31.33%;
  margin-right: 10px;
  margin-bottom: 10px;
}
.item-div {
  margin-right: 0;
}
.item-box img {
  max-width: 100%;
}
.item-p1,
.item-p2 {
  color: #333;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-p2 {
  color: #999;
}
</style>