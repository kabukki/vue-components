<template>
	<div>
		<h1>Skeleton</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Avatar</h3>
		<div class="flex">
			<SSkeletonAvatar/>
			<SSkeletonAvatar :size="60"/>
			<SSkeletonAvatar :size="80"/>
			<SSkeletonAvatar :size="100"/>
		</div>
		<h3>Heading</h3>
		<SSkeletonHeading/>
		<h3>Image</h3>
		<SSkeletonImage/>
		<div class="flex">
			<SSkeletonImage/>
			<SSkeletonImage/>
			<SSkeletonImage/>
		</div>
		<h3>Text</h3>
		<SSkeletonText/>
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