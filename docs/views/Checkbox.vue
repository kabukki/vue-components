<template>
	<div>
		<h1>Checkbox</h1>
		<p>Checkbox component</p>
		<hr>
		<h2>Examples</h2>
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
		<hr>
		<h2>Usage</h2>
		<p>TODO</p>
		<hr>
		<h2>Reference</h2>
		<h3>Props</h3>
		<div class="overflow">
			<table>
				<thead>
					<tr>
						<th>Property</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>color</td>
						<td><code>String</code></td>
						<td><code>undefined</code></td>
						<td>one of: 'primary', 'secondary', 'accent', 'success', 'warning', 'error'</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td><code>Boolean</code></td>
						<td><code>false</code></td>
						<td>disable the component</td>
					</tr>
					<tr>
						<td>label</td>
						<td><code>String</code></td>
						<td><code>undefined</code></td>
						<td>The checkbox label</td>
					</tr>
					<tr>
						<td>help</td>
						<td><code>String</code></td>
						<td><code>undefined</code></td>
						<td>Adds a small helper text after the input</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	data ()	 {
		return {
			checked: true
		};
	}
};
</script>
