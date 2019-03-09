<template>
	<div>
		<h1>Avatar</h1>
		<p>An avatar is a styled img tag with additional properties.</p>
		<hr>
		<h2>Examples</h2>
		<h3>Size</h3>
		<div class="flex">
			<KAvatar :src="logo" :size="20"/>
			<KAvatar :src="logo" :size="40"/>
			<KAvatar :src="logo" :size="60"/>
			<KAvatar :src="logo" :size="80"/>
			<KAvatar :src="logo" :size="100"/>
		</div>
		<h3>Hoverable</h3>
		<div class="flex">
			<KAvatar :src="logo" hoverable :size="20"/>
			<KAvatar :src="logo" hoverable :size="40"/>
			<KAvatar :src="logo" hoverable :size="60"/>
			<KAvatar :src="logo" hoverable :size="80"/>
			<KAvatar :src="logo" hoverable :size="100"/>
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
					<td>hoverable</td>
					<td><code>Boolean</code></td>
					<td><code>false</code></td>
					<td></td>
				</tr>
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
<script>
export default {
	data () {
		return {
			logo: require('@/assets/icon-vue.png')
		};
	}
};
</script>
