import VueRouter from 'vue-router'
import Vue from "vue";
import {Loading} from 'element-ui'

const routes = [
    {path: '/gohome', component: () => import('./components/HelloWorld')},
    {path: '/gotest', component: () => import('@/Test')},
    {
        path: '/user/:id',
        component: () => import('@/views/user/User'),
        children: [
            {
                name: '用户信息',
                path: 'show',
                component: () => {
                    return import('@/views/user/show')
                }
            },
            {
                path: 'posts',
                component: () => import('@/views/user/posts')
            }
        ]
    }
];

Vue.use(VueRouter)

var router = new VueRouter({
    routes: routes
});

//全局前置守卫
router.beforeEach((to,from, next) => {
    //验证权限
    //todo


    //https://element.eleme.cn/#/zh-CN
    //加载全局动画, 没有生效？？？？
    //实现局部刷新： https://www.cnblogs.com/bgwhite/p/9869886.html
    //eelement-ui如何使用？
    router.loading = Loading.service({
        customClass: 'loading-frame'
    })

    //进行管道中的下一个钩子
    next();
});
//全局后置守卫
router.afterEach((to, from) => {
    //隐藏加载动画
    if (router.loading) {
        // router.loading.close()
        // router.loading = null
    }
});

export default router;