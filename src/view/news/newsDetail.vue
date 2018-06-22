<template>
    <div class="news-wrapper">
        hjkl;sdfghjk
    </div>
</template>
<script>
    import { getNewsDetail } from '../../api/interface.js'
export default {
    components:{
           
    },
    data() {
        return {
            
        }
    },
    created() {
        var newsId = this.$route.query.id;
        getNewsDetail(newsId).then(res=>{
           console.log(res)
        })
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>

</style>
