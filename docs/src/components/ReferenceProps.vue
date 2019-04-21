<template>
	<div class="overflow">
		<h3>Props</h3>
		<table v-if="props && props.length > 0">
			<thead>
				<tr>
					<th>Property</th>
					<th>Type</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="property in props" :key="property.name">
					<td>{{ property.name }}</td>
					<td><code>{{ property.type.name }}</code></td>
					<td><code>{{ String(property.default) }}</code></td>
					<td>{{ property.description }}</td>
				</tr>
			</tbody>
		</table>
		<p v-else>Nothing to show.</p>
	</div>
</template>
<script>
export default {
	props: {
		props: Array
	}
};
</script>
