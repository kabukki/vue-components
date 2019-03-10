import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Examples from './views/Examples';
import Alert from './views/Alert';
import Avatar from './views/Avatar';
import Banner from './views/Banner';
import Button from './views/Button';
import Card from './views/Card';
import Checkbox from './views/Checkbox';
import Chip from './views/Chip';
import Input from './views/Input';
import List from './views/List';
import Rating from './views/Rating';
import SkeletonAvatar from './views/SkeletonAvatar';
import SkeletonImage from './views/SkeletonImage';
import SkeletonHeading from './views/SkeletonHeading';
import SkeletonText from './views/SkeletonText';
import Textarea from './views/Textarea';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}, {
			path: '/examples',
			name: 'examples',
			component: Examples
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
			path: '/chip',
			name: 'chip',
			component: Chip
		}, {
			path: '/skeleton-avatar',
			name: 'skeleton-avatar',
			component: SkeletonAvatar
		}, {
			path: '/skeleton-image',
			name: 'skeleton-image',
			component: SkeletonImage
		}, {
			path: '/skeleton-heading',
			name: 'skeleton-heading',
			component: SkeletonHeading
		}, {
			path: '/skeleton-text',
			name: 'skeleton-text',
			component: SkeletonText
		}, {
			path: '/textarea',
			name: 'textarea',
			component: Textarea
		}, {
			path: '/list',
			name: 'list',
			component: List
		}, {
			path: '/rating',
			name: 'rating',
			component: Rating
		}
	]
});
