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
			type: [ String, Number ],
			required: true
		}
	},
	computed: {
		classes () {
			return {
				'k-input': true,
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
