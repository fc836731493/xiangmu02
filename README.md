1、新建项目 vue init webpack xiangmu02
2、安装依赖 cnpm install
3、分析页面需要3个部分：头部、底部及中间布局部分。头部和底部是公共部分，放在公共组件components文件夹中，和components文件夹同级新建pages文件夹.在pages文件夹中新建根视图layout.vue。在路由index.js中引入根组件layout,layout是根视图，一进来就显示。
4、在components文件夹中新建footer.vue和header.vue，补全。在app.vue文件中引用:
import Headers from "./components/header"
import Footers from "./components/footer"
进行绑定components，然后在视图引用<Headers/>。
5、开始布置头部文件，先绘制css样式，然后使用一个大的样式"app-head"包含整个布局div。再新建子div引入<img>logo图片，加入<span>标签添加头部那句话。后面要添加无序列表<ul>—<li>，这个需要不一样的样式，需要新建<div>，然后添加<ul>标签和<li>标签，头部完成。
6、开始布置底部，先绘制css样式，然后一个大的<div>包括整个内容，然后一个<p>标签格式如下：app-foot p
7、开始布置中间部分，看到页面可以分为左右部分，左边部分又分为上下部分，右边部分又分为上下部分。上面的部分主要是布置数据源，可以通过数组嵌套的方式进行，新建数组[],在数组中添加对象{},在对象中再添加数组[],在数组中再添加对象，对象可以是几个，分别带不同索引，便于for循环引用。循环是用<div>包裹的，用<ul>标签不显示。 <li>标签有列表效果，直接用<p>或<a>标签不会显示列表效果。目标要带有链接，可以先用<li>标签包裹，然后在<a>标签里面添加链接和数据。后面的HOT标志是HOT字带样式，HOT是否显示，可以先确定要显示的值True/False，然后通过v-if来判断，True显示，False不显示。
8、下面的方框是网络请求的数据，安装axios： npm install axios ；
引入：
import axios from 'axios'
Vue.prototype.$axios = axios 
Vue.prototype.HOME = '/api'
安装全局配置：
Axios.defaults.baseURL = 'https://目标网址';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
添加拦截器：
Axios.interceptors.request.use(function (config) {
if (config.method == "post"){
config.data = qs.stringify(config.data)
}
return config;
}, function (error) {
return Promise.reject(error);
});
Axios.interceptors.response.use(function (response) {
return response;
}, function (error) {
return Promise.reject(error);
});
修改config/index.js文件：
module.exports = {
     dev: {
               assetsSubDirectory: 'static',  
               assetsPublicPath: '/',
               proxyTable: {     
                '/api': {                         
                    target:'http://目标网站/',
                    changeOrigin:true,
                    pathRewrite:{
                        '^/api': ''
        }
                }
             }
}
在布局页面添加created函数执行。方框样式和上面一样，标题用<h2>标签标示。下面内容需要创建数据源，先给 remen:[]赋值为空。然后通过axios获取数据源。通过created获取数据源，通过this.remen = res.data 来赋值给数组。在上面再进行v-for循环，调用数据。
我修改跨域问题后，还是显示跨域问题。晚点再处理。
样式的格式，同一个标签里面可以放多个样式，用空格隔开。<div class="index-left-block lastest-news">。<div><li>都可以循环，但是<ul>一般不循环。
8、安装swiper轮播效果，
安装：npm install vue-awesome-swiper --save
全局引入：
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
接下来布局页面，在github上找swiper，新建<div>添加代码：
 <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
将I'm Slide 1替换成本地图片，图片想要链接，可以在<a>标签下添加<img>图片。
在data中操作swiper参数，其中分页符和前后标签去swiper官网找相应代码：
swiperOption: {
           pagination: {
                el: '.swiper-pagination',
            },
            loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
轮播图样式可以根据样式设计