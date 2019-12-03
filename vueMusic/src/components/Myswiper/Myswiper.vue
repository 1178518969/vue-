<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Myswiper",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        loop : true,
      }
    };
  },
  props: {
    swiperSlides: {
      type: Array
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log(this.swiper);
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
