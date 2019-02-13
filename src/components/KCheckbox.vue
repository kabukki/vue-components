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
					props: {
						value: this.value
					}
				}),
				this.$createElement(FontAwesomeIcon, {
					props: {
						icon: this.checkboxIcon
					}
				})
			]);
		},
		genSpan () {
			return this.$createElement;
		}
	},
	render (h) {
		const children = [ this.genControl() ];

		if (this.label) {
			children.push(h('span', [ this.label ]));
		}
		
		return h('label', this.setColor(this.color || 'purple', {
			class: this.classes
		}), children);
	}
};
</script>
<style lang="scss">
@import '@/scss/_variables';

.k-checkbox {
	display: flex;
	align-items: center;
	cursor: pointer;
	margin: 8px 0;

	.control {
		position: relative;
		width: 24px;
		height: 24px;
		margin-right: 8px;

		input[type="checkbox"] {
			position: absolute;
			opacity: 0;
		}
		svg {
			width: 100%;
			height: 100%;
		}
	}
	span {
		user-select: none;
	}
}

/* Color */

@each $class, $color in $color-map {
	.k-checkbox.#{$class} > .control > input:checked + svg {
		color: $color;
	}
}
</style>
