<script>
export default {
	props: {
		size: {
			type: Number,
			default: 40
		}
	},
	computed: {
		classes () {
			return {
				's-skeleton-avatar': true
			};
		},
		actualSize () {
			return this.size + 'px';
		}
	},
	render (h) {
		const data = {
			class: this.classes,
			style: {
				width: this.actualSize,
				height: this.actualSize
			}
		};
		
		return h('div', data, [ this.$slots.default ]);
	}
};
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';

.s-skeleton-avatar {
	@include skeleton-element;
	border-radius: 50%;
}
</style>
