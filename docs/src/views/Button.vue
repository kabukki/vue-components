<template>
	<ComponentDoc
		name="Button"
		:reference="reference"
	>
		<h3>Solid</h3>
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
		<div class="flex">
			<KButton outline loading>Default</KButton>
			<KButton outline color="primary" loading>Primary</KButton>
			<KButton outline color="secondary" loading>Secondary</KButton>
			<KButton outline color="accent" loading>Accent</KButton>
			<KButton outline color="success" loading>Success</KButton>
			<KButton outline color="warning" loading>Warning</KButton>
			<KButton outline color="error" loading>Error</KButton>
		</div>
		<div class="flex">
			<KButton flat loading>Default</KButton>
			<KButton flat color="primary" loading>Primary</KButton>
			<KButton flat color="secondary" loading>Secondary</KButton>
			<KButton flat color="accent" loading>Accent</KButton>
			<KButton flat color="success" loading>Success</KButton>
			<KButton flat color="warning" loading>Warning</KButton>
			<KButton flat color="error" loading>Error</KButton>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			reference: {
				props: [
					{
						name: 'color',
						type: String,
						default: undefined,
						description: 'one of: primary, secondary, accent, success, warning, error'
					}, {
						name: 'outline',
						type: Boolean,
						default: false,
						description: 'Outline style'
					}, {
						name: 'flat',
						type: Boolean,
						default: false,
						description: 'Flat style'
					}, {
						name: 'block',
						type: Boolean,
						default: false,
						description: 'Applies width: 100%'
					}, {
						name: 'loading',
						type: Boolean,
						default: false,
						description: 'Displays a loading icon over the content'
					}
				],
				slots: []
			}
		};
	}
};
</script>
