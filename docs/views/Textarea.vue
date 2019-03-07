<template>
	<div>
		<h1>Textarea</h1>
		<p>Textarea component</p>
		<hr>
		<h2>Examples</h2>
		<h3>Text</h3>
		<KTextarea placeholder="Your text" v-model="text"/>
		<hr>
		<h2>Usage</h2>
		<p>TODO</p>
		<hr>
		<h2>Reference</h2>
		<p>Nothing to show.</p>
	</div>
</template>
<script>
export default {
	data ()	 {
		return {
			text: ''
		};
	}
};
</script>