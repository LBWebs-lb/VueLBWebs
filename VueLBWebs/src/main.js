import Vue from 'vue';
import App from './App.vue';
import Menu from './Menu.vue';
import Acces from './Acces.vue';

Vue.config.productionTip = true;

new Vue({
    render: b => b(Menu),
}
).$mount('#menu');

const routes = {
    '/': App,
    '/acces': Acces
}

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute]
        }
    },
    render(h) { return h(this.ViewComponent) }
})