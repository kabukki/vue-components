<template>
	<li class="s-list-item">
		<slot></slot>
	</li>
</template>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.s-list-item {

	&:not(:last-child) {
		border-bottom: 1px solid $grey;
	}
}
</style>
