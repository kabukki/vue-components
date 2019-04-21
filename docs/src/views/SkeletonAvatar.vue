<template>
	<ComponentDoc
		name="Skeleton avatar"
		description="An avatar picture that is loading"
		:reference="reference"
	>
		<h3>Size</h3>
		<div class="flex">
			<KSkeletonAvatar :size="20"/>
			<KSkeletonAvatar :size="40"/>
			<KSkeletonAvatar :size="60"/>
			<KSkeletonAvatar :size="80"/>
			<KSkeletonAvatar :size="100"/>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			reference: {
				props: [
					{
						name: 'size',
						type: Number,
						default: 40,
						description: 'Avatar size in px'
					}
				]
			}
		}
	}	
};
</script>
