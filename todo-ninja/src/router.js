import {createRouter,createWebHistory} from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

  const  routes = [
        {
            name: 'HomePage',
            component: HomePage,
            path: '/'
        },
        {
            name: 'AboutPage',
            component: AboutPage,
            path: '/about'
        }
    ]
    const router = createRouter({
        history:createWebHistory(), routes
    });

    export default router