import Vue from 'vue';
import App from './App';
import router from './router';

// Plugins
import './plugins/fontAwesome';

import ShopsComponents from '..';
import '../dist/shops-vue-components.css';

Vue.use(ShopsComponents);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
