1、新建项目 vue init webpack xiangmu02
2、安装依赖 cnpm install
3、分析页面需要3个部分：头部、底部及中间布局部分。头部和底部是公共部分，放在公共组件components文件夹中，和components文件夹同级新建pages文件夹.在pages文件夹中新建根视图layout.vue。在路由index.js中引入根组件layout,layout是根视图，一进来就显示。
4、在components文件夹中新建footer.vue和header.vue，补全。在app.vue文件中引用:
import Headers from "./components/header"
import Footers from "./components/footer"
进行绑定components，然后在视图引用<Headers/>。
5、开始布置头部文件，先绘制css样式，然后使用一个大的样式"app-head"包含整个布局div。再新建子div引入<img>logo图片，加入<span>标签添加头部那句话。后面要添加无序列表<ul>—<li>，这个需要不一样的样式，需要新建<div>，然后添加<ul>标签和<li>标签，头部完成。
6、开始布置底部，先绘制css样式，然后一个大的<div>包括整个内容，然后一个<p>标签格式如下：app-foot p
7、开始布置中间部分，看到页面可以分为左右部分，左边部分又分为上下部分，右边部分又分为上下部分。