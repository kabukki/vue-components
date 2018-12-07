<script>
import Colorable from '../mixins/Colorable';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default {
	mixins: [ Colorable ],
	props: {
		outline: Boolean,
		flat: Boolean,
		block: Boolean,
		loading: Boolean
	},
	computed: {
		classes () {
			return {
				's-button': true,
				outline: this.outline,
				flat: this.flat,
				block: this.block,
				loading: this.loading
			};
		}
	},
	methods: {
		genLoader () {
			const icon = this.$createElement(FontAwesomeIcon, {
				props: {
					icon: faSpinner,
					spin: true
				}
			});
			return this.$createElement('span', { class: 'loader' }, [ icon ]);
		}
	},
	render (h) {
		const data = this.setColor(this.color, {
			class: this.classes,
			attrs: this.$attrs,
			on: this.$listeners
		});
		let children = [ this.$slots.default ];

		if (this.loading) {
			children.push(this.genLoader());
		}
		
		return h('button', data, children);
	}
};
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';

/**
 * Solid button
 */
@mixin button ($color) {
	color: $grey-lightest;
	background-color: $color;
	border: 1px solid $color;
}

/**
 * Inverted button
 */
@mixin button-outline ($color) {
	color: $color;
	border: 1px solid $color;

	&:hover {
		color: $white;
		background-color: $color;
	}
}

/**
 * Flat button
 */
@mixin button-flat ($color) {
	color: $color;

	&:hover {
		// color: $grey-dark;
	}
}

.s-button {
	@include clickable;

	position: relative;
	text-transform: uppercase;
	font-family: inherit;
	letter-spacing: 1px;
	min-width: 100px;
	padding: 10px 20px;
	margin: 8px 0;
	z-index: 1;
	transition: all .2s;

	// Default style
	color: $grey-dark;
	background-color: $grey-light;
	border: 1px solid $grey-light;

	@each $class, $color in $color-map {
		&.#{$class} {
			@include button ($color);
		}
	}

	&:disabled {
		filter: grayscale(1);
		cursor: not-allowed;
		// background-color: red !important;
	}

	&.outline {
		transition: background-color .2s;
		background-color: transparent;

		@each $class, $color in $color-map {
			&.#{$class} {
				@include button-outline ($color);
			}
		}
	}

	&.flat {
		border: none;
		background-color: transparent;
		color: $grey-dark;

		@each $class, $color in $color-map {
			&.#{$class} {
				@include button-flat ($color);
			}
		}
	}

	&.block {
		display: block;
		width: 100%;
	}

	&.loading {
		pointer-events: none;

		.loader {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			display: flex;
			justify-content: center;
			align-items: center;
			background-color: inherit;
			z-index: 2;
		}
	}

}
</style>
