<template>
	<div>
		<h1>Button</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<div class="flex">
			<KButton>Default</KButton>
			<KButton color="red">Red</KButton>
			<KButton color="green">Green</KButton>
			<KButton color="yellow">Yellow</KButton>
			<KButton color="blue">Blue</KButton>
			<KButton color="purple">Purple</KButton>
			<KButton color="cyan">Cyan</KButton>
		</div>
		<h3>Outline</h3>
		<div class="flex">
			<KButton outline>Default outline</KButton>
			<KButton color="red" outline>Red outline</KButton>
			<KButton color="green" outline>Green outline</KButton>
			<KButton color="yellow" outline>Yellow outline</KButton>
			<KButton color="blue" outline>Blue outline</KButton>
			<KButton color="purple" outline>Purple outline</KButton>
			<KButton color="cyan" outline>Cyan outline</KButton>
		</div>
		<h3>Flat</h3>
		<div class="flex">
			<KButton flat>Default flat</KButton>
			<KButton color="red" flat>Red flat</KButton>
			<KButton color="green" flat>Green flat</KButton>
			<KButton color="yellow" flat>Yellow flat</KButton>
			<KButton color="blue" flat>Blue flat</KButton>
			<KButton color="purple" flat>Purple flat</KButton>
			<KButton color="cyan" flat>Cyan flat</KButton>
		</div>
		<h3>Block</h3>
		<KButton block>Default block</KButton>
		<KButton color="red" block>Red block</KButton>
		<KButton color="green" block>Green block</KButton>
		<KButton color="yellow" block>Yellow block</KButton>
		<KButton color="blue" block>Blue block</KButton>
		<KButton color="purple" block>Purple block</KButton>
		<KButton color="cyan" block>Cyan block</KButton>
		<h3>Loading</h3>
		<p>Applies <code>pointer-events: none</code>.</p>
		<div class="flex">
			<KButton loading>Default loading</KButton>
			<KButton color="red" loading>Red loading</KButton>
			<KButton color="green" loading>Green loading</KButton>
			<KButton color="yellow" loading>Yellow loading</KButton>
			<KButton color="blue" loading>Blue loading</KButton>
			<KButton color="purple" loading>Purple loading</KButton>
			<KButton color="cyan" loading>Cyan loading</KButton>
		</div>
		<hr>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
		<hr>
		<h2>Props</h2>
		<h3>color <small><code>String</code></small></h3>
		<p>default: <i>none</i></p>
		<p>one of: 'red', 'green', 'yellow', 'blue', 'purple', 'cyan'</p>
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
