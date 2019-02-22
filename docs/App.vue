<template>
	<div id="app">
		<header>
			<img id="logo" src="@/assets/icon-vue.png" alt="logo">
			<router-link id="title" to="/">
				<h1>Vue Components</h1>
			</router-link>
			<div id="theme">
				<h3>Theme</h3>
				<select v-model="theme">
					<option :value="theme.class" v-for="theme in themes" :key="theme.class">{{ theme.name }}</option>
					<option :value="null">None</option>
				</select>
			</div>
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
			theme: 'shops',
			themes: [
				{ name: 'Shops', class: 'shops' },
				{ name: 'Alidhan', class: 'alidhan' },
			],
			links: [
				{ title: 'Alert', name: 'alert' },
				{ title: 'Avatar', name: 'avatar' },
				{ title: 'Banner', name: 'banner' },
				{ title: 'Button', name: 'button' },
				{ title: 'Card', name: 'card' },
				{ title: 'Checkbox', name: 'checkbox' },
				{ title: 'Input', name: 'input' },
				{ title: 'Label', name: 'label' },
				{ title: 'Skeleton', name: 'skeleton' }
			]
		};
	},
	watch: {
		theme: {
			handler: 'setTheme',
			immediate: true
		}
	},
	methods: {
		setTheme (theme) {
			document.body.className = theme || '';
		}
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
		#title {
			flex-grow: 1;
		}
		#theme > h3 {
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
					background-color: $grey-dark;
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
