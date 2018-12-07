<script>
export default {
	computed: {
		classes () {
			return {
				's-card-footer': true
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

.s-card-footer {
	@include card-part;
	@include ellipsis;

	flex-grow: 0;
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
	color: $grey-dark;
	background-color: $grey-lightest;
}
</style>
