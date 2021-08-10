import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'home',
          component: ()=>import('./views/Home')
        },
        {
            path: '/blog',
            name: 'blog',
            component: require('./views/Blog').default 
        },
        {
            path: ':slug',
            name: 'post',
            component: ()=>import('./views/Post'),
            props: true
          },
        {
          path: '*',
          component: require('./views/404').default  
        },
    ],
    mode: 'history' //evita que aparezca numerales en la ruta
})