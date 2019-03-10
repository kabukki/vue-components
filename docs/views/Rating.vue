<template>
	<ComponentDoc
		name="Rating"
		description="Ratings component"
		:reference="reference"
	>
		<h3>Color</h3>
		<div class="flex">
			<KRating v-model="rating"/>
			<KRating color="primary" v-model="rating"/>
			<KRating color="secondary" v-model="rating"/>
			<KRating color="accent" v-model="rating"/>
			<KRating color="success" v-model="rating"/>
			<KRating color="warning" v-model="rating"/>
			<KRating color="error" v-model="rating"/>
		</div>
		<h3>Readonly</h3>
		<div class="flex">
			<KRating readonly v-model="rating"/>
			<KRating readonly color="primary" v-model="rating"/>
			<KRating readonly color="secondary" v-model="rating"/>
			<KRating readonly color="accent" v-model="rating"/>
			<KRating readonly color="success" v-model="rating"/>
			<KRating readonly color="warning" v-model="rating"/>
			<KRating readonly color="error" v-model="rating"/>
		</div>
		<h3>Max</h3>
		<div class="flex">
			<KRating :max="3" v-model="rating"/>
			<KRating :max="5" v-model="rating"/>
			<KRating :max="10" v-model="rating"/>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			rating: 3,
			reference: {
				props: [
					{
						name: 'max',
						type: Number,
						default: 5,
						description: 'Maximum rating mark (number of stars)'
					}, {
						name: 'color',
						type: String,
						default: undefined,
						description: 'one of: primary, secondary, accent, success, warning, error'
					}, {
						name: 'readonly',
						type: Boolean,
						default: false,
						description: 'disallows value selection'
					}
				]
			}
		};
	}	
};
</script>
