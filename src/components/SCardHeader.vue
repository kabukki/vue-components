<script>
export default {
	computed: {
		classes () {
			return {
				's-card-header': true
			};
		}
	},
	render (h) {
		const data = {
			class: this.classes
		};
		
		return h('div', data, [ this.$slots.default ]);
	}
};
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';

.s-card-header {
	@include card-part;
	@include ellipsis;

	flex-grow: 0;
	border-bottom: 1px solid $grey;
	color: $grey-darkest;
	border-top-left-radius: inherit;
	border-top-right-radius: inherit;

	h1, h2, h3, h4, h5, h6 {
		@include ellipsis;
		margin: 0;
	}
}
</style>
