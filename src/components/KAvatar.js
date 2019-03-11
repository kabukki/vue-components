export default {
	props: {
		src: String,
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
			attrs: {
				role: 'img'
			},
			style: {
				width: this.actualSize,
				height: this.actualSize,
				backgroundImage: `url(${this.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}
		};
		
		return h('div', data);
	}
};
