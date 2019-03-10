<template>
	<div :class="classes" :style="carouselStyle">
		<transition
			@after-enter="onAfterEnter"
			:name="transition"
			v-for="n in images.length"
			:key="n"
		>
			<div class="image"
				:style="imageStyle(n - 1)"
				v-show="n - 1 === index"
			/>
		</transition>
		<div class="dots">
			<font-awesome-icon class="dot"
				@click="goTo(n - 1)"
				:icon="n - 1 === index ? circle : circleOutline"
				v-for="n in images.length"
				:key="n"
			/>
		</div>
		<font-awesome-icon class="prev" :icon="chevronLeft" @click="prev"/>
		<font-awesome-icon class="next" :icon="chevronRight" @click="next"/>
	</div>
</template>
<script>
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleOutline } from '@fortawesome/free-regular-svg-icons';

import Colorable from '@/mixins/Colorable';

export default {
	mixins: [ Colorable ],
	props: {
		images: Array,
		contain: Boolean,
		height: {
			type: Number,
			default: 400
		}
	},
	data () {
		return {
			index: 0,
			reverse: false,
			chevronLeft: faChevronLeft,
			chevronRight: faChevronRight,
			circle: faCircle,
			circleOutline: faCircleOutline
		};
	},
	computed: {
		classes () {
			return this.setColor(this.color, {
				class: {
					'k-carousel': true
				}
			}).class;
		},
		carouselStyle () {
			return {
				height: this.height + 'px'
			};
		},
		currentImage () {
			return this.images[this.index];
		},
		transition () {
			return this.reverse ? 'x-ltr' : 'x-rtl';
		}
	},
	methods: {
		onAfterEnter () {
			this.reverse = false;
		},
		prev () {
			this.reverse = true;
			this.index = (this.index + this.images.length - 1) % this.images.length;
		},
		next () {
			this.reverse = false;
			this.index = (this.index + 1) % this.images.length;
		},
		goTo (n) {
			this.reverse = (n < this.index);
			this.index = n;
		},
		imageStyle (n) {
			return {
				backgroundImage: `url(${this.images[n]})`,
				backgroundSize: this.contain ? 'contain' : 'cover'
			};
		}
	}
};
</script>
