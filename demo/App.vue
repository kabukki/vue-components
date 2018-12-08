<template>
	<div id="app">
		<h1>Alert</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<SAlert type="success">Lorem ipsum dolor sit amet</SAlert>
		<SAlert type="warning">Lorem ipsum dolor sit amet</SAlert>
		<SAlert type="error">Lorem ipsum dolor sit amet</SAlert>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
		<h2>Props</h2>
		<h3>type <small>String</small></h3>
		<p>default: 'error'</p>
		<p>one of: 'success', 'warning', 'error'</p>

		<h1>Avatar</h1>
		<p>An avatar is a styled img tag with additional properties.</p>
		<SAvatar src=""/>
		<SAvatar src="" hoverable/>
		<SAvatar src="" :size="80"/>
		<h2>Props</h2>
		<h3>hoverable <small>Boolean</small></h3>
		<p>default: false</p>
		<h3>size <small>Number</small></h3>
		<p>default: 40</p>

		<h1>Banner</h1>
		<p>x</p>
		<SBanner>Lorem ipsum</SBanner>
		<SBanner color="red">Lorem ipsum</SBanner>
		<SBanner color="green">Lorem ipsum</SBanner>
		<SBanner color="yellow">Lorem ipsum</SBanner>
		<SBanner color="blue">Lorem ipsum</SBanner>
		<h2>Props</h2>
		<h3>color <small>String</small></h3>
		<p>default: grey</p>
		<p>one of: 'red', 'green', 'yellow', 'blue'</p>
		<p>Gradient color</p>
		<h3>image <small>String</small></h3>
		<p>default: </p>
		<p>Background image</p>

		<h1>Label</h1>
		<p>x</p>
		<SLabel color="red">Lorem</SLabel>
		<SLabel color="green">Lorem</SLabel>
		<SLabel color="yellow">Lorem</SLabel>
		<SLabel color="blue">Lorem</SLabel>
		<SLabel color="purple">Lorem</SLabel>
		<SLabel color="cyan">Lorem</SLabel>
		<hr>
		<SLabel color="success">Lorem</SLabel>
		<SLabel color="warning">Lorem</SLabel>
		<SLabel color="error">Lorem</SLabel>
		<h2>Props</h2>
		<h3>color <small>String</small></h3>
		<p>default: 'purple'</p>
		<p>one of:
			<ul>
				<li>Presets: 'success', 'warning', 'error'</li>
				<li>Base colors: 'red', 'green', 'yellow', 'blue', 'purple', 'cyan' with white text (<b>TODO</b> define hues for these colors)</li>
			</ul>
		</p>
	</div>
</template>
<style>
#app {
	font-family: Arial;
	background-color: hsl(210, 16, 97);
}
</style>
