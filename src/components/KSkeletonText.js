export default {
	name: 'KSkeletonText',
	props: {
		lines: {
			type: Number,
			default: 3
		}
	},
	methods: {
		genLines () {
			return new Array(this.lines).fill(0).map(_ => this.$createElement('div', {
				class: 'k-skeleton-text-line'
			}));
		}
	},
	render (h) {
		return h('div', {
			class: 'k-skeleton-text'
		}, this.genLines());
	}
};
