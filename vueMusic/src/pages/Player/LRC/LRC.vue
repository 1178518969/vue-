<template>
  <div v-if="timeArr.length>0" class="lrc-box" ref="lrcscroll">
    <p
      v-for="(item,key,index) in lrcObj"
      :key="key"
      :class="{active:curTime>=key && curTime<timeArr[index+1]}"
    >{{item}}{{scrollFn(index,key)}}</p>
  </div>
  <div v-else>数据正在加载中....</div>
</template>

<script>
export default {
  name: "LRC",
  data() {
    return {
      lrcObj: {},
      timeArr: [],
      lrcscroll: ""
    };
  },
  props: {
    songId: {
      type: [String, Number],
      required: true
    },
    curTime: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    scrollFn(index, key) {
      if (
        this.curTime >= this.timeArr[index] &&
        this.curTime < this.timeArr[index + 1]
      ) {
          this.lrcscroll.style.top = -25*(index-2) +'px'
      }
    }
  },
  updated() {
    this.lrcscroll = this.$refs.lrcscroll;
  },
  mounted() {
    this.$axios
      .get(
        "/api/v1/restserver/ting?method=baidu.ting.song.lry&songid=" +
          this.songId
      )
      .then(data => {
        let lrc = data.data.lrcContent;
        // console.log(lrc);
        let lrcArr = lrc.split(/\n/g);
        // console.log(lrcArr);
        for (let i = 0; i < lrcArr.length; i++) {
          // let res2=lrcArr[i].slice(0,10);
          // console.log(res2)
          let res = lrcArr[i].match(/\[\d*:\d*(.|:)\d*\]/);
          if (res) {
            let timeStr = res[0];
            // console.log(timeStr);
            let geci = lrcArr[i].replace(timeStr, "");
            // console.log(geci);
            let time =
              timeStr.slice(1, 3) * 60 +
              (timeStr.slice(4, 6) - 0) +
              "." +
              timeStr.slice(7, 9) -
              0;
            // console.log(time);
            this.lrcObj[time] = geci;
            this.timeArr.push(time);
          }
        }
        // console.log(this.lrcObj, this.timeArr);
      });
  }
};
</script>

<style scoped>
.lrc-box {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: absolute;
  top: 0;
  text-align: center;
}
.lrc-box p {
  height: 25px;
  line-height: 25px;
}
.active {
  color: red;
}
</style>