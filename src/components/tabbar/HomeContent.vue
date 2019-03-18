<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for='item in lunBotuList' :key='item.id'>
            <img :src= 'item.img' alt="">
        </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../assets/images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                    <img src="../../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
		                    <img src="../../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            lunBotuList: [
                {
                    id:1,
                    img:require('../../../src/assets/images/img01.jpg')
                },
                {
                    id:2,
                    img:require('../../../src/assets/images/img02.jpg')
                },
                {
                    id:3,
                    img:require('../../../src/assets/images/img03.jpg')
                }
            ]
        }
    },
    created(){
        //this.getLunBoTu()
    },
    methods:{
        getLunBoTu(){
            this.$http.get('').then(resust=>{
                if(resust.body.status === 0){
                    this.lunBotuList=resust.body.message
                }else{
                    Toast('轮播图加载失败')
                }


            })
            


        }
        
    }
}

</script>
<style lang="scss" scoped>
.mint-swipe {
    height:200px;
}
.mint-swipe-item {
    img {
        width:100%;
        height:100%;

    }
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    

}
.mui-grid-view .mui-table-view-cell {
    font: size 14px;
    img{
        width: 60px;
    }
    border:none;
}
</style>

