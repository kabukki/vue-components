<template>
	<div :class="classes">
		<span class="label" v-if="label">{{ label }}</span>
		<div class="input">
			<div class="icon" v-if="icon">
				<font-awesome-icon :icon="icon" />
			</div>
			<input v-bind="$attrs" v-on="listeners" :value="value" :disabled="disabled">
			<div class="clear" v-if="clearable" v-show="value.length > 0" @click="onClear">
				<font-awesome-icon :icon="icons.fasTimesCircle"/>
			</div>
		</div>
		<small class="help" v-if="help">{{ help }}</small>
	</div>
</template>
<script>
import IconConsumer from '../mixins/IconConsumer';

export default {
	name: 'KInput',
	inheritAttrs: false,
	mixins: [ IconConsumer ],
	props: {
		disabled: Boolean,
		icon: String,
		clearable: Boolean,
		label: String,
		help: String,
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
