<template>

    <div class="news-wrapper">
        
        <myHeader/>
        <span>top</span>
        <ul class="news-list">
            <li class="news-item" v-for="topNews in topNewsList">
                
                <a href="javascript:;" class="new-item-wrapper">
                    <div class="news-title-wrapper">
                        <h3 class="new-title">{{ topNews.title }}</h3>
                    </div>
                    <div class="new-img-wrapper">
                        <img :src="topNews.image" alt=""  class="news-img" @load="resizeImg($event)">
                    </div>
                </a>
            </li> 
            <li class="news-item" v-for="newsItem in newsList">
                
                <a href="javascript:;" class="new-item-wrapper">
                    <div class="news-title-wrapper">
                        <h3 class="new-title">{{ newsItem.title }}</h3>
                    </div>
                    <div class="new-img-wrapper">
                        <img :src="newsItem.images" alt=""  class="news-img" @load="resizeImg($event)">
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import Header from '../../components/header/header'
    import { getNewsList } from '../../api/interface.js'

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

        },
        methods: {
            getImage(url){
                //console.log(url);
                // 把现在的图片连接传进来，返回一个不受限制的路径
                if(url !== undefined){
                    console.log(url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p'))
                    return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
                }
            },
            /* 换比例截图部分图片 */

            resizeImg(img_) {
                
                let parent = img_.target.parentNode;

                var width = parent.offsetWidth;
                var height = parent.offsetHeight;
                var img = new Image();

                img.src = img_.target.getAttribute("src");
                var scale = Math.max(width / img_.target.offsetWidth, height / img_.target.offsetHeight);
                var newWidth = img_.target.offsetWidth * scale;
                var newHeight = img_.target.offsetHeight * scale;

                img_.target.width = newWidth;
                img_.target.height = newHeight;
                img_.target.style.marginLeft = (width - newWidth) / 2 + "px";
                img_.target.style.marginTop = (height - newHeight) / 2 + "px";

                parent.style.width = width;
                parent.style.height = height;
                parent.style.overflow = "hidden";
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
    .news-list{
        padding-top: 100px;
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
