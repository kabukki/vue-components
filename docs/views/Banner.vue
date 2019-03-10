<template>
	<ComponentDoc
		name="Banner"
		description="Banner component"
		:reference="reference"
	>
		<h3>Color</h3>
		<KBanner>Default</KBanner>
		<KBanner color="primary">Primary</KBanner>
		<KBanner color="secondary">Secondary</KBanner>
		<KBanner color="accent">Accent</KBanner>
		<KBanner color="success">Success</KBanner>
		<KBanner color="warning">Warning</KBanner>
		<KBanner color="error">Error</KBanner>
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
						name: 'image',
						type: String,
						default: undefined,
						description: 'Background image'
					}
				]
			}
		};
	}
};
</script>
