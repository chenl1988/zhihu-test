<template>
    <div class="news-wrapper">
        <div class="new-image-wrapper">
            <img :src="newsDetailObj.image" alt="" class="news-image" @load="resizeImgFun($event)">
        </div>
        <h4 class="new-title">{{ newsDetailObj.title }}</h4>
        <div class="new-content-wrapper" v-html="newsDetailObj.body"></div>
    </div>
</template>
<script>
    import { getNewsDetail } from '../../api/interface'
    import { resizeImg } from '../../api/utils'

export default {
    components:{
           
    },
    data() {
        return {
            newsDetailObj:{}
        }
    },
    created() {
        var newsId = this.$route.query.id;
        getNewsDetail(newsId).then(res=>{
            console.log(res)
           this.newsDetailObj = res;
        })
    },
    mounted() {
        
    },
    methods: {
        resizeImgFun(_img){
            resizeImg(_img)
        }
    }
}
</script>

<style lang="less" scoped>
    .new-image-wrapper{
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    .new-title{
        padding: 0 30px;
        margin-top: 30px;
        font-size: 30px;
        color:#666;
        text-align: left;
    }
    .new-content-wrapper{
        margin-top: 30px;
        text-align: left;
        padding: 0 30px;
        color:#434343;
    }
    
</style>
