import Vue from 'vue';
import App from './App';
import router from './router';

// Plugins
import './plugins/fontAwesome';
import './plugins/vueComponents';

// Local components
import ComponentDoc from './components/ComponentDoc';

Vue.component('ComponentDoc', ComponentDoc);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
