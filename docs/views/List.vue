<template>
	<div>
		<h1>List</h1>
		<p>An abstract list component</p>
		<hr>
		<h2>Examples</h2>
		<h3>List of cards</h3>
		<KList>
			<KCard v-for="n in 5" :key="n">
				<KCardContent>Lorem ipsum</KCardContent>
			</KCard>
		</KList>
		<hr>
		<h2>Usage</h2>
		<b>TODO</b> code excerpt
		<hr>
		<h2>Reference</h2>
		<h3>Props</h3>
		<p>Nothing to show.</p>
	</div>
</template>
