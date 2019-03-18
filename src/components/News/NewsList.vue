<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key='item.id'>
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<h1>{{ item.message }}</h1>
						<div class="mui-media-body">	
							<span>发表时间：{{ item.time }}</span>
                            <span>点击次数：{{ item.hitTime }}</span>
						</div>
					</router-link>
				</li>
				

			</ul>
        
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            newsList:[
                {
                    id:1,
                    img:'https://avatars0.githubusercontent.com/u/45282113?s=40&u=ea55b3ec122d00fb407c6c6a6ec8e47ccda89684&v=4',
                    message:'幸福',
                    time:"12-12-12 12:12:12",
                    hitTime:0
                },
                {
                    id:2,
                    img:'https://avatars0.githubusercontent.com/u/45282113?s=40&u=ea55b3ec122d00fb407c6c6a6ec8e47ccda89684&v=4',
                    message:'到底',
                    time:"12-12-12 12:12:12",
                    hitTime:0
                },
                {
                    id:3,
                    img:'https://avatars0.githubusercontent.com/u/45282113?s=40&u=ea55b3ec122d00fb407c6c6a6ec8e47ccda89684&v=4',
                    message:'是啥',
                    time:"12-12-12 12:12:12",
                    hitTime:0
                }
            ]
        }
          
    },
    created(){
        //thisgetNewsLis()
    },
    methods:{
        getNewsList(){
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
li{
    h1{
        font-size: 14px;
    }
}
.mui-media-body{
    font-size: 12px;
    color:#226aff;
    display: flex;
    justify-content: space-between;
}

</style>