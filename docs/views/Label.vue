<template>
	<div>
		<h1>Label</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<div class="flex">
			<KLabel>Default</KLabel>
			<KLabel color="primary">Primary</KLabel>
			<KLabel color="secondary">Secondary</KLabel>
			<KLabel color="accent">Accent</KLabel>
			<KLabel color="success">Success</KLabel>
			<KLabel color="warning">Warning</KLabel>
			<KLabel color="error">Error</KLabel>
		</div>
		<hr>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
		<hr>
		<h2>Props</h2>
		<h3>color <small><code>String</code></small></h3>
		<p>default: 'purple'</p>
		<p>one of:
			<ul>
				<li>Presets: 'success', 'warning', 'error'</li>
				<li>Base colors: 'red', 'green', 'yellow', 'blue', 'purple', 'cyan' with white text (<b>TODO</b> define hues for these colors)</li>
			</ul>
		</p>
	</div>
</template>
<style lang="scss" scoped>
.flex {
	display: flex;
	justify-content: space-between;
}
</style>
