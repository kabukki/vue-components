<template>
	<ComponentDoc
		name="Input"
		:reference="reference"
	>
		<h3>Text</h3>
		<KInput type="text" placeholder="Your text" v-model="text"/>
		<KInput type="text" placeholder="Your text" v-model="text" disabled/>
		<h3>Number</h3>
		<KInput type="number" placeholder="Your number" v-model.number="number"/>
		<KInput type="number" placeholder="Your number" v-model.number="number" disabled/>
		<h3>Icon</h3>
		<KInput type="text" placeholder="Your text" icon="star" v-model="text"/>
		<p>TODO icon rework</p>
		<h3>Clearable</h3>
		<KInput type="text" placeholder="Your text" clearable v-model="text"/>
		<h3>With label</h3>
		<KInput type="text" label="This is a label" placeholder="Your text" v-model="text"/>
		<h3>With helper text</h3>
		<KInput type="text" placeholder="Your text" help="This is a helper text!" v-model="text"/>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			text: '',
			number: 0,
			reference: {
				props: [
					{
						name: 'disabled',
						type: Boolean,
						default: false,
						description: 'disable the component'
					}, {
						name: 'icon',
						type: String,
						default: undefined,
						description: 'Prepends a Font Awesome icon to the input'
					}, {
						name: 'clearable',
						type: Boolean,
						default: false,
						description: 'Appends a clear button to the input'
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