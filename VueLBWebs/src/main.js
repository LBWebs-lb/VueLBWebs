import Vue from 'vue';
import App from './App.vue';
import Test from './test.vue';
import Api from './Api.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App),
}
).$mount('#app');
      
new Vue({
    render: b => b(Test),
}
).$mount('#testing');


new Vue({
    render: b => b(Api),
}
).$mount('#api');
