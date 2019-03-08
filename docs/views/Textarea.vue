<template>
	<div>
		<h1>Textarea</h1>
		<p>Textarea component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Text</h3>
		<KTextarea placeholder="Your text" v-model="text"/>
		<KTextarea placeholder="Your text" disabled v-model="text"/>
		<h3>With label</h3>
		<KTextarea placeholder="Your text" label="This is a label" v-model="text"/>
		<h3>With helper text</h3>
		<KTextarea placeholder="Your text" help="This is a helper text!"  v-model="text"/>
		<hr>
		<h2>Usage</h2>
		<p>TODO</p>
		<hr>
		<h2>Reference</h2>
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
					<td>disabled</td>
					<td><code>Boolean</code></td>
					<td><code>false</code></td>
					<td>disable the component</td>
				</tr>
				<tr>
					<td>label</td>
					<td><code>String</code></td>
					<td><code>undefined</code></td>
					<td>The input label or title</td>
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
</template>
<script>
export default {
	data ()	 {
		return {
			text: ''
		};
	}
};
</script>