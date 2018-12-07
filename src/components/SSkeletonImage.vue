<template>
	<div class="s-skeleton-image"></div>
</template>
<style lang="scss" scoped>
@import '@/scss/mixins.scss';

.s-skeleton-image {
	@include skeleton-element;
	height: 120px;
}
</style>
