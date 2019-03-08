<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Colorable from '@/mixins/Colorable';

export default {
	inheritAttrs: false,
	mixins: [ Colorable ],
	props: {
		label: String,
		value: {
			type: Boolean,
			required: true
		}
	},
	computed: {
		classes () {
			return {
				'k-checkbox': true
			};
		},
		listeners () {
			return {
				...this.$listeners,
				input: this.onInput
			};
		},
		checkboxIcon () {
			return this.value ? faCheckSquare : faSquare;
		}
	},
	methods: {
		onInput (e) {
			this.$emit('input', e.target.checked);
		},
		genControl () {
			return this.$createElement('div', {
				class: 'control'
			}, [
				this.$createElement('input', {
					attrs: {
						...this.$attrs,
						type: 'checkbox'
					},
					on: this.listeners,
					domProps: {
						checked: this.value
					}
				}),
				this.$createElement(FontAwesomeIcon, {
					props: {
						icon: this.checkboxIcon
					}
				})
			]);
		}
	},
	render (h) {
		const children = [ this.genControl() ];

		if (this.label) {
			children.push(h('span', [ this.label ]));
		}
		
		return h('label', this.setColor(this.color, {
			class: this.classes
		}), children);
	}
};
</script>
