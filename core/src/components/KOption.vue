<template>
	<option class="k-option">
		<slot></slot>
	</option>
</template>
<script>
export default {
	name: 'KOption',
	inheritAttrs: true,
	props: {
		value: {
			required: true
		}
	},
	computed: {
		listeners () {
			return {
				...this.$listeners,
				onchange: this.onX,
				input: this.onX,
				click: this.onX,
				select: this.onX,
				check: this.onX
			};
		}
	},
	methods: {
		onX (e) {
			console.log(e);
		}
	}
};
</script>
