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
