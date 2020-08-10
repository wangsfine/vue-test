import Router from 'vue-router';
import Vue from 'vue';

import Foo from './components/Foo.vue';
import HelloWorld from './components/HelloWorld.vue';
import Functional from './components/Functional.vue';
import Mixin from './components/mixin/index.vue';
import Watch from './components/watch/index';

Vue.use(Router);

const routes = [
    { path: '/hello', name: 'Hello', component: HelloWorld },
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/functional', name: 'Functional', component: Functional },
    { path: '/mixin', name: 'Mixin', component: Mixin },
    { path: '/watch', name: 'Watch', component: Watch },
];

export default new Router({
    routes,
});