<template>
	<div>
		<h1>Rating</h1>
		<p>Ratings component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<div class="flex">
			<KRating v-model="rating"/>
			<KRating color="primary" v-model="rating"/>
			<KRating color="secondary" v-model="rating"/>
			<KRating color="accent" v-model="rating"/>
			<KRating color="success" v-model="rating"/>
			<KRating color="warning" v-model="rating"/>
			<KRating color="error" v-model="rating"/>
		</div>
		<h3>Readonly</h3>
		<div class="flex">
			<KRating readonly v-model="rating"/>
			<KRating readonly color="primary" v-model="rating"/>
			<KRating readonly color="secondary" v-model="rating"/>
			<KRating readonly color="accent" v-model="rating"/>
			<KRating readonly color="success" v-model="rating"/>
			<KRating readonly color="warning" v-model="rating"/>
			<KRating readonly color="error" v-model="rating"/>
		</div>
		<h3>Max</h3>
		<div class="flex">
			<KRating :max="3" v-model="rating"/>
			<KRating :max="5" v-model="rating"/>
			<KRating :max="10" v-model="rating"/>
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
						<td>max</td>
						<td><code>Number</code></td>
						<td><code>5</code></td>
						<td>Maximum rating mark (number of stars)</td>
					</tr>
					<tr>
						<td>color</td>
						<td><code>String</code></td>
						<td><code>undefined</code></td>
						<td>one of: 'primary', 'secondary', 'accent', 'success', 'warning', 'error'</td>
					</tr>
					<tr>
						<td>readonly</td>
						<td><code>Boolean</code></td>
						<td><code>false</code></td>
						<td>disallows value selection</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			rating: 3
		};
	}	
};
</script>
