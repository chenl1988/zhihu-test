<template>
    <div class="header-wrapper">
        <a href="javascript:;" class="header-logo">知乎</a>
        <a href="javascript:;" class="header-login">登录</a>
    </div>    
</template>

<script>
    
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";
    .header-wrapper{
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height: 100px;
        box-shadow:1px 1px 1px @blueColor;
        background-color: #fff;
        a{
            margin: 0 30px;
            color:@blueColor;
            font-size: 30px;
        }
    }
</style>

