<script>
import Colorable from '../mixins/Colorable';

export default {
	mixins: [ Colorable ],
	props: {
		image: String
	},
	computed: {
		classes () {
			return {
				's-banner': true,
				image: !!this.image,
				gradient: !this.image
			};
		}
	},
	render (h) {
		let data = {
			class: this.classes
		};

		if (this.image) {
			data.style = {
				backgroundImage: `url('${this.image}')`
			};
		} else {
			data = this.setColor(this.color, data);
		}

		return h('div', data, [ this.$slots.default ]);
	}
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

@mixin banner-gradient ($dark, $light) {
	background-image: linear-gradient(to top, $dark, $light);
}

.s-banner {
	display: flex;
	justify-content: center;
	text-align: center;
	box-shadow: 0 2px 4px $grey;
	padding: 100px;

	&.image {
		background-size: cover;
		background-position: center;
	}
	&.gradient {
		// By default, gradient will be grey
		@include banner-gradient ($grey-dark, $grey-light);

		@each $class, $gradient in $gradient-map {
			$dark: nth($gradient, 1);
			$light: nth($gradient, 2);

			&.#{$class} {
				@include banner-gradient ($dark, $light);
			}
		}
	}
}
</style>
