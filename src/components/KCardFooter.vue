<script>
export default {
	computed: {
		classes () {
			return {
				'k-card-footer': true
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
<style lang="scss">
@import '@/scss/_variables';
@import '@/scss/_mixins';

.k-card-footer {
	@include card-part;
	@include ellipsis;

	flex-grow: 0;
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
	color: $grey-dark;
	background-color: $grey-lightest;
}
</style>
