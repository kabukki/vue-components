<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Colorable from '@/mixins/Colorable';

export default {
	inheritAttrs: false,
	mixins: [ Colorable ],
	props: {
		disabled: Boolean,
		label: String,
		help: String,
		value: {
			type: Boolean,
			required: true
		}
	},
	computed: {
		classes () {
			return {
				'k-checkbox': true,
				disabled: this.disabled
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
		genLabel () {
			const children = [ this.genControl() ];

			if (this.label) {
				children.push(this.$createElement('span', [ this.label ]));
			}

			return this.$createElement('label', children);
		},
		genHelper () {
			return this.$createElement('small', {
				class: 'help'
			}, [ this.help ]);
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
						checked: this.value,
						disabled: this.disabled
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
		const children = [ this.genLabel() ];

		if (this.help) {
			children.push(this.genHelper());
		}

		return h('div', this.setColor(this.color, {
			class: this.classes
		}), children);
	}
};
</script>
