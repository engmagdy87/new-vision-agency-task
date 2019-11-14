import VueRouter from 'vue-router';
import Products from '@/views/containers/Products.vue';

export const routes = [
    { path: '/', name: 'home', component: Products },
    { path: '/products', name: 'products', component: Products },
    { path: '*', component: Products }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
