<template>
	<ComponentDoc
		name="Carousel"
		description="Carousels allow multiple pieces of content to occupy a single, coveted space"
		:reference="reference"
	>
		<h3>Height</h3>
		<KCarousel :height="50" :images="images"/>
		<hr>
		<KCarousel :height="100" :images="images"/>
		<hr>
		<KCarousel :height="200" :images="images"/>
		<h3>Cover vs contain</h3>
		<KCarousel :images="images"/>
		<hr>
		<KCarousel contain :images="images"/>
		<h3>Color</h3>
		<p>Controls can have color.</p>
		<KCarousel :height="100" color="primary" :images="images"/>
		<hr>
		<KCarousel :height="100" color="secondary" :images="images"/>
		<hr>
		<KCarousel :height="100" color="accent" :images="images"/>
		<hr>
		<KCarousel :height="100" color="success" :images="images"/>
		<hr>
		<KCarousel :height="100" color="warning" :images="images"/>
		<hr>
		<KCarousel :height="100" color="error" :images="images"/>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			images: [
				// require('@/assets/vue.png'),
				// require('@/assets/horizontal-purple.png'),
				require('@/assets/wp1.jpeg'),
				require('@/assets/wp2.jpeg'),
				require('@/assets/wp3.jpeg'),
			],
			reference: {
				props: [
					{
						name: 'images',
						type: Array,
						default: '[]',
						description: 'list of images to slide through'
					}, {
						name: 'contain',
						type: Boolean,
						default: false,
						description: 'whether to use background-size: contain instead of cover'
					}, {
						name: 'height',
						type: Number,
						default: 400,
						description: 'carousel height in px'
					}, {
						name: 'color',
						type: String,
						default: undefined,
						description: 'one of: primary, secondary, accent, success, warning, error'
					}
				]
			}
		};
	}
};
</script>

