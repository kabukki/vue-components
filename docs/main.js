import Vue from 'vue';
import App from './App';
import router from './router';

// Plugins
import './plugins/fontAwesome';
import './plugins/vueComponents';

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
