<template>
	<ComponentDoc
		name="List"
		description="An abstract list component"
	>
		<h3>List of cards</h3>
		<KList>
			<KCard v-for="n in 5" :key="n">
				<p>Lorem ipsum</p>
			</KCard>
		</KList>
	</ComponentDoc>
</template>
