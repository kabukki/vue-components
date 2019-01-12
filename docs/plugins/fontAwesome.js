import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Register the icons we need
library.add(
	faTimesCircle,
	faStar
);

Vue.component('font-awesome-icon', FontAwesomeIcon);