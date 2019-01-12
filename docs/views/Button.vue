<template>
	<div>
		<h1>Button</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Color</h3>
		<div class="flex">
			<SButton>Default</SButton>
			<SButton color="red">Red</SButton>
			<SButton color="green">Green</SButton>
			<SButton color="yellow">Yellow</SButton>
			<SButton color="blue">Blue</SButton>
			<SButton color="purple">Purple</SButton>
			<SButton color="cyan">Cyan</SButton>
		</div>
		<h3>Outline</h3>
		<div class="flex">
			<SButton outline>Default outline</SButton>
			<SButton color="red" outline>Red outline</SButton>
			<SButton color="green" outline>Green outline</SButton>
			<SButton color="yellow" outline>Yellow outline</SButton>
			<SButton color="blue" outline>Blue outline</SButton>
			<SButton color="purple" outline>Purple outline</SButton>
			<SButton color="cyan" outline>Cyan outline</SButton>
		</div>
		<h3>Flat</h3>
		<div class="flex">
			<SButton flat>Default flat</SButton>
			<SButton color="red" flat>Red flat</SButton>
			<SButton color="green" flat>Green flat</SButton>
			<SButton color="yellow" flat>Yellow flat</SButton>
			<SButton color="blue" flat>Blue flat</SButton>
			<SButton color="purple" flat>Purple flat</SButton>
			<SButton color="cyan" flat>Cyan flat</SButton>
		</div>
		<h3>Block</h3>
		<SButton block>Default block</SButton>
		<SButton color="red" block>Red block</SButton>
		<SButton color="green" block>Green block</SButton>
		<SButton color="yellow" block>Yellow block</SButton>
		<SButton color="blue" block>Blue block</SButton>
		<SButton color="purple" block>Purple block</SButton>
		<SButton color="cyan" block>Cyan block</SButton>
		<h3>Loading</h3>
		<p>Applies <code>pointer-events: none</code>.</p>
		<div class="flex">
			<SButton loading>Default loading</SButton>
			<SButton color="red" loading>Red loading</SButton>
			<SButton color="green" loading>Green loading</SButton>
			<SButton color="yellow" loading>Yellow loading</SButton>
			<SButton color="blue" loading>Blue loading</SButton>
			<SButton color="purple" loading>Purple loading</SButton>
			<SButton color="cyan" loading>Cyan loading</SButton>
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
