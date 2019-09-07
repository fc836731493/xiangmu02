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
注意：样式分层级，例如{.index-left-block h2}在class=index-left-block下，再新建<div>再包裹<h2>这样标签显示就不会是{.index-left-block h2}。 如果图片太大，可以给图片<img>单独加个样式<class>. 样式两个并列{{.index-board-earth .index-board-item-inner }}，表示上下级关系。上级是前面的那个，下级是后面的那个。例如{ class=["index-board-earth" ,"index-board-item-inner"]}.如果要添加for循环，要注意空格：{class=" 'index-board-'+item.tag "}。要对class样式进行修改，可以单独新建一个class，通过v-if判断来确定显示与否。
在使用for循环的时候，最好要带上key，便于定位。<p v-for="item in list" :key="item.id">（此种id需要初始化）或<p v-for="(item,index) in list" :key="index">


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
我修改跨域问题后，还是显示跨域问题。因为在布置main.js中布置全局的时候有加入网址，在config/index.js文件文件中修改跨域的时候也有加入网址，2个相互冲突。可以删掉main.js中的网址。
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
9、下面的4个部分是一样的，只是数据和图片背景不一样。可以用for循环布局，先用<div>布置整体大框架，再来一个<div>布置4个小方框。再布置方框里面的样式，这其中涉及到class的判断和双重class。
案例分析：:class="['index-board-'+ item.tag , {'line-last': index%2 !== 0 }]"
class后面要跟2个样式，用class="[{ active: isActive }, errorClass]"格式，class后面跟一个数组，数组里面可以是对象，也可以是样式名称。案例中，后面一个样式，有判断过程，是一个对象，{}中前面是样式，后面是判断。样式是死的，要加''，class里面不需要加if也可以判断。
背景图在样式中设置，通过class使用。
.index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;}
10、布置新页面，新页面和布局同级，在pages文件夹中新建vue文件。vue文件相互跳转，要通过路由来跳转。在路由router/index.js中import引入，在components中继续添加路径，形式和router根文件类似，只是path要加"/details"。通过路由跳转，要用 <router-link to="/details">立即购买</router-link>  。跳转使用to，path和index.js中一样。在details页面下，分为左右部分，左边的部分是导航，右边是相应的内容。这个是子父级关系，details是父级，下面的4个页面是子父关系。这样在router中，需要再details级别下，新建children路由
children:{
          path: "/car",
          name: "Car",
          component:Car}
建立了路由。路由引用需要<router-link>。<router-link>组件支持用户在具有路由功能的应用中点击导航。通过to属性<必选>指定目标地址，默认渲染为带有正确连接的<a>标签，可以通过配置tag属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的css类名.实例：<router-link tag="li" :to="{path: list.tag}">123 </router-link>。<router-link>需要用<router-view>来显示。在本例中<div class="detail-left">下面放<router-link>，在<div class="detail-right">下面放<router-view>。路由进来要设置一个默认页面，这就需要重定向，在路由router下面details下面加上“redirect:"/proddetails/car",
点到的标签要显示长亮，可以在class里面加一个{active-class="active"}，实例<p active-class="active">12</p>
本页面上面的图片会跟着一起变动，所以也需要数组，我用for循环，改动src，没有效果。视频讲解中，是讲网址变更为图片。先创建一个computed组件，再在里面新建一个函数getUrl。通过[this.$route.path]获取地址。并将地址赋值给imgUrl。return this.imgUrl[this.$route.path];。在data数据中，新建imgUrl，并通过require，将图片赋值给imgUrl中的地址。最后在视图中通过动态绑定，将img表示出来 <img :src="getUrl" alt="">。
点击导航的时候，路由路径发生改变，那么可以通过路由路径的改变，来改变相应的图片。首先获取路径的变化{this.$route.path}，这个可以获取当前的路由路径。将当前路径交给imgUrl，imgUrl在data中已经赋值，通过return将当前路径imgUrl转换成图片地址。
通过return将图片地址交到getUrl中。此时<img :src="getUrl" alt="">中的地址就根据当前路由变为了相应图片的地址。

children路由嵌套：
component: account,
          // 使用 children 属性，实现子路由，同时，子路由的 path 前面，不要带 / ，否则永远以根路径开始请求，这样不方便我们用户去理解URL地址
          children: [
            { path: 'login', component: login },
            { path: 'register', component: register }
          ]
        }
