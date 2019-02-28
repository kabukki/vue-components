<template>
	<div>
		<h1>Button</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<div class="flex">
			<KButton>Default</KButton>
			<KButton color="primary">Primary</KButton>
			<KButton color="secondary">Secondary</KButton>
			<KButton color="accent">Accent</KButton>
			<KButton color="success">Success</KButton>
			<KButton color="warning">Warning</KButton>
			<KButton color="error">Error</KButton>
		</div>
		<h3>Outline</h3>
		<div class="flex">
			<KButton outline>Default</KButton>
			<KButton color="primary" outline>Primary</KButton>
			<KButton color="secondary" outline>Secondary</KButton>
			<KButton color="accent" outline>Accent</KButton>
			<KButton color="success" outline>Success</KButton>
			<KButton color="warning" outline>Warning</KButton>
			<KButton color="error" outline>Error</KButton>
		</div>
		<h3>Flat</h3>
		<div class="flex">
			<KButton flat>Default</KButton>
			<KButton color="primary" flat>Primary</KButton>
			<KButton color="secondary" flat>Secondary</KButton>
			<KButton color="accent" flat>Accent</KButton>
			<KButton color="success" flat>Success</KButton>
			<KButton color="warning" flat>Warning</KButton>
			<KButton color="error" flat>Error</KButton>
		</div>
		<h3>Block</h3>
		<KButton block>Default</KButton>
		<KButton color="primary" block>Primary</KButton>
		<KButton color="secondary" block>Secondary</KButton>
		<KButton color="accent" block>Accent</KButton>
		<KButton color="success" block>Success</KButton>
		<KButton color="warning" block>Warning</KButton>
		<KButton color="error" block>Error</KButton>
		<h3>Loading</h3>
		<p>Applies <code>pointer-events: none</code>.</p>
		<div class="flex">
			<KButton loading>Default</KButton>
			<KButton color="primary" loading>Primary</KButton>
			<KButton color="secondary" loading>Secondary</KButton>
			<KButton color="accent" loading>Accent</KButton>
			<KButton color="success" loading>Success</KButton>
			<KButton color="warning" loading>Warning</KButton>
			<KButton color="error" loading>Error</KButton>
		</div>
		<hr>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
		<hr>
		<h2>Props</h2>
		<h3>color <small><code>String</code></small></h3>
		<p>default: <i>none</i></p>
		<p>one of: 'primary', 'secondary', 'accent', 'success', 'warning', 'error'</p>
		<h3>outline <small><code>Boolean</code></small></h3>
		<p>default: <code>false</code></p>
		<p>Outline style</p>
		<h3>flat <small><code>Boolean</code></small></h3>
		<p>default: <code>false</code></p>
		<p>Flat style</p>
		<h3>block <small><code>Boolean</code></small></h3>
		<p>default: <code>false</code></p>
		<p>Applies width: 100%</p>
		<h3>loading <small><code>Boolean</code></small></h3>
		<p>default: <code>false</code></p>
		<p>Displays a loading icon over the content</p>
	</div>
</template>
<style lang="scss" scoped>
.flex {
	display: flex;
	justify-content: space-between;
}
</style>
