<template>
  <div>
    <div v-if="palyData.songinfo" class="play">
      <div class="play-box1">
        <i class="iconfont icon-shouye" @click="toHome"></i>
        <div class="play-box2">
          <p>{{palyData.songinfo.title}}</p>
          <p>{{palyData.songinfo.author}}</p>
        </div>
        <i class="iconfont icon-sousuo"></i>
      </div>
      <p class="play-p1">
        <img :src="palyData.songinfo.pic_radio" alt />
      </p>
      <div class="geci">
        <LRC :curTime="curTime" :songId="$route.params.songId" />
      </div>
      <p class="play-p2">
        <i class="iconfont icon-aixin"></i>
        <audio ref="myAudio" :src="palyData.bitrate.show_link" autoplay controls>您的浏览器不支持该音频</audio>
        <i class="iconfont icon-xiazai"></i>
      </p>
    </div>
    <div v-else>数据正在加载中...........</div>
  </div>
</template>

<script>
import LRC from "./LRC/LRC";
export default {
  name: "Player",
  data() {
    return {
      palyData: {},
      curTime: ""
    };
  },
  mounted() {
    this.$axios
      .get(
        "/api/v1/restserver/ting?method=baidu.ting.song.play&songid=" +
          this.$route.params.songId
      )
      .then(data => {
        this.palyData = data.data;
        console.log(this.palyData);
      });
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  },
  computed: {
    myAudio() {
      return this.$refs.myAudio;
    }
  },
  updated() {
    //   console.log(this.myAudio);
    let that = this;
    this.myAudio.ontimeupdate = function() {
      //   console.log(that.myAudio.currentTime);
      that.curTime = that.myAudio.currentTime;
    };
  },
  components: {
    LRC
  }
};
</script>

<style scoped>
* {
  background-color: #f5f5f5;
}
.play {
  padding: 10px;
}
.play-box1 {
  display: flex;
  text-align: center;
}
.play-box1 i {
  line-height: 42px;
}
.play-p1 img {
  display: block;
  width: 180px;
  margin: 20px auto;
}
.play-box2 {
  flex-grow: 1;
}
.geci {
  height: 200px;
  position: relative;
  overflow: scroll;
  margin-bottom: 20px;
}
.play-p2 {
  display: flex;
  line-height: 54px;
}
.play-p2 audio {
  flex-grow: 1;
  background-color: transparent;
}
</style>