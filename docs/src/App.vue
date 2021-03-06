<template>
	<div id="app">
		<header>
			<img id="logo" src="@/assets/vue.png" alt="logo">
			<router-link id="title" to="/">
				<h1>Vue Components</h1>
			</router-link>
			<div id="theme">
				<h3>Theme</h3>
				<select v-model="theme">
					<option :value="theme.className" v-for="theme in themes" :key="theme.className">{{ theme.name }}</option>
					<option :value="null">None</option>
				</select>
				<label>
					<input type="checkbox" v-model="dark"/> Dark
				</label>
			</div>
		</header>
		<main>
			<nav>
				<router-link :to="{ name: link.name }" active-class="active" exact v-for="link in links" :key="link.name">
					{{ link.title }}
				</router-link>
			</nav>
			<div class="content" :class="themeClasses">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>
<script>
import themes from '../../themes';

export default {
	data () {
		return {
			dark: false,
			theme: 'shops',
			themes,
			links: [
				{ title: 'Home', name: 'home' },
				{ title: 'Examples', name: 'examples' },
				{ title: 'Alert', name: 'alert' },
				{ title: 'Avatar', name: 'avatar' },
				{ title: 'Banner', name: 'banner' },
				{ title: 'Button', name: 'button' },
				{ title: 'Card', name: 'card' },
				{ title: 'Carousel', name: 'carousel' },
				{ title: 'Checkbox', name: 'checkbox' },
				{ title: 'Chip', name: 'chip' },
				{ title: 'Input', name: 'input' },
				{ title: 'List', name: 'list' },
				{ title: 'Modal', name: 'modal' },
				{ title: 'Rating', name: 'rating' },
				{ title: 'Select', name: 'select' },
				{ title: 'Skeleton avatar', name: 'skeleton-avatar' },
				{ title: 'Skeleton image', name: 'skeleton-image' },
				{ title: 'Skeleton heading', name: 'skeleton-heading' },
				{ title: 'Skeleton text', name: 'skeleton-text' },
				{ title: 'Textarea', name: 'textarea' }
			]
		};
	},
	computed: {
		themeClasses () {
			return {
				...(this.theme && { [this.theme]: true }),
				dark: this.dark
			};
		}
	}
};
</script>
<style lang="scss">
$grey-lightest:		#ffffff;
$grey-light:		#f6f6f6;
$grey:				#999;;
$grey-dark:			#717e7f;
$grey-darkest:		#364b5d;

html, body, #app {
	height: 100%;
}

body {
	margin: 0;
}

#app {
	display: flex;
	flex-direction: column;
	font-family: Arial, sans-serif;

	> header {
		display: flex;
		align-items: center;
		background-color: $grey-darkest;
		color: $grey-light;
		padding: 12px;
		flex-shrink: 0;
		overflow: auto;

		#logo {
			display: block;
			height: 50px;
			margin-right: 12px;
		}
		a, h1 {
			color: inherit;
			text-decoration: none;
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
			border-right: 1px solid $grey-dark;
			overflow-y: auto;

			> a {
				display: block;
				padding: 12px;
				min-width: 120px;
				color: inherit;
				text-decoration: none;

				&.active {
					background-color: $grey-dark;
					color: $grey-lightest;
				}
				&:hover {
					background-color: $grey;
					color: $grey-lightest;
				}
			}
		}
		> .content {
			flex: 1 1 auto;
			padding: 12px;
			overflow: auto;
		}
	}
}

/**
* Helpers
*/

.flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: auto;

	&.wrap {
		flex-wrap: wrap;
	}
}

.overflow {
	overflow: auto;
}

.container {
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 576px) {
		max-width: 540px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
}
</style>
