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
