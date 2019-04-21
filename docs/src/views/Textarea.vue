<template>
	<ComponentDoc
		name="Textarea"
		description="Textarea component"
		:reference="reference"
	>
		<h3>Text</h3>
		<KTextarea placeholder="Your text" v-model="text"/>
		<KTextarea placeholder="Your text" disabled v-model="text"/>
		<h3>With label</h3>
		<KTextarea placeholder="Your text" label="This is a label" v-model="text"/>
		<h3>With helper text</h3>
		<KTextarea placeholder="Your text" help="This is a helper text!"  v-model="text"/>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			text: '',
			reference: {
				props: [
					{
						name: 'disabled',
						type: Boolean,
						default: false,
						description: 'disable the component'
					}, {
						name: 'label',
						type: String,
						default: undefined,
						description: 'The input label or title'
					}, {
						name: 'help',
						type: String,
						default: undefined,
						description: 'Adds a small helper text after the input'
					}
				]
			}
		};
	}
};
</script>