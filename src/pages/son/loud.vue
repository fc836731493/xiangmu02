<template>
  <div class="sales-board">
       <div class="sales-board-intro">
       <h2>流量分析</h2>
       <p>是指在获得网站访问量基础数据的情况下对有关数据进行统计、分析、从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
       <div class="sales-board-line">
          <div class="sales-board-line-left">
             购买数量：
          </div>
          <div class="sales-board-line-right">            
            <Counter :max="Counter.max" :min="Counter.min" />
          </div>
        </div> 
         <div class="sales-board-line">
          <div class="sales-board-line-left">
             产品类型：
          </div>
          <div class="sales-board-line-right">            
            <Downmenu :DownData="Downmenu" />
          </div>
        </div>
    </div>  
    <div class="sales-board-des">
         <h2>产品说明</h2>
         <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网站营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
         <h3>用户行为指标</h3>
         <ul>
            <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
            <li>用户在网站的停留时间：</li>
            <li>用户来源网站 （也叫"引导网站"）：</li>
            <li>用户所使用的搜索引擎及其关键词：</li>
            <li>在不同时段的用户访问量情况等。</li>
         </ul>
         <h3>浏览网站方式</h3>
         <ul>
            <li>用户上网设备类型</li>
            <li>用户浏览器的名称和版本</li>
            <li>访问者电脑分辨率显示模式</li>
            <li>用户所使用的的操作系统名称和版本</li>
            <li>用户所在地理区域分布状况等</li>
         </ul>
    </div>

     
  </div>
</template>

<script>
import Counter from "./components/Counter"
import Downmenu from "./components/Downmenu"

export default {
    name:"loud",
    data(){
        return{
          Counter:{
              max:10,
              min:1
          },
          Downmenu:[                                
                        {
                            name:"初级版",
                            value:1
                        },
                        {
                            name:"中级版",
                            value:2
                        },
                        {
                            name:"高级版",
                            value:3
                        }            
                    ]               
        }
    },
    components:{
        Counter,
        Downmenu
    }
}
</script>

<style scoped>
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

.buy-dialog-title {
   font-size: 16px;
   font-weight: bold;
}
.buy-dialog-btn {
   margin-top: 20px;
}
.buy-dialog-table {
   width: 100%;
   margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
   border: 1px solid #e3e3e3;
   text-align: center;
   padding: 5px 0;
}
.buy-dialog-table th {
   background: #4fc08d;
   color: #fff;
   border: 1px solid #4fc08d;
}
.button {
    color: #fff;
    background: #4fc08d;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
}

</style>