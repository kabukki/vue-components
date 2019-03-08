<script>
import Colorable from '../mixins/Colorable';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default {
	mixins: [ Colorable ],
	props: {
		outline: Boolean,
		flat: Boolean,
		block: Boolean,
		loading: Boolean
	},
	computed: {
		classes () {
			return {
				'k-button': true,
				solid: !this.outline && !this.flat,
				outline: this.outline,
				flat: this.flat,
				block: this.block,
				loading: this.loading
			};
		}
	},
	methods: {
		genContent () {
			return this.$createElement('span', { class: 'content' }, [ this.$slots.default ]);
		},
		genLoader () {
			const icon = this.$createElement(FontAwesomeIcon, {
				props: {
					icon: faSpinner,
					spin: true
				}
			});
			return this.$createElement('span', { class: 'loader' }, [ icon ]);
		}
	},
	render (h) {
		const data = this.setColor(this.color, {
			class: this.classes,
			attrs: this.$attrs,
			on: this.$listeners
		});
		let children = [ this.genContent() ];

		if (this.loading) {
			children.push(this.genLoader());
		}
		
		return h('button', data, children);
	}
};
</script>
