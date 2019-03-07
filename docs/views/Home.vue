<template>
	<div>
		<h1>Home</h1>
		<hr>
		<h2>Installation</h2>
		<p>The package is not published yet.</p>
		<hr>
		<h2>Usage</h2>
		<p>Available themes:</p>
		<ul>
			<li v-for="theme in themes" :key="theme.class">
				<strong>{{ theme.name }}</strong>: <code>{{ theme.class }}</code> - {{ theme.description }}
			</li>
		</ul>
		<p>Add the appropriate class to the root element of your application. All child elements will be styled according to the theme.</p>
		<pre>{{ usageExample }}</pre>
		<p>You can also add the <code>dark</code> class to use the dark variant of the theme, if available.</p>
		<hr>
		<h2>Typography</h2>
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<h6>Heading 6</h6>
		<p>Regular text, <small>small text</small>, <strong>bold text</strong>, <em>italic text</em>, <router-link to="/">a link</router-link>.</p>
		<hr>
		<h2>Color scheme</h2>
		<p class="primary-text">Primary</p>
		<p class="secondary-text">Secondary</p>
		<p class="accent-text">Accent</p>
		<p class="success-text">Success</p>
		<p class="warning-text">Warning</p>
		<p class="error-text">Error</p>
		<hr>
		<p><b>Version {{ version }}</b> Bunbled size: 9.5kB (CSS) + 12.3kB (JS)</p>
	</div>
</template>
<script>
import { version } from '../../package.json';
import { themes } from '../../themes';

const usageExample =
`<div id="app" class="shops">
    <!-- theme style will be applied here -->
</div>`;

export default {
	data () {
		return {
			version,
			usageExample,
			themes
		};
	}
};
</script>
