
import * as components from './components';

export default {
	install (Vue) {
		for (const [ key, component ] of Object.entries(components)) {
			Vue.component(key, component);
		}
	}
};
