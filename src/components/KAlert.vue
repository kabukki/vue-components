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
import IconConsumer from '@/mixins/IconConsumer';

export default {
	mixins: [ IconConsumer ],
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
				case 'success': return this.icons.fasCheckCircle;
				case 'warning': return this.icons.fasExclamationTriangle;
				case 'error': return this.icons.fasExclamationCircle;
			}
		}
	}
};
</script>
