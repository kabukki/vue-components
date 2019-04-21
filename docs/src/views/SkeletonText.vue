<template>
	<ComponentDoc
		name="Skeleton text"
		description="A text paragraph that is loading"
		:reference="reference"
	>
		<h3>1 line</h3>
		<KSkeletonText :lines="1"/>
		<h3>2 lines</h3>
		<KSkeletonText :lines="2"/>
		<h3>3 lines</h3>
		<KSkeletonText :lines="3"/>
		<h3>4 lines</h3>
		<KSkeletonText :lines="4"/>
		<h3>5 lines</h3>
		<KSkeletonText :lines="5"/>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			reference: {
				props: [
					{
						name: 'lines',
						type: Number,
						default: 3,
						description: 'Number of lines to show'
					}
				]
			}
		}
	}	
};
</script>
