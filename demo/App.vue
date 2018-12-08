<template>
	<div id="app">
		<header>
			<router-link to="/">
				<h1>Shops Vue Components</h1>
			</router-link>
		</header>
		<main>
			<nav>
				<router-link :to="{ name: link.name }" active-class="active" v-for="link in links" :key="link.name">
					{{ link.title }}
				</router-link>
			</nav>
			<div class="content">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>
<script>
export default {
	data () {
		return {
			links: [
				{ title: 'Alert', name: 'alert' },
				{ title: 'Avatar', name: 'avatar' },
				{ title: 'Banner', name: 'banner' },
				{ title: 'Button', name: 'button' },
				{ title: 'Card', name: 'card' },
				{ title: 'Checkbox', name: 'checkbox' },
				{ title: 'Input', name: 'input' },
				{ title: 'Label', name: 'label' }
			]
		};
	}	
};
</script>

<style lang="scss">
// TODO appliquer ca a la librairie de base
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700,700i');
@import 'vars';

html { background-color: hsl(210, 16, 97); }
body { margin: 0; font-family: Roboto; }
html, body, #app {
	height: 100%;
}

#app {
	display: flex;
	flex-direction: column;

	> header {
		background-color: $grey;
		color: $grey-lightest;
		padding: 12px;
	}
	> main {
		flex: 1 1 auto;
		display: flex;

		> nav {
			flex: 0 0 auto;	
			background-color: $grey-light;

			> a {
				display: block;
				padding: 12px;
				min-width: 120px;

				&.active {
					background-color: $purple;
				}
			}
		}
		> .content {
			flex: 1 1 auto;
			padding: 24px;
			overflow: auto;
		}
	}
}
</style>
