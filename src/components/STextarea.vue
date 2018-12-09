<template>
	<div class="s-textarea">
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
<style lang="scss">
@import '@/scss/_variables';

.s-textarea {
	display: flex;
	background-color: $white;
	line-height: 1.5;
	box-shadow: 0 2px 4px $grey;
	margin: 8px 0;

	textarea {
		flex: 1;
		outline: none;
		font-size: 20px;
		font-family: inherit;
		color: $grey-dark;
		border: none;
		padding: 8px;
		transition: color .2s;
		resize: vertical;
		
		&:focus {
			color: $purple;
		}
	}
}
</style>
