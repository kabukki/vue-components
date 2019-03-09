<template>
	<div>
		<h1>Chip</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Solid</h3>
		<div class="flex">
			<KChip>Default</KChip>
			<KChip color="primary">Primary</KChip>
			<KChip color="secondary">Secondary</KChip>
			<KChip color="accent">Accent</KChip>
			<KChip color="success">Success</KChip>
			<KChip color="warning">Warning</KChip>
			<KChip color="error">Error</KChip>
		</div>
		<h3>Outline</h3>
		<div class="flex">
			<KChip outline>Default</KChip>
			<KChip color="primary" outline>Primary</KChip>
			<KChip color="secondary" outline>Secondary</KChip>
			<KChip color="accent" outline>Accent</KChip>
			<KChip color="success" outline>Success</KChip>
			<KChip color="warning" outline>Warning</KChip>
			<KChip color="error" outline>Error</KChip>
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
				</tbody>
			</table>
		</div>
	</div>
</template>
