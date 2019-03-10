<template>
	<ComponentDoc
		name="Card"
		description="Card component"
		:reference="reference"
	>
		<h3>Basic</h3>
		<KCard>
			<h3>Title</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus neque.
				Mauris aliquam et turpis vitae dictum. Phasellus at lorem lorem. Quisque vitae augue nulla.
				Mauris et vulputate nisi. Cras sagittis vulputate varius. Quisque ut diam luctus,
				tincidunt lacus nec, imperdiet neque. Proin elementum erat sed dictum porttitor.
				Pellentesque id neque vel neque aliquam rhoncus nec non magna. Sed varius,
				mauris eget cursus eleifend, tellus enim volutpat arcu, in tempor arcu purus vitae dolor.
			</p>
		</KCard>
		<h3>Hoverable</h3>
		<KCard hoverable>
			<h3>Title</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus neque.
				Mauris aliquam et turpis vitae dictum. Phasellus at lorem lorem. Quisque vitae augue nulla.
				Mauris et vulputate nisi. Cras sagittis vulputate varius. Quisque ut diam luctus,
				tincidunt lacus nec, imperdiet neque. Proin elementum erat sed dictum porttitor.
				Pellentesque id neque vel neque aliquam rhoncus nec non magna. Sed varius,
				mauris eget cursus eleifend, tellus enim volutpat arcu, in tempor arcu purus vitae dolor.
			</p>
		</KCard>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			reference: {
				props: [
					{
						name: 'hoverable',
						type: Boolean,
						default: false,
						description: 'x'
					}
				]
			}
		};
	}
};
</script>
