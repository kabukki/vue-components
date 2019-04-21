import Colorable from '../mixins/Colorable';

export default {
	name: 'KBanner',
	mixins: [ Colorable ],
	props: {
		image: String
	},
	computed: {
		classes () {
			return {
				'k-banner': true,
				image: !!this.image
			};
		}
	},
	render (h) {
		let data = {
			class: this.classes
		};

		if (this.image) {
			data.style = {
				backgroundImage: `url('${this.image}')`
			};
		} else {
			data = this.setColor(this.color, data);
		}

		return h('div', data, [ this.$slots.default ]);
	}
};
