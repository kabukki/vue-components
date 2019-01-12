import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Alert from './views/Alert';
import Avatar from './views/Avatar';
import Banner from './views/Banner';
import Button from './views/Button';
import Card from './views/Card';
import Checkbox from './views/Checkbox';
import Input from './views/Input';
import Label from './views/Label';
import Skeleton from './views/Skeleton';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}, {
			path: '/alert',
			name: 'alert',
			component: Alert
		}, {
			path: '/avatar',
			name: 'avatar',
			component: Avatar
		}, {
			path: '/banner',
			name: 'banner',
			component: Banner
		}, {
			path: '/button',
			name: 'button',
			component: Button
		}, {
			path: '/card',
			name: 'card',
			component: Card
		}, {
			path: '/checkbox',
			name: 'checkbox',
			component: Checkbox
		}, {
			path: '/input',
			name: 'input',
			component: Input
		}, {
			path: '/label',
			name: 'label',
			component: Label
		}, {
			path: '/skeleton',
			name: 'skeleton',
			component: Skeleton
		}
	]
});
