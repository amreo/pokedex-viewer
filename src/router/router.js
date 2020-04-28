import vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '@/views/Homepage';
import Pokemon from '@/views/Pokemon';

vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { name: 'homepage', path: '/', component: Homepage},
        { name: 'pokemon', path: '/pokemon/:id', component: Pokemon, props: true  },
    ]
});

export default router;
