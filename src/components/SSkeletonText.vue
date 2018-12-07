<template>
	<div class="s-skeleton-text">
		<div class="s-skeleton-text-line" v-for="n in lines" :key="n"></div>
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
<style lang="scss" scoped>
@import '@/scss/mixins.scss';

.s-skeleton-text {

	.s-skeleton-text-line {
		@include skeleton-element;
		width: 100%;
		height: 12px;

		&:last-child:not(:first-child) {
			width: 80%;
		}
	}
}
</style>
