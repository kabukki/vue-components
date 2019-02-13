<template>
	<div :class="classes">
		<div class="icon">
			<font-awesome-icon :icon="icon"></font-awesome-icon>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import { faCheckCircle, faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default {
	props: {
		type: {
			type: String,
			default: 'error',
			validator: value => [ 'success', 'warning', 'error' ].includes(value)
		}
	},
	computed: {
		classes () {
			return {
				'k-alert': true,
				[this.type]: true
			};
		},
		icon () {
			switch (this.type) {
				case 'success': return faCheckCircle;
				case 'warning': return faExclamationTriangle;
				case 'error': return faExclamationCircle;
			}
		}
	}
};
</script>
<style lang="scss">
@import '@/scss/_variables';

.k-alert {
	display: flex;
	align-items: center;
	padding: 10px;
	margin: 8px 0;

	&.success {
		color: $green-dark;
		background-color: $green-lightest;
		border-left: 4px solid $green;
	}
	&.warning {
		color: $yellow-dark;
		background-color: $yellow-lightest;
		border-left: 4px solid $yellow;
	}
	&.error {
		color: $red-dark;
		background-color: $red-lightest;
		border-left: 4px solid $red;
	}

	> .icon {
		margin-right: 10px;
	}
	> .content {
		flex-grow: 1;
	}
}
</style>
