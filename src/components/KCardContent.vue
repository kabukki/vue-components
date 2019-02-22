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
