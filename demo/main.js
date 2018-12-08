import Vue from 'vue';
import App from './App';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ShopsComponents from '..';
import '../dist/shops-vue-components.css';

Vue.use(ShopsComponents);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
	render: h => h(App)
}).$mount('#app');
