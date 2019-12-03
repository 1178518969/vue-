<template>
    <div>
        <Nav />
        <MusicList :musicData="xinge" title="今日推荐"/>
        <MusicList :musicData="rege" title="热歌榜"/>
        <MusicList :musicData="yaogun" title="摇滚榜"/>
        <Myswiper :swiperSlides="imgUrl" />
        <Mytabs />
    </div>
</template>

<script>
import Nav from "../../components/Nav/Nav";
import MusicList from "./MusicList/MusicList";
import Myswiper from "../../components/Myswiper/Myswiper";
import Mytabs from "../../components/Mytabs/Mytabs";
import pc1 from "../../assets/img/b1.jpg";
import pc2 from "../../assets/img/b2.jpg";
import pc3 from "../../assets/img/b3.jpg";
export default {
    name:"Home",
    data(){
        return{
            xinge:{},
            rege:{},
            yaogun:{},
            imgUrl:[pc1,pc2,pc3]
        }
    },
    components:{
        Nav,
        MusicList,
        Myswiper,
        Mytabs
    },
    mounted(){
        this.$axios.get("/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0")
        .then(data=>{
            this.xinge=data.data;
            console.log(this.xinge);
        });
        this.$axios.get("/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=6&offset=0")
        .then(data=>{
            this.rege=data.data;
            console.log(this.rege);
        });
        this.$axios.get("/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=6&offset=0")
        .then(data=>{
            this.yaogun=data.data;
            console.log(this.yaogun);
        });

    }
}
</script>

<style scoped>

</style>