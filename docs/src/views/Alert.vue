<template>
	<ComponentDoc
		name="Alert"
		:reference="reference"
	>
		<h3>Type</h3>
		<KAlert type="success">Success message</KAlert>
		<KAlert type="warning">Warning message</KAlert>
		<KAlert type="error">Error message</KAlert>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			checked: true,
			reference: {
				props: [
					{
						name: 'type',
						type: String,
						default: 'error',
						description: 'Defines the type of the alert. One of: success, warning, error'
					}
				]
			}
		};
	}
};
</script>
