<template>
	<div>
		<h1>Home</h1>
		<hr>
		<h2>Installation</h2>
		<p>The package is not published yet.</p>
		<hr>
		<p><b>Version {{ version }}</b> Bunbled size: 9.5kB (CSS) + 12.3kB (JS)</p>
	</div>
</template>
<script>
import { version } from '../../package.json';

export default {
	data () {
		return {
			version
		};
	}
};
</script>
<style lang="scss" scoped>
@import 'vars';

code {
	background-color: $grey-light;
	padding: 4px;
	font-weight: normal;
}
</style>

