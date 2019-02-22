<template>
	<div class="k-skeleton-text">
		<div class="k-skeleton-text-line" v-for="n in lines" :key="n"></div>
	</div>
</template>
<script>
export default {
	props: {
		lines: {
			type: Number,
			default: 3
		}
	}
};
</script>
