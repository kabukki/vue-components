<template>
	<ComponentDoc
		name="Modal"
		:reference="reference"
	>
		<KButton @click="show = true">Open</KButton>
		<transition name="fade">
			<KModal @close="show = false" v-if="show">
				<KCard>
					<h1>Hey !</h1>
					<p>What's up ?</p>
					<hr>
					<KButton color="secondary" @click="show = false">Close</KButton>
				</KCard>
			</KModal>
		</transition>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			show: false,
			reference: {
				events: [
					{
						name: 'close',
						args: [],
						description: 'Event emitted when the backdrop is clicked.'
					}
				]
			}
		};
	}
};
</script>