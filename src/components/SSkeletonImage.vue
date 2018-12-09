<template>
	<div class="s-skeleton-image"></div>
</template>
<style lang="scss">
@import '@/scss/_mixins';

.s-skeleton-image {
	@include skeleton-element;
	height: 120px;
}
</style>
