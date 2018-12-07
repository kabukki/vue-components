<script>
import Colorable from '../mixins/Colorable';

export default {
	mixins: [ Colorable ],
	computed: {
		classes () {
			return {
				's-label': true
			};
		}
	},
	render (h) {
		const data = this.setColor(this.color || 'purple', {
			class: this.classes,
			attrs: this.$attrs
		});
		
		return h('span', data, [ this.$slots.default ]);
	}
};
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

/**
 * Basic label
 */
@mixin label ($color) {
	// Old, bad contrast version
	color: $white;
	background-color: $color;
	border: 1px solid $color;
}

.s-label {
	display: inline-block;
	white-space: nowrap;
	border-radius: 20px;
	padding: 4px 10px;
	margin: 4px;

	@each $class, $color in $color-map {
		&.#{$class} {
			@include label ($color);
		}
	}

	&.success {
		color: $green-dark;
		background-color: $green-lightest;
	}
	&.warning {
		color: $yellow-dark;
		background-color: $yellow-lightest;
	}
	&.error {
		color: $red-dark;
		background-color: $red-lightest;
	}
}
</style>
