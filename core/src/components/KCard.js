export default {
	name: 'KCard',
	props: {
		hoverable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes () {
			return {
				'k-card': true,
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
