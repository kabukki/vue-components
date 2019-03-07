<template>
	<div>
		<h1>Checkbox</h1>
		<p>Checkbox component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<KCheckbox v-model="checked"/>
		<KCheckbox color="primary" v-model="checked"/>
		<KCheckbox color="secondary" v-model="checked"/>
		<KCheckbox color="accent" v-model="checked"/>
		<KCheckbox color="success" v-model="checked"/>
		<KCheckbox color="warning" v-model="checked"/>
		<KCheckbox color="error" v-model="checked"/>
		<h3>With label</h3>
		<KCheckbox label="Default" v-model="checked"/>
		<KCheckbox label="Primary" color="primary" v-model="checked"/>
		<KCheckbox label="Secondary" color="secondary" v-model="checked"/>
		<KCheckbox label="Accent" color="accent" v-model="checked"/>
		<KCheckbox label="Success" color="success" v-model="checked"/>
		<KCheckbox label="Warning" color="warning" v-model="checked"/>
		<KCheckbox label="Error" color="error" v-model="checked"/>
		<hr>
		<h2>Usage</h2>
		<p>TODO</p>
		<hr>
		<h2>Reference</h2>
		<h3>Props</h3>
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
					<td>label</td>
					<td><code>String</code></td>
					<td><code>undefined</code></td>
					<td>The checkbox label</td>
				</tr>
				<tr>
					<td>color</td>
					<td><code>String</code></td>
					<td><code>undefined</code></td>
					<td>one of: 'primary', 'secondary', 'accent', 'success', 'warning', 'error'</td>
				</tr>
			</tbody>
		</table>
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