<template>
	<div class="k-textarea">
		<textarea v-bind="$attrs" :value="value" @input="onInput"></textarea>
	</div>
</template>
<script>
export default {
	inheritAttrs: false,
	props: {
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
