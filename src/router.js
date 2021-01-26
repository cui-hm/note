import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
//遍历项目中莫文件 require.context  翻译 要求.上下文
// require.context模块导出（返回）一个（require）函数，这个函数可以接收一个参数：request 函数–这里的 request 应该是指在 require() 语句中的表达式
// require.context 第一个参数不能是变量，webpack在编译阶段无法定位目录

// 导出的方法有 3 个属性： resolve, keys, id。

// resolve 是一个函数，它返回请求被解析后得到的模块 id。
// keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
// id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到
const moduleRouterContext = require.context("@/module/", true, /\.router\.js$/);
const moduleRoutes = moduleRouterContext
  .keys()
  .map(key => moduleRouterContext(key).default);

const routes = [
  {
    path: "*",
    component: () => import("@/module/index/index.vue"),
    props: { moduleRoutes: moduleRoutes }
  }
];
routes.push(...moduleRoutes);

const router = new Router({
//scrollBehavior  vue 的滚动方法
    srollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }
    },
    mode: 'hash',
    routes: routes
})
export default router