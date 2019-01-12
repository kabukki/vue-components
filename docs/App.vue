<template>
	<div id="app">
		<header>
			<img id="logo" src="@/assets/icon-purple.png" alt="logo">
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
@import 'vars';

html, body, #app {
	height: 100%;
}

#app {
	display: flex;
	flex-direction: column;

	> header {
		display: flex;
		align-items: center;
		background-color: $grey-darkest;
		color: $grey-light;
		padding: 12px;
		flex-shrink: 0;

		#logo {
			display: block;
			height: 50px;
			margin-right: 12px;
		}
		a, h1 {
			color: inherit;
		}
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
				color: inherit;

				&.active {
					background-color: $purple;
					color: $grey-lightest;
				}
				&:hover {
					background-color: $grey;
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
