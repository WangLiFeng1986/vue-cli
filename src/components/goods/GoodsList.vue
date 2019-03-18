<template>
  <div class="goods-list">
     <div class="goods-item">
          <img src="https://img14.360buyimg.com/n7/jfs/t1/5159/23/3944/187847/5b9b3b59Ec9e3e5a4/c9f7b59e1ef2ecec.jpg" alt="">
          <h1 class="title">华为（HUAWEI） 荣耀Note10手机 幻夜黑 6G+128G</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199.00</span>
                  <span class="old">￥3599.00</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余60件</span>
              </p>
          </div>
      </div> 
      <div class="goods-item">
          <img src="https://img14.360buyimg.com/n7/jfs/t1/5159/23/3944/187847/5b9b3b59Ec9e3e5a4/c9f7b59e1ef2ecec.jpg" alt="">
          <h1 class="title">华为（HUAWEI） 荣耀Note10手机 幻夜黑 6G+128G</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199.00</span>
                  <span class="old">￥3599.00</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余60件</span>
              </p>
          </div>
      </div> 
      <div class="goods-item">
          <img src="https://img14.360buyimg.com/n7/jfs/t1/5159/23/3944/187847/5b9b3b59Ec9e3e5a4/c9f7b59e1ef2ecec.jpg" alt="">
          <h1 class="title">华为（HUAWEI） 荣耀Note10手机 幻夜黑 6G+128G</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199.00</span>
                  <span class="old">￥3599.00</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余60件</span>
              </p>
          </div>
      </div> 
      <div class="goods-item">
          <img src="https://img14.360buyimg.com/n7/jfs/t1/5159/23/3944/187847/5b9b3b59Ec9e3e5a4/c9f7b59e1ef2ecec.jpg" alt="">
          <h1 class="title">华为（HUAWEI） 荣耀Note10手机 幻夜黑 6G+128G</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199.00</span>
                  <span class="old">￥3599.00</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余60件</span>
              </p>
          </div>
      </div> 
      <div class="goods-item">
          <img src="https://img14.360buyimg.com/n7/jfs/t1/5159/23/3944/187847/5b9b3b59Ec9e3e5a4/c9f7b59e1ef2ecec.jpg" alt="">
          <div class="title">华为（HUAWEI） 荣耀Note10手机 幻夜黑 6G+128G</div>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199.00</span>
                  <span class="old">￥3599.00</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余60件</span>
              </p>
          </div>
      </div> 
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.goods-list{
    display:flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    

}
.goods-item{
    width: 49%;
    margin: 3px 0;
    border:1px solid #cccccc;
    box-shadow: 0 0 8px #cccccc;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
        width:100%;
    }
    .title{
        font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
}
</style>