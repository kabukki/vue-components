<template>
	<div>
		<h1>Card</h1>
		<p>Card component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Basic</h3>
		<KCard>Lorem ipsum dolor sit amet</KCard>
		<h3>With sections</h3>
		<KCard>
			<KCardHeader>Header</KCardHeader>
			<KCardContent>Content</KCardContent>
			<KCardFooter>Footer</KCardFooter>
		</KCard>
		<h3>Hoverable</h3>
		<KCard hoverable>
			<KCardHeader>Header</KCardHeader>
			<KCardContent>Content</KCardContent>
			<KCardFooter>Footer</KCardFooter>
		</KCard>
		<hr>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
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
					<td>hoverable</td>
					<td><code>Boolean</code></td>
					<td><code>false</code></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
