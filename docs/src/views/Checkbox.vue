<template>
	<ComponentDoc
		name="Checkbox"
		description="Checkbox component"
		:reference="reference"
	>
		<h3>Color</h3>
		<div class="flex">
			<KCheckbox v-model="checked"/>
			<KCheckbox color="primary" v-model="checked"/>
			<KCheckbox color="secondary" v-model="checked"/>
			<KCheckbox color="accent" v-model="checked"/>
			<KCheckbox color="success" v-model="checked"/>
			<KCheckbox color="warning" v-model="checked"/>
			<KCheckbox color="error" v-model="checked"/>
		</div>
		<h3>With label</h3>
		<div class="flex">
			<KCheckbox label="Default" v-model="checked"/>
			<KCheckbox label="Primary" color="primary" v-model="checked"/>
			<KCheckbox label="Secondary" color="secondary" v-model="checked"/>
			<KCheckbox label="Accent" color="accent" v-model="checked"/>
			<KCheckbox label="Success" color="success" v-model="checked"/>
			<KCheckbox label="Warning" color="warning" v-model="checked"/>
			<KCheckbox label="Error" color="error" v-model="checked"/>
		</div>
		<h3>Disabled</h3>
		<div class="flex">
			<KCheckbox label="Default" disabled v-model="checked"/>
			<KCheckbox label="Primary" color="primary" disabled v-model="checked"/>
			<KCheckbox label="Secondary" color="secondary" disabled v-model="checked"/>
			<KCheckbox label="Accent" color="accent" disabled v-model="checked"/>
			<KCheckbox label="Success" color="success" disabled v-model="checked"/>
			<KCheckbox label="Warning" color="warning" disabled v-model="checked"/>
			<KCheckbox label="Error" color="error" disabled v-model="checked"/>
		</div>
		<h3>With helper text</h3>
		<div class="flex">
			<KCheckbox label="Default" help="This is a helper text!" v-model="checked"/>
			<KCheckbox label="Primary" color="primary" help="This is a helper text!" v-model="checked"/>
			<KCheckbox label="Secondary" color="secondary" help="This is a helper text!" v-model="checked"/>
			<KCheckbox label="Accent" color="accent" help="This is a helper text!" v-model="checked"/>
			<KCheckbox label="Success" color="success" help="This is a helper text!" v-model="checked"/>
			<KCheckbox label="Warning" color="warning" help="This is a helper text!" v-model="checked"/>
			<KCheckbox label="Error" color="error" help="This is a helper text!" v-model="checked"/>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			checked: true,
			reference: {
				props: [
					{
						name: 'color',
						type: String,
						default: undefined,
						description: 'one of: primary, secondary, accent, success, warning, error'
					}, {
						name: 'disabled',
						type: Boolean,
						default: false,
						description: 'disable the component'
					}, {
						name: 'label',
						type: String,
						default: undefined,
						description: 'The checkbox label or title'
					}, {
						name: 'help',
						type: String,
						default: undefined,
						description: 'Adds a small helper text after the checkbox'
					}
				]
			}
		};
	}
};
</script>
