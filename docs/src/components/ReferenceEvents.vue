<template>
	<div class="overflow">
		<h3>Events</h3>
		<table v-if="events && events.length > 0">
			<thead>
				<tr>
					<th>Name</th>
					<th>Arguments</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="event in events" :key="event.name">
					<td>{{ event.name }}</td>
					<td v-if="event.args.length > 0">
						<code v-for="(arg, index) in event.args" :key="index">
							{{ arg }}
						</code>
					</td>
					<td v-else>
						None
					</td>
					<td>{{ event.description }}</td>
				</tr>
			</tbody>
		</table>
		<p v-else>Nothing to show.</p>
	</div>
</template>
<script>
export default {
	props: {
		events: Array
	}
};
</script>
