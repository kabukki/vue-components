import Colorable from '../mixins/Colorable';

export default {
	name: 'KChip',
	mixins: [ Colorable ],
	props: {
		outline: Boolean
	},
	computed: {
		classes () {
			return {
				'k-chip': true,
				solid: !this.outline,
				outline: this.outline
			};
		}
	},
	render (h) {
		const data = this.setColor(this.color, {
			class: this.classes,
			attrs: this.$attrs
		});
		
		return h('span', data, [ this.$slots.default ]);
	}
};
