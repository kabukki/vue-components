<template>
	<div :class="classes">
		<div class="icon" v-if="icon">
			<font-awesome-icon :icon="icon" />
		</div>
		<input v-bind="$attrs" v-on="listeners" :value="value" :disabled="disabled">
		<div class="clear" v-if="clearable" v-show="value.length > 0" @click="onClear">
			<font-awesome-icon icon="times-circle"/>
		</div>
	</div>
</template>
<script>
export default {
	inheritAttrs: false,
	props: {
		disabled: Boolean,
		icon: String,
		clearable: Boolean,
		value: {
			type: String,
			required: true
		}
	},
	computed: {
		classes () {
			return {
				's-input': true,
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
		},
		onClear () {
			this.$emit('input', '');
		}
	}
};
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';

.s-input {
	display: flex;
	align-items: center;
	background-color: $white;
	line-height: 1.5;
	box-shadow: 0 2px 4px $grey;
	margin: 8px 0;
	width: 100%;
	transition: background-color .2s;

	.icon {
		flex: 0 0 auto;
		padding: 10px;
		color: $grey-darkest;
	}
	input {
		flex: 1 0 auto;
		outline: none;
		font-size: 20px;
		font-family: inherit;
		background-color: inherit;
		color: $grey-dark;
		border: none;
		padding: 8px;
		transition: color .2s;

		&:focus {
			color: $purple;
		}
	}
	.clear {
		cursor: pointer;
		padding: 10px;
		color: $grey-darkest;
	}

	&.disabled {
		pointer-events: none;
		background-color: $grey-lightest;

		input {
			color: $grey;
		}
	}
}
</style>
