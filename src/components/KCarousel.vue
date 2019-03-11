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
				:icon="n - 1 === index ? icons.fasCircle : icons.farCircle"
				v-for="n in images.length"
				:key="n"
			/>
		</div>
		<font-awesome-icon class="prev" :icon="icons.fasChevronLeft" @click="prev"/>
		<font-awesome-icon class="next" :icon="icons.fasChevronRight" @click="next"/>
	</div>
</template>
<script>
import Colorable from '@/mixins/Colorable';
import IconConsumer from '@/mixins/IconConsumer';

export default {
	mixins: [ Colorable, IconConsumer ],
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
