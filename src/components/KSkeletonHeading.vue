<template>
	<div class="k-skeleton-heading"></div>
</template>
<style lang="scss">
@import '@/scss/_mixins';

.k-skeleton-heading {
	@include skeleton-element;
	min-width: 25%;
	max-width: 50%;
	height: 24px;
}
</style>
