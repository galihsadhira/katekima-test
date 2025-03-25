// import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: HomeView,
//         },
//         {
//             path: '/about',
//             name: 'about',
//             // route level code-splitting
//             // this generates a separate chunk (About.[hash].js) for this route
//             // which is lazy-loaded when the route is visited.
//             component: () => import('../views/AboutView.vue'),
//         },
//     ],
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import ListView from '@/views/ListView.vue';
import DetailView from '@/views/DetailView.vue';
// import AddEditView from '@/views/AddEditView.vue';

const routes = [
    { path: '/', component: ListView },
    { path: '/detail/:id', component: DetailView },
    // { path: '/add', component: AddEditView },
    // { path: '/edit/:id', component: AddEditView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
