<script>
export default {
	computed: {
		classes () {
			return {
				'k-card-content': true
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
@import '@/scss/_mixins';

.k-card-content {
	@include card-part;

	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	color: $grey-dark;
}
</style>
