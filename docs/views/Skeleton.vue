<template>
	<div>
		<h1>Skeleton</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Avatar</h3>
		<div class="flex">
			<KSkeletonAvatar/>
			<KSkeletonAvatar :size="60"/>
			<KSkeletonAvatar :size="80"/>
			<KSkeletonAvatar :size="100"/>
		</div>
		<h3>Heading</h3>
		<KSkeletonHeading/>
		<h3>Image</h3>
		<KSkeletonImage/>
		<div class="flex">
			<KSkeletonImage/>
			<KSkeletonImage/>
			<KSkeletonImage/>
		</div>
		<h3>Text</h3>
		<KSkeletonText/>
		<hr>
		<h2>Usage</h2>
		<hr>
		<h2>Props</h2>
	</div>
</template>
<style lang="scss" scoped>
.flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>