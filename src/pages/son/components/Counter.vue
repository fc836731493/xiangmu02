<template>
  <div class="counter-component">
      <div class="counter-btn" @click="mins"> - </div>
      <div class="counter-show">
          <input type="Number" v-model="number" @keyup="inputHandler">
      </div>
      <div class="counter-btn" @click="maxs"> + </div>
  </div>
</template>

<script>
export default {
   name:"Counter",
   data(){
       return{
         number:1,  
       }
   },
   props:{
     max:{
        type:Number,
        default:5
     },
     min:{
        type:Number,
        default:1
     }
   },
   methods:{
     mins(){
       if(this.number <= this.min){
         return;  // return的是props传递过来的数据，这个数据如果比最小值this.min小，那么retur回nmin的默认值1.
       }
       this.number--;
     },
     maxs(){
       if(this.number >= this.max){
          return;  // return的是props传递过来的数据，这个数据如果比最大值this.max大，那么return回max的默认值5.
       }
       this.number++;
     },
     inputHandler(){
     let fix;
     if(typeof this.number === "string"){
       fix = Number(this.number.replace(/\D/g,""));
     }else{
       fix = this.number
     }
      if(fix > this.max || fix < this.min){
         fix = this.min
      }
     this.number = fix
   }
   }   
}
</script>

<style scoped>
.counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
.counter-show {
    float: left;
}
.counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
}
.counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
}
.counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>