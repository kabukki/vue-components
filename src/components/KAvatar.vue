<script>
export default {
	props: {
		hoverable: {
			type: Boolean,
			default: false
		},
		size: {
			type: Number,
			default: 40
		}
	},
	computed: {
		classes () {
			return {
				'k-avatar': true,
				hoverable: this.hoverable
			};
		},
		actualSize () {
			return this.size + 'px';
		}
	},
	render (h) {
		const data = {
			class: this.classes,
			attrs: this.$attrs,
			style: {
				width: this.actualSize,
				height: this.actualSize
			}
		};
		
		return h('img', data, [ this.$slots.default ]);
	}
};
</script>
<style lang="scss">
@import '@/scss/_variables';

.k-avatar {
	border-radius: 50%;
	box-shadow: inset 0 0 10px 20px $grey-darkest;

	&.hoverable {
		cursor: pointer;

		&:hover {
			filter: brightness(1.1);
		}
	}
}
</style>
