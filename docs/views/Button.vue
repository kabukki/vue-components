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
			<KButton outline>Default outline</KButton>
			<KButton color="primary" outline>Primary outline</KButton>
			<KButton color="secondary" outline>Secondary outline</KButton>
			<KButton color="accent" outline>Accent outline</KButton>
			<KButton color="success" outline>Success outline</KButton>
			<KButton color="warning" outline>Warning outline</KButton>
			<KButton color="error" outline>Error outline</KButton>
		</div>
		<h3>Flat</h3>
		<div class="flex">
			<KButton flat>Default flat</KButton>
			<KButton color="primary" flat>Primary flat</KButton>
			<KButton color="secondary" flat>Secondary flat</KButton>
			<KButton color="accent" flat>Accent flat</KButton>
			<KButton color="success" flat>Success flat</KButton>
			<KButton color="warning" flat>Warning flat</KButton>
			<KButton color="error" flat>Error flat</KButton>
		</div>
		<h3>Block</h3>
		<KButton block>Default block</KButton>
		<KButton color="primary" block>Primary block</KButton>
		<KButton color="secondary" block>Secondary block</KButton>
		<KButton color="accent" block>Accent block</KButton>
		<KButton color="success" block>Success block</KButton>
		<KButton color="warning" block>Warning block</KButton>
		<KButton color="error" block>Error block</KButton>
		<h3>Loading</h3>
		<p>Applies <code>pointer-events: none</code>.</p>
		<div class="flex">
			<KButton loading>Default loading</KButton>
			<KButton color="primary" loading>Primary loading</KButton>
			<KButton color="secondary" loading>Secondary loading</KButton>
			<KButton color="accent" loading>Accent loading</KButton>
			<KButton color="success" loading>Success loading</KButton>
			<KButton color="warning" loading>Warning loading</KButton>
			<KButton color="error" loading>Error loading</KButton>
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
