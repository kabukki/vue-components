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
