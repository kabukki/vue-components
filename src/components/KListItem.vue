<template>
	<li class="k-list-item">
		<slot></slot>
	</li>
</template>
<style lang="scss">
@import '@/scss/_variables';

.k-list-item {

	&:not(:last-child) {
		border-bottom: 1px solid $grey;
	}
}
</style>
