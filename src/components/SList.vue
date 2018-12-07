<template>
	<ul class="s-list">
		<slot></slot>
	</ul>
</template>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.s-list {
	padding: 0;
	list-style: none;
	background-color: $white;
	box-shadow: 0 2px 4px $grey;
}
</style>
