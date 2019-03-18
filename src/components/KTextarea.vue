<template>
	<div :class="classes">
		<span class="label" v-if="label">{{ label }}</span>
		<textarea v-bind="$attrs" v-on="listeners" :value="value" :disabled="disabled"></textarea>
		<small class="help" v-if="help">{{ help }}</small>
	</div>
</template>
<script>
export default {
	name: 'KTextarea',
	inheritAttrs: false,
	props: {
		disabled: Boolean,
		label: String,
		help: String,
		value: {
			type: String,
			required: true
		}
	},
	computed: {
		classes () {
			return {
				'k-textarea': true,
				disabled: this.disabled
			};
		},
		listeners () {
			return {
				...this.$listeners,
				input: this.onInput
			};
		}
	},
	methods: {
		onInput (e) {
			this.$emit('input', e.target.value);
		}
	}
};
</script>
