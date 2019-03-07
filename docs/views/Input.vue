<template>
	<div>
		<h1>Input</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
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
					<td>disabled</td>
					<td><code>Boolean</code></td>
					<td><code>false</code></td>
					<td>disable the component (needed to propagate it to the whole component and not disable only the raw input)</td>
				</tr>
				<tr>
					<td>icon</td>
					<td><code>String</code></td>
					<td><code>undefined</code></td>
					<td>Prepends a Font Awesome icon to the input</td>
				</tr>
				<tr>
					<td>clearable</td>
					<td><code>Boolean</code></td>
					<td><code>false</code></td>
					<td>Appends a clear button to the input</td>
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
			text: '',
			number: 0
		};
	}
};
</script>