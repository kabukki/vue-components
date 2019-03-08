<template>
	<div class="k-textarea">
		<span class="label" v-if="label">{{ label }}</span>
		<textarea v-bind="$attrs" :value="value" @input="onInput"></textarea>
		<small class="help" v-if="help">{{ help }}</small>
	</div>
</template>
<script>
export default {
	inheritAttrs: false,
	props: {
		label: String,
		help: String,
		value: {
			type: String,
			required: true
		}
	},
	methods: {
		onInput (e) {
			this.$emit('input', e.target.value);
		}
	}
};
</script>
