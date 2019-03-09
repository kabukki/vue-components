<template>
	<div>
		<h1>Button</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Solid</h3>
		<div class="flex">
			<KButton>Default</KButton>
			<KButton color="primary">Primary</KButton>
			<KButton color="secondary">Secondary</KButton>
			<KButton color="accent">Accent</KButton>
			<KButton color="success">Success</KButton>
			<KButton color="warning">Warning</KButton>
			<KButton color="error">Error</KButton>
		</div>
		<h3>Outline</h3>
		<div class="flex">
			<KButton outline>Default</KButton>
			<KButton color="primary" outline>Primary</KButton>
			<KButton color="secondary" outline>Secondary</KButton>
			<KButton color="accent" outline>Accent</KButton>
			<KButton color="success" outline>Success</KButton>
			<KButton color="warning" outline>Warning</KButton>
			<KButton color="error" outline>Error</KButton>
		</div>
		<h3>Flat</h3>
		<div class="flex">
			<KButton flat>Default</KButton>
			<KButton color="primary" flat>Primary</KButton>
			<KButton color="secondary" flat>Secondary</KButton>
			<KButton color="accent" flat>Accent</KButton>
			<KButton color="success" flat>Success</KButton>
			<KButton color="warning" flat>Warning</KButton>
			<KButton color="error" flat>Error</KButton>
		</div>
		<h3>Block</h3>
		<KButton block>Default</KButton>
		<KButton color="primary" block>Primary</KButton>
		<KButton color="secondary" block>Secondary</KButton>
		<KButton color="accent" block>Accent</KButton>
		<KButton color="success" block>Success</KButton>
		<KButton color="warning" block>Warning</KButton>
		<KButton color="error" block>Error</KButton>
		<h3>Loading</h3>
		<p>Applies <code>pointer-events: none</code>.</p>
		<div class="flex">
			<KButton loading>Default</KButton>
			<KButton color="primary" loading>Primary</KButton>
			<KButton color="secondary" loading>Secondary</KButton>
			<KButton color="accent" loading>Accent</KButton>
			<KButton color="success" loading>Success</KButton>
			<KButton color="warning" loading>Warning</KButton>
			<KButton color="error" loading>Error</KButton>
		</div>
		<div class="flex">
			<KButton outline loading>Default</KButton>
			<KButton outline color="primary" loading>Primary</KButton>
			<KButton outline color="secondary" loading>Secondary</KButton>
			<KButton outline color="accent" loading>Accent</KButton>
			<KButton outline color="success" loading>Success</KButton>
			<KButton outline color="warning" loading>Warning</KButton>
			<KButton outline color="error" loading>Error</KButton>
		</div>
		<div class="flex">
			<KButton flat loading>Default</KButton>
			<KButton flat color="primary" loading>Primary</KButton>
			<KButton flat color="secondary" loading>Secondary</KButton>
			<KButton flat color="accent" loading>Accent</KButton>
			<KButton flat color="success" loading>Success</KButton>
			<KButton flat color="warning" loading>Warning</KButton>
			<KButton flat color="error" loading>Error</KButton>
		</div>
		<hr>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
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
						<td>outline</td>
						<td><code>Boolean</code></td>
						<td><code>false</code></td>
						<td>Outline style</td>
					</tr>
					<tr>
						<td>flat</td>
						<td><code>Boolean</code></td>
						<td><code>false</code></td>
						<td>Flat style</td>
					</tr>
					<tr>
						<td>block</td>
						<td><code>Boolean</code></td>
						<td><code>false</code></td>
						<td>Applies width: 100%</td>
					</tr>
					<tr>
						<td>loading</td>
						<td><code>Boolean</code></td>
						<td><code>false</code></td>
						<td>Displays a loading icon over the content</td>
					</tr>
				</tbody>
			</table>
		</div>
		<h3>Slots</h3>
		<p>--</p>
	</div>
</template>
