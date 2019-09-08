<template>
  <div class="detail-wrap">
      <div class="detail-left">
          <div class="product-board" >
              <img :src="getUrl" alt="">
              <ul>
                      <router-link v-for="(pro,index) in proList" :key="index" active-class="active" tag="li" :to="{path :'/children/'+pro.tag}">
                          {{ pro.name }}
                      </router-link>
              </ul>           
          </div>
      </div>
      <div class="detail-right">
       <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
    name:"children",
    data(){
        return{
           
           proList:[
               {
                   name:"数据统计",
                   tag:"car"
               },
               {
                   name:"数据预测",
                   tag:"earth"
               },
               {
                   name:"流量分析",
                   tag:"loud"
               },
               {
                   name:"广告发布",
                   tag:"hill"
               }
           ],
           imgsUrl:{
               "/children/earth":require("../assets/images/3.png"),
               "/children/loud":require("../assets/images/2.png"),
               "/children/car":require("../assets/images/1.png"),
               "/children/hill":require("../assets/images/4.png"),
           }
        }
    },
    created(){
        console.log(this.$route.path);
    },
    computed:{
        getUrl(){
             return this.imgsUrl[this.$route.path];  
        }
    }       
}
</script>

<style scoped>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
    float: left;
    width: 200px;
    text-align: center;
}
.detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
}
.product-board {
    background: #fff;
    padding: 20px 0;
}
.product-board ul {
    margin-top: 20px;
}
.product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
    background: #4fc08d;
    color: #fff;
}
.product-board li a {
    display: block;
}
.sales-board {
    background: #fff;
}
.sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
}
.sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
.sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
}
.sales-board-line {
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.sales-board-des p {
    line-height: 1.6;
}
.sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}
.sales-board-des li {
    padding: 5px 0;
}
.sales-board-table {
    width: 100%;
    margin-top: 20px;
}
.sales-board-table th {
    background: #4fc08d;
    color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>