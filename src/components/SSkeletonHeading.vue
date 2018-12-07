<template>
	<div class="s-skeleton-heading"></div>
</template>
<style lang="scss" scoped>
@import '@/scss/mixins.scss';

.s-skeleton-heading {
	@include skeleton-element;
	min-width: 25%;
	max-width: 50%;
	height: 24px;
}
</style>
