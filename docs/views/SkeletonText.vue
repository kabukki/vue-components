<template>
	<div>
		<h1>Skeleton text</h1>
		<p>A text paragraph that is loading</p>
		<hr>
		<h2>Examples</h2>
		<h3>1 line</h3>
		<KSkeletonText :lines="1"/>
		<h3>2 lines</h3>
		<KSkeletonText :lines="2"/>
		<h3>3 lines</h3>
		<KSkeletonText :lines="3"/>
		<h3>4 lines</h3>
		<KSkeletonText :lines="4"/>
		<h3>5 lines</h3>
		<KSkeletonText :lines="5"/>
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
						<td>lines</td>
						<td><code>Number</code></td>
						<td><code>3</code></td>
						<td>Number of lines to show</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
