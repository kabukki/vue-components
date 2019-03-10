<template>
	<div class="overflow">
		<h3>Slots</h3>
		<table v-if="slots && slots.length > 0">
			<thead>
				<tr>
					<th>Name</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="slot in slots" :key="slot.name">
					<td>{{ slot.name }}</td>
					<td>{{ slot.role }}</td>
				</tr>
			</tbody>
		</table>
		<p v-else>Nothing to show.</p>
	</div>
</template>
<script>
export default {
	props: {
		slots: Array
	}
};
</script>
