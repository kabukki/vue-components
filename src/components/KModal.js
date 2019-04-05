export default {
	name: 'KModal',
	props: {
		value: Boolean
	},
	methods: {
		genBackdrop () {
			return this.$createElement('div', {
				class: 'backdrop',
				on: {
					click: this.$emit.bind(this, 'close')
				}
			});
		},
		genContent () {
			return this.$createElement('div', {
				class: 'content'
			}, [ this.$slots.default ]);
		}
	},
	render (h) {
		return h('div', {
			class: 'k-modal',
			attrs: {
				role: 'dialog'
			}
		}, [ this.genBackdrop(), this.genContent() ]);
	}
};
