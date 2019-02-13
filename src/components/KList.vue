<template>
	<ul class="k-list">
		<slot></slot>
	</ul>
</template>
<style lang="scss">
@import '@/scss/_variables';

.k-list {
	padding: 0;
	list-style: none;
	background-color: $white;
	box-shadow: 0 2px 4px $grey;
}
</style>
