<script>
export default {
	props: {
		hoverable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes () {
			return {
				's-card': true,
				hoverable: this.hoverable
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

.s-card {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	// box-sizing: border-box;
	// border: 1px solid hsl(206, 23, 73);
	border-radius: 0;
	box-shadow: 0 2px 4px $grey;
	background-color: $white;

	&.hoverable {
		transition: transform .2s;
		
		&:hover {
			transform: translateY(-5px);
		}
	}
}
</style>
