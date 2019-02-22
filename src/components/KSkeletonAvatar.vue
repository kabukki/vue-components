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
				'k-skeleton-avatar': true
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
