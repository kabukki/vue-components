<template>
	<div>
		<h1>Input</h1>
		<p>Lorem ipsum dolor sit amet</p>
		<hr>
		<h2>Examples</h2>
		<h3>Text</h3>
		<KInput type="text" placeholder="Your text" v-model="text"/>
		<KInput type="text" placeholder="Your text" v-model="text" disabled/>
		<h3>Number</h3>
		<KInput type="number" placeholder="Your number" v-model.number="number"/>
		<KInput type="number" placeholder="Your number" v-model.number="number" disabled/>
		<h3>Icon</h3>
		<KInput type="text" placeholder="Your text" icon="star" v-model="text"/>
		<p>TODO icon rework</p>
		<h3>Clearable</h3>
		<KInput type="text" placeholder="Your text" clearable v-model="text"/>
		<hr>
		<h2>Usage</h2>
		<p>TODO</p>
		<hr>
		<h2>Props</h2>
		<h3>disabled <small><code>Boolean</code></small></h3>
		<p>default: <code>false</code></p>
		<p>disable the component (needed to propagate it to the whole component and not disable only the raw input)</p>
		<h3>icon <small><code>String</code></small></h3>
		<p>default: <i>none</i></p>
		<p>Prepends a Font Awesome icon to the input.</p>
		<h3>clearable <small><code>Boolean</code></small></h3>
		<p>default: <code>false</code></p>
		<p>Appends a clear button to the input.</p>
	</div>	
</template>
<script>
export default {
	data ()	 {
		return {
			text: '',
			number: 0
		};
	}
};
</script>