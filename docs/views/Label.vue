<template>
	<div>
		<h1>Label</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<div class="flex">
			<SLabel color="red">Red</SLabel>
			<SLabel color="green">Green</SLabel>
			<SLabel color="yellow">Yellow</SLabel>
			<SLabel color="blue">Blue</SLabel>
			<SLabel color="purple">Purple</SLabel>
			<SLabel color="cyan">Cyan</SLabel>
			<SLabel color="success">Success</SLabel>
			<SLabel color="warning">Warning</SLabel>
			<SLabel color="error">Error</SLabel>
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
@import 'vars';

.flex {
	display: flex;
	justify-content: space-between;
}
code {
	background-color: $grey-light;
	padding: 4px;
	font-weight: normal;
}
</style>
