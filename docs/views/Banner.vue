<template>
	<div>
		<h1>Banner</h1>
		<p>Banner component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<KBanner>Default</KBanner>
		<KBanner color="primary">Primary</KBanner>
		<KBanner color="secondary">Secondary</KBanner>
		<KBanner color="accent">Accent</KBanner>
		<KBanner color="success">Success</KBanner>
		<KBanner color="warning">Warning</KBanner>
		<KBanner color="error">Error</KBanner>
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
						<td>one of: 'red', 'green', 'yellow', 'blue'</td>
					</tr>
					<tr>
						<td>image</td>
						<td><code>String</code></td>
						<td><code>undefined</code></td>
						<td>Background image</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
