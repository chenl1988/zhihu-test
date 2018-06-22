<template>

    <div class="news-wrapper">
        
        <myHeader/>

        <div class="swiper-container" id="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="topNews in topNewsList">
                    <router-link :to="{path:'/newsDetail',query:{ id:topNews.id }}"> 
                        <div class="swiper-img-wrapper">
                            <img :src="topNews.image" alt=""  class="news-img" @load="resizeImgFun($event)">     
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>

        <ul class="news-list">
            <li class="news-item" v-for="newsItem in newsList">
                <a href="javascript:;" class="new-item-wrapper">
                    <div class="news-title-wrapper"> 
                        <h3 class="new-title">{{ newsItem.title }}</h3>
                    </div>
                    <div class="new-img-wrapper">
                        <img :src="newsItem.images[0]" alt=""  class="news-img" @load="resizeImgFun($event)">
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    import Header from '../../components/header/header'
    import { getNewsList } from '../../api/interface'
    import { resizeImg } from '../../api/utils'

    export default{ 
        components:{
            "myHeader":Header
        },
        data() {
            return {
                newsList:[],
                topNewsList:[]
            }
        },
        created() {
            getNewsList().then(res=>{
                //console.log(res)
                this.newsList = res.stories
                this.topNewsList =  res.top_stories
            })
        },
        mounted() {
            this.$nextTick(() => {
                let mySwiper = new Swiper("#swiper", {
                    observer: true,
                    observeParents: true,
                    autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                    },
                    loop: true
                });
            }); 
        },
        methods: {
            resizeImgFun(_img){
                resizeImg(_img)
            }
        }
    }
</script>
<style lang="less" scoped>
@import "../../style/variables.less";
    .news-wrapper{
        max-width: 100vw;
        min-height: 100vh;
    }
    .swiper-container{
        padding-top: 100px;
        .swiper-img-wrapper{
            width:100%;
            height: 400px;
        }
    }
    .news-list{
        .news-item{
            margin-top: 20px;
        }
        .new-item-wrapper{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0 30px 25px;
            border-bottom:1px solid #999;/* no */
            .news-title-wrapper{
                flex: 3;
                .new-title{
                    text-align: left;
                    font-size: 30px;
                    .line-clamp;
                }
            }
            .new-img-wrapper{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left:20px;
                width:200px;
                height: 120px;
                border-radius: 10px;
            }
        }
    }
</style>
