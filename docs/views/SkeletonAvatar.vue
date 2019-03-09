<template>
	<div>
		<h1>Skeleton avatar</h1>
		<p>An avatar picture that is loading</p>
		<hr>
		<h2>Examples</h2>
		<h3>Size</h3>
		<div class="flex">
			<KSkeletonAvatar :size="20"/>
			<KSkeletonAvatar :size="40"/>
			<KSkeletonAvatar :size="60"/>
			<KSkeletonAvatar :size="80"/>
			<KSkeletonAvatar :size="100"/>
		</div>
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
					<td>size</td>
					<td><code>Number</code></td>
					<td><code>40</code></td>
					<td>Avatar size in px.</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
