<template>
	<ComponentDoc
		name="Chip"
		:reference="reference"
	>
		<h3>Solid</h3>
		<div class="flex">
			<KChip>Default</KChip>
			<KChip color="primary">Primary</KChip>
			<KChip color="secondary">Secondary</KChip>
			<KChip color="accent">Accent</KChip>
			<KChip color="success">Success</KChip>
			<KChip color="warning">Warning</KChip>
			<KChip color="error">Error</KChip>
		</div>
		<h3>Outline</h3>
		<div class="flex">
			<KChip outline>Default</KChip>
			<KChip color="primary" outline>Primary</KChip>
			<KChip color="secondary" outline>Secondary</KChip>
			<KChip color="accent" outline>Accent</KChip>
			<KChip color="success" outline>Success</KChip>
			<KChip color="warning" outline>Warning</KChip>
			<KChip color="error" outline>Error</KChip>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			rating: 3,
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
					}
				]
			}
		};
	}	
};
</script>
