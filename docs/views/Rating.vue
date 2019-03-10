<template>
	<div>
		<h1>Rating</h1>
		<p>Ratings component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<KRating v-model="rating"/>
		<KRating color="primary" v-model="rating"/>
		<KRating color="secondary" v-model="rating"/>
		<KRating color="accent" v-model="rating"/>
		<KRating color="success" v-model="rating"/>
		<KRating color="warning" v-model="rating"/>
		<KRating color="error" v-model="rating"/>
		<h3>Readonly</h3>
		<KRating readonly v-model="rating"/>
		<KRating readonly color="primary" v-model="rating"/>
		<KRating readonly color="secondary" v-model="rating"/>
		<KRating readonly color="accent" v-model="rating"/>
		<KRating readonly color="success" v-model="rating"/>
		<KRating readonly color="warning" v-model="rating"/>
		<KRating readonly color="error" v-model="rating"/>
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
