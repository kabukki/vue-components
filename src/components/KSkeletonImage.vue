<template>
	<div class="k-skeleton-image"></div>
</template>
<style lang="scss">
@import '@/scss/_mixins';

.k-skeleton-image {
	@include skeleton-element;
	height: 120px;
	min-width: 180px;
}
</style>
