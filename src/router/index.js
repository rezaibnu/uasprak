import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue'; // Make sure this path is correct
import Home from '../pages/Home.vue'; // Make sure this path is correct
import Pertemuan1 from '../pages/Pertemuan1.vue'; // Make sure this path is correct

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'pertemuan1', component: Pertemuan1 },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
