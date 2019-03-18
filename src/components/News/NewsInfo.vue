<template>
  <div class="newsInfo-content">
    <h1 class="title">这是新闻内容-----{{ id }}</h1>
    <p class="subTitle">
      <span>发表时间：12-12-12 12:12:12</span>
      <span>点击次数：0</span>
    </p>

    <hr>
    <div class="content">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</div>
    <comment-box></comment-box>
  </div>
</template>
<script>
import comment from '../subComponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newInfoList:{}
    };
  },
  created(){
      //getNewInfo()
  },
  components:{
      'comment-box':comment,
  },
  methods: {
    getNewInfo() {
      this.$http.get("").then(resust => {
        if (resust.body.status === 0) {
        } else {
        }
      });
    }
  }
};
</script>
<style lang='scss'>
.newsInfo-content {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
  .subTitle {
    font-size: 13px;
    display: flex;
    color: #226aff;
    justify-content: space-between;
  }
  .content {
      font-size:12px;
      img{
          width:100%
      }
  }
}
</style>