<template>
  <div class="cmt-container">
    <h3>评论组件</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多120个字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：12-12-12 12:12:12</div>
        <div class="cmt-body">锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：12-12-12 12:12:12</div>
        <div class="cmt-body">锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第二楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：12-12-12 12:12:12</div>
        <div class="cmt-body">锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments: []
    };
  },
  created() {
    //this.getComment()
  },
  methods: {
    getComment() {
      // this.$http.get("api/getconments/" + this.id + "?pageindex=" + this.pageIndex).then(resust => {
      //   if (resust.body.status === 0) {
      //     this.comments = this.comments.concat(resust.body.message);
      //   } else {
      //     Toast("加载评论数据失败");
      //   }
      // });
    },
    getMore() {
      // pageIndex++;
      // getComment();
    },
    postComment() {
    //   if (this.msg.trim().length === 0) {
    //     return Toast("评论内容不能为空");
    //   }
    //   this.$http
    //     .post("api/postComment/" + this.$route.params.id, {
    //       content: this.msg.trim()
    //     })
    //     .then(resust => {
    //       if (resust.body.status === 0) {
    //         var cmt = {
    //           user_name:"匿名用户",
    //           add_time:Date.now(),
    //           content:this.msg.trim()
             
    //         }
    //         this.comments.unshift(cmt);
    //         this.msg = '';
    //       } else {
    //         Toast("评论发表失败");
    //       }
    //     });
    }
  }
}
</script>
<style lang='scss' scoped>
.cmt-container {
  h3 {
    font-size: 14px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 30px;
      }
    }
  }
}
</style>